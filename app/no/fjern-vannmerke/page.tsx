import type { Metadata } from 'next'
import WatermarkRemoverClientNo from './WatermarkRemoverClientNo'
import StructuredData, { createSoftwareSchema } from '@/components/StructuredData'

export const metadata: Metadata = {
    title: 'Fjern Vannmerke Gratis | Fjern på 1 Klikk - AI',
    description: 'Fjern vannmerker fra bilder på 1 klikk. Gratis AI-verktøy, raskt og ingen registrering nødvendig. Prøv nå og få profesjonelle resultater øyeblikkelig!',

    alternates: {
        canonical: 'https://removewatermarkspro.com/no/fjern-vannmerke',
        languages: {
            'en': 'https://removewatermarkspro.com/watermark-remover',
            'fr': 'https://removewatermarkspro.com/fr/enlever-filigrane',
            'de': 'https://removewatermarkspro.com/de/wasserzeichen-entfernen',
            'es': 'https://removewatermarkspro.com/es/eliminar-marca-agua',
            'pt': 'https://removewatermarkspro.com/pt/remover-marca-dagua',
            'ko': 'https://removewatermarkspro.com/ko/watermark-remover',
            'no': 'https://removewatermarkspro.com/no/fjern-vannmerke',
            'x-default': 'https://removewatermarkspro.com/watermark-remover'
        }
    },

    openGraph: {
        title: 'Fjern Vannmerke Gratis | Fjern på 1 Klikk',
        description: 'Fjern vannmerker fra bilder på 1 klikk. Gratis AI-verktøy, raskt og ingen registrering nødvendig.',
        url: 'https://removewatermarkspro.com/no/fjern-vannmerke',
        siteName: 'Remove Watermark Pro',
        locale: 'no_NO',
        type: 'website',
        images: [
            {
                url: 'https://removewatermarkspro.com/og-image-no.jpg',
                width: 1200,
                height: 630,
                alt: 'Vannmerke Fjerner Verktøy - Før og Etter'
            }
        ]
    },

    twitter: {
        card: 'summary_large_image',
        title: 'Fjern Vannmerke Gratis | Fjern på 1 Klikk',
        description: 'Fjern vannmerker fra bilder på 1 klikk. Gratis AI-verktøy, raskt og ingen registrering nødvendig.',
        images: ['https://removewatermarkspro.com/og-image-no.jpg']
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

export default function WatermarkRemoverNorwegianPage() {
    return <WatermarkRemoverClientNo />
}
