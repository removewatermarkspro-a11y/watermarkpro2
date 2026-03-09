import SupportClient from '../../support/SupportClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Support - Remove Watermark Pro | Hjelp & Kontakt',
    description: 'Få hjelp med Remove Watermark Pro. Kontakt vårt supportteam for hjelp med vannmerkefjerning, kontoproblemer og tekniske spørsmål.',

    alternates: {
        canonical: 'https://removewatermarkpro.co/no/support',
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
        title: 'Support - Remove Watermark Pro | Hjelp & Kontakt',
        description: 'Få hjelp med Remove Watermark Pro. Kontakt vårt supportteam.',
        url: 'https://removewatermarkpro.co/no/support',
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
