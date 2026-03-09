import type { Metadata } from 'next'
import PrivacyClient from './PrivacyClient'

export const metadata: Metadata = {
    title: 'Privacy Policy | Remove Watermark Pro',
    description: 'Learn how Remove Watermark Pro protects your privacy and handles your data.',

    alternates: {
        canonical: 'https://removewatermarkpro.co/privacy',
        languages: {
            'en': 'https://removewatermarkpro.co/privacy',
            'x-default': 'https://removewatermarkpro.co/privacy'
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
