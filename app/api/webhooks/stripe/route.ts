import { NextResponse } from 'next/server';
import { headers } from 'next/headers';
import Stripe from 'stripe';
import { getStripe } from '@/lib/stripe';
import { STRIPE_PLANS } from '@/lib/stripe-config';
import { supabase } from '@/lib/supabase';

const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET!;

// Helper function to get credits amount from price ID
function getCreditsFromPriceId(priceId: string): number {
    // Check one-time payments
    for (const [credits, id] of Object.entries(STRIPE_PLANS.oneTime)) {
        if (id === priceId) {
            return parseInt(credits);
        }
    }

    // Check monthly subscriptions
    for (const [credits, id] of Object.entries(STRIPE_PLANS.subscriptions.monthly)) {
        if (id === priceId) {
            return parseInt(credits);
        }
    }

    // Check yearly subscriptions
    for (const [credits, id] of Object.entries(STRIPE_PLANS.subscriptions.yearly)) {
        if (id === priceId) {
            return parseInt(credits);
        }
    }

    console.warn(`Unknown price ID: ${priceId}`);
    return 0;
}

// Helper function to get user by email
async function getUserByEmail(email: string) {
    const { data, error } = await supabase
        .from('users')
        .select('id')
        .eq('email', email)
        .single();

    if (error) {
        console.error('Error fetching user by email:', error);
        return null;
    }

    return data;
}

// Helper function to add credits to user
async function addCreditsToUser(userId: string, amount: number) {
    const { error } = await supabase.rpc('add_credits', {
        p_user_id: userId,
        p_amount: amount,
    });

    if (error) {
        console.error('Error adding credits:', error);
        throw error;
    }

    console.log(`Successfully added ${amount} credits to user ${userId}`);
}

// Helper function to update subscription in database
async function updateSubscriptionInDb(
    userId: string,
    stripeSubscriptionId: string,
    stripeCustomerId: string,
    currentPeriodStart: number,
    currentPeriodEnd: number
) {
    const { error } = await supabase
        .from('subscriptions')
        .update({
            stripe_subscription_id: stripeSubscriptionId,
            stripe_customer_id: stripeCustomerId,
            current_period_start: new Date(currentPeriodStart * 1000).toISOString(),
            current_period_end: new Date(currentPeriodEnd * 1000).toISOString(),
            status: 'active',
            updated_at: new Date().toISOString(),
        })
        .eq('user_id', userId);

    if (error) {
        console.error('Error updating subscription:', error);
        throw error;
    }

    console.log(`Successfully updated subscription for user ${userId}`);
}

