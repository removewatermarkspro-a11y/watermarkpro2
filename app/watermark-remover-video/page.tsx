import type { Metadata } from 'next'
import VideoWatermarkRemoverClient from './VideoWatermarkRemoverClient'
import StructuredData, { createSoftwareSchema, createFAQSchema } from '@/components/StructuredData'
import { commonFaqItems } from '@/utils/faqItems'

export const metadata: Metadata = {
    title: 'Free Video Watermark Remover',
    description: 'Remove watermarks from videos in 1 click. Supports MP4, MOV, AVI & more. 100% free AI tool. Remove TikTok watermarks & logos. Try it today!',

    alternates: {
        canonical: 'https://removewatermarkpro.co/watermark-remover-video',
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
        title: 'Remove Watermark from Video Free | AI Video Watermark Remover',
        description: 'Remove watermarks from videos in 1 click. Free AI tool for MP4, MOV, AVI. Fast, no signup required.',
        url: 'https://removewatermarkpro.co/watermark-remover-video',
        siteName: 'Remove Watermark Pro',
        locale: 'en_US',
        type: 'website',
        images: [
            {
                url: 'https://removewatermarkpro.co/og-video-watermark.jpg',
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
        images: ['https://removewatermarkpro.co/og-video-watermark.jpg']
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
                url: "https://removewatermarkpro.co/watermark-remover-video",
                description: "Remove watermarks from videos in 1 click. Free AI tool for MP4, MOV, AVI. Fast, no signup required. Remove TikTok watermarks and more!"
            })} />
            <VideoWatermarkRemoverClient />
        </>
    )
}
