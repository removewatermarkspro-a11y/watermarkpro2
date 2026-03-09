import type { Metadata } from 'next'
import WatermarkRemoverClientNo from './WatermarkRemoverClientNo'
import StructuredData, { createSoftwareSchema } from '@/components/StructuredData'

export const metadata: Metadata = {
    title: 'Fjern Vannmerke Gratis | Fjern på 1 Klikk - AI',
    description: 'Fjern vannmerker fra bilder på 1 klikk. Gratis AI-verktøy, raskt og ingen registrering nødvendig. Prøv nå og få profesjonelle resultater øyeblikkelig!',

    alternates: {
        canonical: 'https://removewatermarkpro.co/no/fjern-vannmerke',
        languages: {
            'en': 'https://removewatermarkpro.co/watermark-remover',
            'fr': 'https://removewatermarkpro.co/fr/enlever-filigrane',
            'de': 'https://removewatermarkpro.co/de/wasserzeichen-entfernen',
            'es': 'https://removewatermarkpro.co/es/eliminar-marca-agua',
            'pt': 'https://removewatermarkpro.co/pt/remover-marca-dagua',
            'ko': 'https://removewatermarkpro.co/ko/watermark-remover',
            'no': 'https://removewatermarkpro.co/no/fjern-vannmerke',
            'x-default': 'https://removewatermarkpro.co/watermark-remover'
        }
    },

    openGraph: {
        title: 'Fjern Vannmerke Gratis | Fjern på 1 Klikk',
        description: 'Fjern vannmerker fra bilder på 1 klikk. Gratis AI-verktøy, raskt og ingen registrering nødvendig.',
        url: 'https://removewatermarkpro.co/no/fjern-vannmerke',
        siteName: 'Remove Watermark Pro',
        locale: 'no_NO',
        type: 'website',
        images: [
            {
                url: 'https://removewatermarkpro.co/og-image-no.jpg',
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
        images: ['https://removewatermarkpro.co/og-image-no.jpg']
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