export async function POST(req: Request) {
    try {
        const body = await req.text();
        const headersList = await headers();
        const signature = headersList.get('stripe-signature');

        if (!signature) {
            console.error('No Stripe signature found');
            return NextResponse.json({ error: 'No signature' }, { status: 400 });
        }

        const stripe = getStripe();
        let event: Stripe.Event;

        try {
            event = stripe.webhooks.constructEvent(body, signature, webhookSecret);
        } catch (err: any) {
            console.error('Webhook signature verification failed:', err.message);
            return NextResponse.json({ error: `Webhook Error: ${err.message}` }, { status: 400 });
        }

        console.log(`Received event: ${event.type}`);

        // Handle the event
        switch (event.type) {
            case 'checkout.session.completed': {
                const session = event.data.object as Stripe.Checkout.Session;
                console.log('Checkout session completed:', session.id);

                // Get customer email
                const customerEmail = session.customer_details?.email || session.customer_email;
                if (!customerEmail) {
                    console.error('No customer email found in session');
                    return NextResponse.json({ error: 'No customer email' }, { status: 400 });
                }

                // Get user from database
                const user = await getUserByEmail(customerEmail);
                if (!user) {
                    console.error(`User not found for email: ${customerEmail}`);
                    return NextResponse.json({ error: 'User not found' }, { status: 404 });
                }

                // Get line items to determine credits
                const lineItems = await stripe.checkout.sessions.listLineItems(session.id);
                if (!lineItems.data.length) {
                    console.error('No line items found in session');
                    return NextResponse.json({ error: 'No line items' }, { status: 400 });
                }

                const priceId = lineItems.data[0].price?.id;
                if (!priceId) {
                    console.error('No price ID found in line items');
                    return NextResponse.json({ error: 'No price ID' }, { status: 400 });
                }

                const creditsToAdd = getCreditsFromPriceId(priceId);
                if (creditsToAdd === 0) {
                    console.error(`No credits mapping found for price ID: ${priceId}`);
                    return NextResponse.json({ error: 'Invalid price ID' }, { status: 400 });
                }

                // Add credits to user
                await addCreditsToUser(user.id, creditsToAdd);

                // If it's a subscription, update subscription info
                if (session.mode === 'subscription' && session.subscription) {
                    const subscriptionId = typeof session.subscription === 'string'
                        ? session.subscription
                        : session.subscription.id;

                    const subscription = await stripe.subscriptions.retrieve(subscriptionId);

                    await updateSubscriptionInDb(
                        user.id,
                        subscription.id,
                        typeof session.customer === 'string' ? session.customer : (session.customer as any)?.id || '',
                        subscription.current_period_start,
                        subscription.current_period_end
                    );
                }

                console.log(`Successfully processed checkout for user ${user.id}: +${creditsToAdd} credits`);
                break;
            }

            case 'invoice.payment_succeeded': {
                const invoice = event.data.object as Stripe.Invoice;
                console.log('Invoice payment succeeded:', invoice.id);

                // Only process for subscriptions (not one-time payments)
                // @ts-ignore - subscription exists on Invoice type
                if (!invoice.subscription || typeof invoice.subscription !== 'string') {
                    console.log('Invoice is not for a subscription, skipping');
                    break;
                }

                // Get customer email
                const customer = await stripe.customers.retrieve(invoice.customer as string);
                if (customer.deleted) {
                    console.error('Customer has been deleted');
                    return NextResponse.json({ error: 'Customer deleted' }, { status: 400 });
                }

                const customerEmail = customer.email;
                if (!customerEmail) {
                    console.error('No customer email found');
                    return NextResponse.json({ error: 'No customer email' }, { status: 400 });
                }

                // Get user from database
                const user = await getUserByEmail(customerEmail);
                if (!user) {
                    console.error(`User not found for email: ${customerEmail}`);
                    return NextResponse.json({ error: 'User not found' }, { status: 404 });
                }

                // Get subscription to find price ID
                // @ts-ignore - subscription exists on Invoice type
                const subscription = await stripe.subscriptions.retrieve(invoice.subscription);
                const priceId = subscription.items.data[0]?.price.id;

                if (!priceId) {
                    console.error('No price ID found in subscription');
                    return NextResponse.json({ error: 'No price ID' }, { status: 400 });
                }

                const creditsToAdd = getCreditsFromPriceId(priceId);
                if (creditsToAdd === 0) {
                    console.error(`No credits mapping found for price ID: ${priceId}`);
                    return NextResponse.json({ error: 'Invalid price ID' }, { status: 400 });
                }

                // Add credits to user (for recurring subscription payment)
                await addCreditsToUser(user.id, creditsToAdd);

                // Update subscription period
                await updateSubscriptionInDb(
                    user.id,
                    subscription.id,
                    typeof subscription.customer === 'string' ? subscription.customer : (subscription.customer as any).id,
                    subscription.current_period_start,
                    subscription.current_period_end
                );

                console.log(`Successfully processed recurring payment for user ${user.id}: +${creditsToAdd} credits`);
                break;
            }

            case 'customer.subscription.deleted': {
                const subscription = event.data.object as Stripe.Subscription;
                console.log('Subscription deleted:', subscription.id);

                // Get customer email
                const customer = await stripe.customers.retrieve(subscription.customer as string);
                if (customer.deleted) {
                    console.error('Customer has been deleted');
                    return NextResponse.json({ error: 'Customer deleted' }, { status: 400 });
                }

                const customerEmail = customer.email;
                if (!customerEmail) {
                    console.error('No customer email found');
                    return NextResponse.json({ error: 'No customer email' }, { status: 400 });
                }

                // Get user from database
                const user = await getUserByEmail(customerEmail);
                if (!user) {
                    console.error(`User not found for email: ${customerEmail}`);
                    return NextResponse.json({ error: 'User not found' }, { status: 404 });
                }

                // Update subscription status to cancelled
                const { error } = await supabase
                    .from('subscriptions')
                    .update({
                        status: 'cancelled',
                        updated_at: new Date().toISOString(),
                    })
                    .eq('user_id', user.id);

                if (error) {
                    console.error('Error updating subscription status:', error);
                    throw error;
                }

                console.log(`Successfully cancelled subscription for user ${user.id}`);
                break;
            }

            default:
                console.log(`Unhandled event type: ${event.type}`);
        }

        return NextResponse.json({ received: true });
    } catch (error: any) {
        console.error('Webhook handler error:', error);
        return NextResponse.json(
            { error: error.message || 'Internal Server Error' },
            { status: 500 }
        );
    }
}
