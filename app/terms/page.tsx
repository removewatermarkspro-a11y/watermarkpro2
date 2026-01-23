import type { Metadata } from 'next'
import TermsClient from './TermsClient'

export const metadata: Metadata = {
    title: 'Terms of Service | Remove Watermark Pro',
    description: 'Read the terms and conditions for using Remove Watermark Pro services.',

    alternates: {
        canonical: 'https://removewatermarkspro.com/terms',
        languages: {
            'en': 'https://removewatermarkspro.com/terms',
            'x-default': 'https://removewatermarkspro.com/terms'
        }
    },

    robots: {
        index: true,
        follow: true,
    },
}

export default function Terms() {
    return <TermsClient />
}
