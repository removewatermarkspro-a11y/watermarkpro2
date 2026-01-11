import type { Metadata } from 'next'
import VideoWatermarkRemoverClientDe from './VideoWatermarkRemoverClientDe'
import StructuredData, { createSoftwareSchema } from '@/components/StructuredData'

export const metadata: Metadata = {
    title: 'Wasserzeichen aus Video Entfernen Kostenlos | KI Video Wasserzeichen Entferner',
    description: 'Entfernen Sie Wasserzeichen aus Videos mit 1 Klick. Kostenloses KI-Tool für MP4, MOV, AVI. Schnell, keine Anmeldung erforderlich. TikTok-Wasserzeichen entfernen!',

    alternates: {
        canonical: 'https://removewatermarkspro.com/de/wasserzeichen-entfernen-video',
        languages: {
            'en': 'https://removewatermarkspro.com/watermark-remover-video',
            'fr': 'https://removewatermarkspro.com/fr/enlever-filigrane-video',
            'de': 'https://removewatermarkspro.com/de/wasserzeichen-entfernen-video',
            'es': 'https://removewatermarkspro.com/es/eliminar-marca-agua-video',
            'pt': 'https://removewatermarkspro.com/pt/remover-marca-dagua-video',
            'ko': 'https://removewatermarkspro.com/ko/watermark-remover-video',
            'no': 'https://removewatermarkspro.com/no/fjern-vannmerke-video',
            'x-default': 'https://removewatermarkspro.com/watermark-remover-video'
        }
    },

    openGraph: {
        title: 'Wasserzeichen aus Video Entfernen Kostenlos | KI Video Wasserzeichen Entferner',
        description: 'Entfernen Sie Wasserzeichen aus Videos mit 1 Klick. Kostenloses KI-Tool für MP4, MOV, AVI. Schnell, keine Anmeldung.',
        url: 'https://removewatermarkspro.com/de/wasserzeichen-entfernen-video',
        siteName: 'Remove Watermark Pro',
        locale: 'de_DE',
        type: 'website',
        images: [
            {
                url: 'https://removewatermarkspro.com/og-image-video-de.jpg',
                width: 1200,
                height: 630,
                alt: 'Video Wasserzeichen Entferner Tool - Vorher und Nachher'
            }
        ]
    },

    twitter: {
        card: 'summary_large_image',
        title: 'Wasserzeichen aus Video Entfernen Kostenlos | KI Video Wasserzeichen Entferner',
        description: 'Entfernen Sie Wasserzeichen aus Videos mit 1 Klick. Kostenloses KI-Tool für MP4, MOV, AVI. Schnell, keine Anmeldung.',
        images: ['https://removewatermarkspro.com/og-image-video-de.jpg']
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

export default function VideoWatermarkRemoverGermanPage() {
    return <VideoWatermarkRemoverClientDe />
}
