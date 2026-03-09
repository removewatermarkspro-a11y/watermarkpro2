import type { Metadata } from 'next'
import CookiesClient from './CookiesClient'

export const metadata: Metadata = {
    title: 'Cookie Policy | Remove Watermark Pro',
    description: 'Learn about how Remove Watermark Pro uses cookies and how you can manage them.',

    alternates: {
        canonical: 'https://removewatermarkpro.co/cookies',
        languages: {
            'en': 'https://removewatermarkpro.co/cookies',
            'x-default': 'https://removewatermarkpro.co/cookies'
        }
    },

    robots: {
        index: true,
        follow: true,
    },
}

export default function Cookies() {
    return <CookiesClient />
}
