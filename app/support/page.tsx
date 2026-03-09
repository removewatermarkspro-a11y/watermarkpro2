import SupportClient from './SupportClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Support - Remove Watermark Pro | Get Help & Contact Us',
    description: 'Get help with Remove Watermark Pro. Contact our support team for assistance with watermark removal, account issues, and technical questions. Fast and helpful support.',

    alternates: {
        canonical: 'https://removewatermarkpro.co/support',
        languages: {
            'en': 'https://removewatermarkpro.co/support',
            'fr': 'https://removewatermarkpro.co/fr/support',
            'de': 'https://removewatermarkpro.co/de/support',
            'es': 'https://removewatermarkpro.co/es/soporte',
            'pt': 'https://removewatermarkpro.co/pt/suporte',
            'ko': 'https://removewatermarkpro.co/ko/support',
            'no': 'https://removewatermarkpro.co/no/support',
            'x-default': 'https://removewatermarkpro.co/support'
        }
    },

    openGraph: {
        title: 'Support - Remove Watermark Pro | Get Help & Contact Us',
        description: 'Get help with Remove Watermark Pro. Contact our support team for assistance with watermark removal, account issues, and technical questions.',
        url: 'https://removewatermarkpro.co/support',
        siteName: 'Remove Watermark Pro',
        locale: 'en_US',
        type: 'website',
    },

    twitter: {
        card: 'summary_large_image',
        title: 'Support - Remove Watermark Pro | Get Help & Contact Us',
        description: 'Get help with Remove Watermark Pro. Contact our support team for assistance.',
    },

    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
}

export default function SupportPage() {
    return <SupportClient />
}

