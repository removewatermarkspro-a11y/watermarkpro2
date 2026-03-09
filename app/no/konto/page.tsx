import AccountClient from '@/app/account/AccountClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Min Konto - Remove Watermark Pro',
    description: 'Administrer din Remove Watermark Pro-konto, abonnement og faktureringsinformasjon.',

    alternates: {
        canonical: 'https://removewatermarkpro.co/no/konto',
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
