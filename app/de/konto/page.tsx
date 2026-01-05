import AccountClient from '@/app/account/AccountClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Mein Konto - Remove Watermark Pro',
    description: 'Verwalten Sie Ihr Remove Watermark Pro-Konto, Abonnement und Rechnungsinformationen.',

    alternates: {
        canonical: 'https://removewatermarkspro.com/de/konto',
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
        index: false,
        follow: false,
        googleBot: {
            index: false,
            follow: false,
        },
    },
}

export default function KontoPage() {
    return <AccountClient />
}
