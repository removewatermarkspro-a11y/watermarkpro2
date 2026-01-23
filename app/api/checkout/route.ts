import { NextResponse } from 'next/server';
import { getStripe } from '@/lib/stripe';

export async function POST(req: Request) {
    try {
        const { priceId, quantity = 1, mode = 'payment' } = await req.json();

        if (!priceId) {
            return NextResponse.json({ error: 'Price ID is required' }, { status: 400 });
        }

        // Dynamically get the origin from the request
        const host = req.headers.get('host');
        const protocol = req.headers.get('x-forwarded-proto') || 'http';
        const origin = process.env.NEXT_PUBLIC_APP_URL || `${protocol}://${host}`;

        const stripe = getStripe();
        const session = await stripe.checkout.sessions.create({
            line_items: [
                {
                    price: priceId,
                    quantity: quantity,
                },
            ],
            mode: mode as 'payment' | 'subscription',
            success_url: `${origin}/dashboard?success=true`,
            cancel_url: `${origin}/pricing?canceled=true`,
            // automatic_tax: { enabled: true },
        });

        return NextResponse.json({ url: session.url });
    } catch (error: any) {
        console.error('Stripe Checkout Error:', error);
        return NextResponse.json(
            { error: error.message || 'Internal Server Error' },
            { status: 500 }
        );
    }
}
