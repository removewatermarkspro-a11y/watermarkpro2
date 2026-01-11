import type { Metadata } from 'next'
import VideoWatermarkRemoverClient from './VideoWatermarkRemoverClient'
<<<<<<< HEAD
import StructuredData, { createSoftwareSchema, createFAQSchema } from '@/components/StructuredData'
import { commonFaqItems } from '@/utils/faqItems'
=======
import StructuredData, { createSoftwareSchema } from '@/components/StructuredData'
>>>>>>> feature/qwen-api-integration

export const metadata: Metadata = {
    title: 'Video Watermark Remover | Remove from MP4, MOV, AVI - Free',
    description: 'Remove watermarks from videos in 1 click. Supports MP4, MOV, AVI & more. 100% free AI tool. Remove TikTok watermarks & logos. Try it today!',

    alternates: {
        canonical: 'https://removewatermarkspro.com/watermark-remover-video',
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
        title: 'Remove Watermark from Video Free | AI Video Watermark Remover',
        description: 'Remove watermarks from videos in 1 click. Free AI tool for MP4, MOV, AVI. Fast, no signup required.',
        url: 'https://removewatermarkspro.com/watermark-remover-video',
        siteName: 'Remove Watermark Pro',
        locale: 'en_US',
        type: 'website',
        images: [
            {
<<<<<<< HEAD
                url: 'https://removewatermarkspro.com/og-video-watermark.jpg',
=======
                url: 'https://removewatermarkspro.com/og-image-video-en.jpg',
>>>>>>> feature/qwen-api-integration
                width: 1200,
                height: 630,
                alt: 'Video Watermark Remover Tool - Before and After'
            }
        ]
    },

    twitter: {
        card: 'summary_large_image',
        title: 'Remove Watermark from Video Free | AI Video Watermark Remover',
        description: 'Remove watermarks from videos in 1 click. Free AI tool for MP4, MOV, AVI. Fast, no signup required.',
<<<<<<< HEAD
        images: ['https://removewatermarkspro.com/og-video-watermark.jpg']
=======
        images: ['https://removewatermarkspro.com/og-image-video-en.jpg']
>>>>>>> feature/qwen-api-integration
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

export default function VideoWatermarkRemoverEnglishPage() {
    return (
        <>
            <StructuredData data={createSoftwareSchema({
                name: "Video Watermark Remover - Free",
                url: "https://removewatermarkspro.com/watermark-remover-video",
                description: "Remove watermarks from videos in 1 click. Free AI tool for MP4, MOV, AVI. Fast, no signup required. Remove TikTok watermarks and more!"
            })} />
            <VideoWatermarkRemoverClient />
        </>
    )
}
