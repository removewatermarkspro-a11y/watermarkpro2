import type { Metadata } from 'next'
import VideoWatermarkRemoverClientEs from './VideoWatermarkRemoverClientEs'
import StructuredData, { createSoftwareSchema } from '@/components/StructuredData'

export const metadata: Metadata = {
    title: 'Eliminar Marca de Agua de Video Gratis | Removedor IA de Marca de Agua',
    description: 'Elimina marcas de agua de videos en 1 clic. Herramienta IA gratuita para MP4, MOV, AVI. Rápido, sin registro. ¡Elimina marcas de agua de TikTok!',

    alternates: {
        canonical: 'https://removewatermarkspro.com/es/eliminar-marca-agua-video',
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
        title: 'Eliminar Marca de Agua de Video Gratis | Removedor IA de Marca de Agua',
        description: 'Elimina marcas de agua de videos en 1 clic. Herramienta IA gratuita para MP4, MOV, AVI. Rápido, sin registro.',
        url: 'https://removewatermarkspro.com/es/eliminar-marca-agua-video',
        siteName: 'Remove Watermark Pro',
        locale: 'es_ES',
        type: 'website',
        images: [
            {
                url: 'https://removewatermarkspro.com/og-image-video-es.jpg',
                width: 1200,
                height: 630,
                alt: 'Herramienta Eliminar Marca de Agua de Video - Antes y Después'
            }
        ]
    },

    twitter: {
        card: 'summary_large_image',
        title: 'Eliminar Marca de Agua de Video Gratis | Removedor IA de Marca de Agua',
        description: 'Elimina marcas de agua de videos en 1 clic. Herramienta IA gratuita para MP4, MOV, AVI. Rápido, sin registro.',
        images: ['https://removewatermarkspro.com/og-image-video-es.jpg']
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

export default function VideoWatermarkRemoverSpanishPage() {
    return <VideoWatermarkRemoverClientEs />
}
