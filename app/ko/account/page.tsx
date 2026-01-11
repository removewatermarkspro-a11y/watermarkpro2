import AccountClient from '@/app/account/AccountClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: '내 계정 - Remove Watermark Pro',
    description: 'Remove Watermark Pro 계정, 구독 및 결제 정보를 관리하세요.',

    alternates: {
        canonical: 'https://removewatermarkspro.com/ko/account',
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

export default function AccountPage() {
    return <AccountClient />
}
