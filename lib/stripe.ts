import Stripe from 'stripe';

const stripeSecretKey = process.env.STRIPE_SECRET_KEY;

// Only create the Stripe instance if the secret key is available
// This prevents build-time errors when the env var is not set
export const stripe = stripeSecretKey
    ? new Stripe(stripeSecretKey, {
        apiVersion: '2025-12-15.clover',
        typescript: true,
    })
    : null as unknown as Stripe;

// Helper function to ensure stripe is available at runtime
export function getStripe(): Stripe {
    if (!stripe) {
        throw new Error('STRIPE_SECRET_KEY is missing. Please set it in your environment variables.');
    }
    return stripe;
}
