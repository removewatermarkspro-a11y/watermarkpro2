import type { Metadata } from 'next'
import SoraWatermarkRemoverClientDe from './SoraWatermarkRemoverClientDe'
import StructuredData, { createSoftwareSchema } from '@/components/StructuredData'

export const metadata: Metadata = {
    title: 'Sora Wasserzeichen Entfernen Kostenlos | OpenAI Sora Logo Entfernen',
    description: 'Entfernen Sie Sora AI Wasserzeichen sofort. Kostenloses Tool zum Löschen von OpenAI Sora Logos und Marken aus KI-Videos. Schnell, präzise, professionell.',

    alternates: {
        canonical: 'https://removewatermarkspro.com/de/sora-wasserzeichen-entfernen',
        languages: {
            'en': 'https://removewatermarkspro.com/sora-watermark-remover',
            'fr': 'https://removewatermarkspro.com/fr/enlever-filigrane-sora',
            'de': 'https://removewatermarkspro.com/de/sora-wasserzeichen-entfernen',
            'es': 'https://removewatermarkspro.com/es/eliminar-marca-agua-sora',
            'pt': 'https://removewatermarkspro.com/pt/remover-marca-dagua-sora',
            'ko': 'https://removewatermarkspro.com/ko/sora-watermark-remover',
            'no': 'https://removewatermarkspro.com/no/fjern-sora-vannmerke',
            'x-default': 'https://removewatermarkspro.com/sora-watermark-remover'
        }
    },

    openGraph: {
        title: 'Sora Wasserzeichen Entfernen Kostenlos | OpenAI Sora Logo Entfernen',
        description: 'Entfernen Sie Sora AI Wasserzeichen sofort. Kostenloses Tool zum Löschen von OpenAI Sora Logos und Marken aus KI-Videos.',
        url: 'https://removewatermarkspro.com/de/sora-wasserzeichen-entfernen',
        siteName: 'Remove Watermark Pro',
        locale: 'de_DE',
        type: 'website',
        images: [
            {
                url: 'https://removewatermarkspro.com/og-image-sora-de.jpg',
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
        images: ['https://removewatermarkspro.com/og-image-sora-de.jpg']
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
