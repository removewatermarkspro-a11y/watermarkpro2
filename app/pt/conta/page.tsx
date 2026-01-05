import AccountClient from '@/app/account/AccountClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Minha Conta - Remove Watermark Pro',
    description: 'Gerencie sua conta Remove Watermark Pro, assinatura e informações de cobrança.',

    alternates: {
        canonical: 'https://removewatermarkspro.com/pt/conta',
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

export default function ContaPage() {
    return <AccountClient />
}
