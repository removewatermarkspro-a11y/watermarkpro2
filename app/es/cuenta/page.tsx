import AccountClient from '@/app/account/AccountClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Mi Cuenta - Remove Watermark Pro',
    description: 'Administra tu cuenta de Remove Watermark Pro, suscripción e información de facturación.',

    alternates: {
        canonical: 'https://removewatermarkpro.co/es/cuenta',
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

export default function CuentaPage() {
    return <AccountClient />
}
