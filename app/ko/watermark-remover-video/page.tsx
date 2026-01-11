import type { Metadata } from 'next'
import VideoWatermarkRemoverClientKo from './VideoWatermarkRemoverClientKo'
import StructuredData, { createSoftwareSchema } from '@/components/StructuredData'

export const metadata: Metadata = {
    title: '무료 비디오 워터마크 제거 | AI 비디오 워터마크 제거 도구',
    description: '클릭 한 번으로 비디오에서 워터마크를 제거하세요. MP4, MOV, AVI용 무료 AI 도구. 빠르고 가입 불필요. TikTok 워터마크 제거!',

    alternates: {
        canonical: 'https://removewatermarkspro.com/ko/watermark-remover-video',
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
        title: '무료 비디오 워터마크 제거 | AI 비디오 워터마크 제거 도구',
        description: '클릭 한 번으로 비디오에서 워터마크를 제거하세요. MP4, MOV, AVI용 무료 AI 도구. 빠르고 가입 불필요.',
        url: 'https://removewatermarkspro.com/ko/watermark-remover-video',
        siteName: 'Remove Watermark Pro',
        locale: 'ko_KR',
        type: 'website',
        images: [
            {
                url: 'https://removewatermarkspro.com/og-image-video-ko.jpg',
                width: 1200,
                height: 630,
                alt: '비디오 워터마크 제거 도구 - 전후 비교'
            }
        ]
    },

    twitter: {
        card: 'summary_large_image',
        title: '무료 비디오 워터마크 제거 | AI 비디오 워터마크 제거 도구',
        description: '클릭 한 번으로 비디오에서 워터마크를 제거하세요. MP4, MOV, AVI용 무료 AI 도구. 빠르고 가입 불필요.',
        images: ['https://removewatermarkspro.com/og-image-video-ko.jpg']
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

export default function VideoWatermarkRemoverKoreanPage() {
    return (
        <>
            <StructuredData data={createSoftwareSchema({
                name: "Video Watermark Remover - Free",
                url: "https://removewatermarkpro.com/ko/watermark-remover-video",
                description: "Remove watermarks from videos in 1 click. Free AI tool for MP4, MOV, AVI. Fast, no signup required."
            })} />
            <VideoWatermarkRemoverClientKo />
        </>
    )
}
