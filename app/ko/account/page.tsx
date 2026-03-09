import AccountClient from '@/app/account/AccountClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: '내 계정 - Remove Watermark Pro',
    description: 'Remove Watermark Pro 계정, 구독 및 결제 정보를 관리하세요.',

    alternates: {
        canonical: 'https://removewatermarkpro.co/ko/account',
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

export default function AccountPage() {
    return <AccountClient />
}
