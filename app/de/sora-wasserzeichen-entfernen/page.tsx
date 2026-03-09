import type { Metadata } from 'next'
import SoraWatermarkRemoverClientDe from './SoraWatermarkRemoverClientDe'
import StructuredData, { createSoftwareSchema } from '@/components/StructuredData'

export const metadata: Metadata = {
    title: 'Sora Wasserzeichen Entfernen Kostenlos | OpenAI Sora Logo Entfernen',
    description: 'Entfernen Sie Sora AI Wasserzeichen sofort. Kostenloses Tool zum Löschen von OpenAI Sora Logos und Marken aus KI-Videos. Schnell, präzise, professionell.',

    alternates: {
        canonical: 'https://removewatermarkpro.co/de/sora-wasserzeichen-entfernen',
        languages: {
            'en': 'https://removewatermarkpro.co/sora-watermark-remover',
            'fr': 'https://removewatermarkpro.co/fr/enlever-filigrane-sora',
            'de': 'https://removewatermarkpro.co/de/sora-wasserzeichen-entfernen',
            'es': 'https://removewatermarkpro.co/es/eliminar-marca-agua-sora',
            'pt': 'https://removewatermarkpro.co/pt/remover-marca-dagua-sora',
            'ko': 'https://removewatermarkpro.co/ko/sora-watermark-remover',
            'no': 'https://removewatermarkpro.co/no/fjern-sora-vannmerke',
            'x-default': 'https://removewatermarkpro.co/sora-watermark-remover'
        }
    },

    openGraph: {
        title: 'Sora Wasserzeichen Entfernen Kostenlos | OpenAI Sora Logo Entfernen',
        description: 'Entfernen Sie Sora AI Wasserzeichen sofort. Kostenloses Tool zum Löschen von OpenAI Sora Logos und Marken aus KI-Videos.',
        url: 'https://removewatermarkpro.co/de/sora-wasserzeichen-entfernen',
        siteName: 'Remove Watermark Pro',
        locale: 'de_DE',
        type: 'website',
        images: [
            {
                url: 'https://removewatermarkpro.co/og-image-sora-de.jpg',
                width: 1200,
                height: 630,
                alt: 'Sora Wasserzeichen Entferner Tool - Vorher und Nachher'
            }
        ]
    },

    twitter: {
        card: 'summary_large_image',
        title: 'Sora Wasserzeichen Entfernen Kostenlos | OpenAI Sora Logo Entfernen',
        description: 'Entfernen Sie Sora AI Wasserzeichen sofort. Kostenloses Tool zum Löschen von OpenAI Sora Logos und Marken aus KI-Videos.',
        images: ['https://removewatermarkpro.co/og-image-sora-de.jpg']
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

export default function SoraWatermarkRemoverGermanPage() {
    return <SoraWatermarkRemoverClientDe />
}
