import type { Metadata } from 'next'
import SoraWatermarkRemoverClientKo from './SoraWatermarkRemoverClientKo'
import StructuredData, { createSoftwareSchema } from '@/components/StructuredData'

export const metadata: Metadata = {
    title: '무료 Sora 워터마크 제거 | OpenAI Sora 로고 제거',
    description: 'AI로 비디오에서 Sora AI 워터마크를 즉시 제거하세요. AI 생성 비디오에서 OpenAI Sora 브랜딩, 로고 및 워터마크를 몇 초 만에 제거합니다.',
    keywords: 'sora watermark remover, sora 워터마크 제거, sora logo remover, openai sora watermark, sora branding, ai video watermark',
    openGraph: {
        title: '무료 Sora 워터마크 제거 | OpenAI Sora 로고 제거',
        description: 'AI로 비디오에서 Sora AI 워터마크를 즉시 제거하세요. AI 생성 비디오에서 OpenAI Sora 브랜딩, 로고 및 워터마크를 몇 초 만에 제거합니다.',
        url: 'https://removewatermarkpro.co/ko/sora-watermark-remover',
        siteName: 'Remove Watermark Pro',
        locale: 'ko_KR',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: '무료 Sora 워터마크 제거 | OpenAI Sora 로고 제거',
        description: 'AI로 비디오에서 Sora AI 워터마크를 즉시 제거하세요.',
    },
    alternates: {
        canonical: 'https://removewatermarkpro.co/ko/sora-watermark-remover',
        languages: {
            'en': 'https://removewatermarkpro.co/sora-watermark-remover',
            'fr': 'https://removewatermarkpro.co/fr/enlever-filigrane-sora',
            'de': 'https://removewatermarkpro.co/de/sora-wasserzeichen-entfernen',
            'es': 'https://removewatermarkpro.co/es/eliminar-marca-agua-sora',
            'pt': 'https://removewatermarkpro.co/pt/remover-marca-dagua-sora',
            'ko': 'https://removewatermarkpro.co/ko/sora-watermark-remover',
            'no': 'https://removewatermarkpro.co/no/fjern-sora-vannmerke',
        },
    },
}

export default function SoraWatermarkRemoverKo() {
    return <SoraWatermarkRemoverClientKo />
}
