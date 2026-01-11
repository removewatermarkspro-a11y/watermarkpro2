import SupportClient from '../../support/SupportClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Support - Remove Watermark Pro | Hilfe & Kontakt',
    description: 'Erhalten Sie Hilfe mit Remove Watermark Pro. Kontaktieren Sie unser Support-Team für Unterstützung bei Wasserzeichenentfernung, Kontoproblemen und technischen Fragen.',

    alternates: {
        canonical: 'https://removewatermarkspro.com/de/support',
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
        title: 'Support - Remove Watermark Pro | Hilfe & Kontakt',
        description: 'Erhalten Sie Hilfe mit Remove Watermark Pro. Kontaktieren Sie unser Support-Team für Unterstützung.',
        url: 'https://removewatermarkspro.com/de/support',
        siteName: 'Remove Watermark Pro',
        locale: 'de_DE',
        type: 'website',
    },

    twitter: {
        card: 'summary_large_image',
        title: 'Support - Remove Watermark Pro | Hilfe & Kontakt',
        description: 'Erhalten Sie Hilfe mit Remove Watermark Pro. Kontaktieren Sie unser Support-Team.',
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

export default function SupportPageDe() {
    return <SupportClient />
}
