import type { Metadata } from 'next'
import VideoWatermarkRemoverClientNo from './VideoWatermarkRemoverClientNo'

export const metadata: Metadata = {
    title: 'Fjern Vannmerke fra Video Gratis | AI Video Vannmerkefjerner',
    description: 'Fjern vannmerker fra videoer med 1 klikk. Gratis AI-verktøy for MP4, MOV, AVI. Raskt, ingen registrering. Fjern TikTok-vannmerker!',

    alternates: {
        canonical: 'https://removewatermarkspro.com/no/fjern-vannmerke-video',
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
        title: 'Fjern Vannmerke fra Video Gratis | AI Video Vannmerkefjerner',
        description: 'Fjern vannmerker fra videoer med 1 klikk. Gratis AI-verktøy for MP4, MOV, AVI. Raskt, ingen registrering.',
        url: 'https://removewatermarkspro.com/no/fjern-vannmerke-video',
        siteName: 'Remove Watermark Pro',
        locale: 'nb_NO',
        type: 'website',
        images: [
            {
                url: 'https://removewatermarkspro.com/og-image-video-no.jpg',
                width: 1200,
                height: 630,
                alt: 'Video Vannmerkefjerner Verktøy - Før og Etter'
            }
        ]
    },

    twitter: {
        card: 'summary_large_image',
        title: 'Fjern Vannmerke fra Video Gratis | AI Video Vannmerkefjerner',
        description: 'Fjern vannmerker fra videoer med 1 klikk. Gratis AI-verktøy for MP4, MOV, AVI. Raskt, ingen registrering.',
        images: ['https://removewatermarkspro.com/og-image-video-no.jpg']
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

export default function VideoWatermarkRemoverNorwegianPage() {
    return <VideoWatermarkRemoverClientNo />
}
