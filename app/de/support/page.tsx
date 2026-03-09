import SupportClient from '../../support/SupportClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Support - Remove Watermark Pro | Hilfe & Kontakt',
    description: 'Erhalten Sie Hilfe mit Remove Watermark Pro. Kontaktieren Sie unser Support-Team für Unterstützung bei Wasserzeichenentfernung, Kontoproblemen und technischen Fragen.',

    alternates: {
        canonical: 'https://removewatermarkpro.co/de/support',
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
        title: 'Support - Remove Watermark Pro | Hilfe & Kontakt',
        description: 'Erhalten Sie Hilfe mit Remove Watermark Pro. Kontaktieren Sie unser Support-Team für Unterstützung.',
        url: 'https://removewatermarkpro.co/de/support',
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
