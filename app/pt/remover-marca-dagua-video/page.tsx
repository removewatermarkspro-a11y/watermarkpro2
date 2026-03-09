import type { Metadata } from 'next'
import VideoWatermarkRemoverClientPt from './VideoWatermarkRemoverClientPt'
import StructuredData, { createSoftwareSchema } from '@/components/StructuredData'

export const metadata: Metadata = {
    title: 'Remover Marca d\'Água de Vídeo Grátis | Removedor IA de Marca d\'Água',
    description: 'Remova marcas d\'água de vídeos em 1 clique. Ferramenta IA gratuita para MP4, MOV, AVI. Rápido, sem cadastro. Remova marcas d\'água do TikTok!',

    alternates: {
        canonical: 'https://removewatermarkpro.co/pt/remover-marca-dagua-video',
        languages: {
            'en': 'https://removewatermarkpro.co/watermark-remover-video',
            'fr': 'https://removewatermarkpro.co/fr/enlever-filigrane-video',
            'de': 'https://removewatermarkpro.co/de/wasserzeichen-entfernen-video',
            'es': 'https://removewatermarkpro.co/es/eliminar-marca-agua-video',
            'pt': 'https://removewatermarkpro.co/pt/remover-marca-dagua-video',
            'ko': 'https://removewatermarkpro.co/ko/watermark-remover-video',
            'no': 'https://removewatermarkpro.co/no/fjern-vannmerke-video',
            'x-default': 'https://removewatermarkpro.co/watermark-remover-video'
        }
    },

    openGraph: {
        title: 'Remover Marca d\'Água de Vídeo Grátis | Removedor IA de Marca d\'Água',
        description: 'Remova marcas d\'água de vídeos em 1 clique. Ferramenta IA gratuita para MP4, MOV, AVI. Rápido, sem cadastro.',
        url: 'https://removewatermarkpro.co/pt/remover-marca-dagua-video',
        siteName: 'Remove Watermark Pro',
        locale: 'pt_PT',
        type: 'website',
        images: [
            {
                url: 'https://removewatermarkpro.co/og-image-video-pt.jpg',
                width: 1200,
                height: 630,
                alt: 'Ferramenta Remover Marca d\'Água de Vídeo - Antes e Depois'
            }
        ]
    },

    twitter: {
        card: 'summary_large_image',
        title: 'Remover Marca d\'Água de Vídeo Grátis | Removedor IA de Marca d\'Água',
        description: 'Remova marcas d\'água de vídeos em 1 clique. Ferramenta IA gratuita para MP4, MOV, AVI. Rápido, sem cadastro.',
        images: ['https://removewatermarkpro.co/og-image-video-pt.jpg']
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

export default function VideoWatermarkRemoverPortuguesePage() {
    return <VideoWatermarkRemoverClientPt />
}
