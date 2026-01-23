import type { Metadata } from 'next'
import PrivacyClient from './PrivacyClient'

export const metadata: Metadata = {
    title: 'Privacy Policy | Remove Watermark Pro',
    description: 'Learn how Remove Watermark Pro protects your privacy and handles your data.',

    alternates: {
        canonical: 'https://removewatermarkspro.com/privacy',
        languages: {
            'en': 'https://removewatermarkspro.com/privacy',
            'x-default': 'https://removewatermarkspro.com/privacy'
        }
    },

    robots: {
        index: true,
        follow: true,
    },
}

export default function Privacy() {
    return <PrivacyClient />
}
