import AccountClient from './AccountClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'My Account - Remove Watermark Pro',
    description: 'Manage your Remove Watermark Pro account, subscription, and billing information.',

    alternates: {
        canonical: 'https://removewatermarkspro.com/account',
        languages: {
            'en': 'https://removewatermarkspro.com/account',
            'fr': 'https://removewatermarkspro.com/fr/compte',
            'de': 'https://removewatermarkspro.com/de/konto',
            'es': 'https://removewatermarkspro.com/es/cuenta',
            'pt': 'https://removewatermarkspro.com/pt/conta',
            'ko': 'https://removewatermarkspro.com/ko/account',
            'no': 'https://removewatermarkspro.com/no/konto',
            'x-default': 'https://removewatermarkspro.com/account'
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
