import AccountClient from './AccountClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'My Account - Remove Watermark Pro',
    description: 'Manage your Remove Watermark Pro account, subscription, and billing information.',

    alternates: {
        canonical: 'https://removewatermarkpro.co/account',
        languages: {
            'en': 'https://removewatermarkpro.co/account',
            'fr': 'https://removewatermarkpro.co/fr/compte',
            'de': 'https://removewatermarkpro.co/de/konto',
            'es': 'https://removewatermarkpro.co/es/cuenta',
            'pt': 'https://removewatermarkpro.co/pt/conta',
            'ko': 'https://removewatermarkpro.co/ko/account',
            'no': 'https://removewatermarkpro.co/no/konto',
            'x-default': 'https://removewatermarkpro.co/account'
        }
    },

    robots: {
        index: false,  // Do NOT index private pages
        follow: false, // Do NOT follow links
        googleBot: {
            index: false,
            follow: false,
        },
    },
}

export default function AccountPage() {
    return <AccountClient />
}
