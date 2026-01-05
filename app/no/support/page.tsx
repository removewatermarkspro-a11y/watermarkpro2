import SupportClient from '../../support/SupportClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Support - Remove Watermark Pro | Hjelp & Kontakt',
    description: 'Få hjelp med Remove Watermark Pro. Kontakt vårt supportteam for hjelp med vannmerkefjerning, kontoproblemer og tekniske spørsmål.',

    alternates: {
        canonical: 'https://removewatermarkspro.com/no/support',
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
        title: 'Support - Remove Watermark Pro | Hjelp & Kontakt',
        description: 'Få hjelp med Remove Watermark Pro. Kontakt vårt supportteam.',
        url: 'https://removewatermarkspro.com/no/support',
        siteName: 'Remove Watermark Pro',
        locale: 'no_NO',
        type: 'website',
    },

    twitter: {
        card: 'summary_large_image',
        title: 'Support - Remove Watermark Pro | Hjelp & Kontakt',
        description: 'Få hjelp med Remove Watermark Pro. Kontakt vårt supportteam.',
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

export default function SupportPageNo() {
    return <SupportClient />
}
