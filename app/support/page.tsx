import SupportClient from './SupportClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Support - Remove Watermark Pro | Get Help & Contact Us',
    description: 'Get help with Remove Watermark Pro. Contact our support team for assistance with watermark removal, account issues, and technical questions. Fast and helpful support.',

    alternates: {
        canonical: 'https://removewatermarkspro.com/support',
        languages: {
            'en': 'https://removewatermarkspro.com/support',
            'fr': 'https://removewatermarkspro.com/fr/support',
            'de': 'https://removewatermarkspro.com/de/support',
            'es': 'https://removewatermarkspro.com/es/soporte',
            'pt': 'https://removewatermarkspro.com/pt/suporte',
            'ko': 'https://removewatermarkspro.com/ko/support',
            'no': 'https://removewatermarkspro.com/no/support',
            'x-default': 'https://removewatermarkspro.com/support'
        }
    },

    openGraph: {
        title: 'Support - Remove Watermark Pro | Get Help & Contact Us',
        description: 'Get help with Remove Watermark Pro. Contact our support team for assistance with watermark removal, account issues, and technical questions.',
        url: 'https://removewatermarkspro.com/support',
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

