import type { Metadata } from 'next'
import WatermarkRemoverClientKo from './WatermarkRemoverClientKo'
import StructuredData, { createSoftwareSchema } from '@/components/StructuredData'

export const metadata: Metadata = {
    title: '워터마크 제거 무료 | 1클릭 제거 - AI 기반',
    description: '1클릭으로 이미지에서 워터마크를 제거하세요. 무료 AI 도구, 빠르고 가입 불필요. 지금 시도하고 즉시 전문적인 결과를 얻으세요!',

    alternates: {
        canonical: 'https://removewatermarkpro.co/ko/watermark-remover',
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
        title: '워터마크 제거 무료 | 1클릭 제거',
        description: '1클릭으로 이미지에서 워터마크를 제거하세요. 무료 AI 도구, 빠르고 가입 불필요.',
        url: 'https://removewatermarkpro.co/ko/watermark-remover',
        siteName: 'Remove Watermark Pro',
        locale: 'ko_KR',
        type: 'website',
        images: [
            {
                url: 'https://removewatermarkpro.co/og-image-ko.jpg',
                width: 1200,
                height: 630,
                alt: '워터마크 제거 도구 - 전후 비교'
            }
        ]
    },

    twitter: {
        card: 'summary_large_image',
        title: '워터마크 제거 무료 | 1클릭 제거',
        description: '1클릭으로 이미지에서 워터마크를 제거하세요. 무료 AI 도구, 빠르고 가입 불필요.',
        images: ['https://removewatermarkpro.co/og-image-ko.jpg']
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

export default function WatermarkRemoverKoreanPage() {
    return (
        <>
            <StructuredData data={createSoftwareSchema({
                name: "Watermark Remover - AI Free",
                url: "https://removewatermarkpro.co/ko/watermark-remover",
                description: "Remove watermarks from images in 1 click. Free AI tool, fast and no signup required."
            })} />
            <WatermarkRemoverClientKo />
        </>
    )
}
