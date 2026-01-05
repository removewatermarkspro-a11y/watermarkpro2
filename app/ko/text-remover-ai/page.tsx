import type { Metadata } from 'next'
import TextRemoverClientKo from './TextRemoverClientKo'
import StructuredData, { createSoftwareSchema } from '@/components/StructuredData'

export const metadata: Metadata = {
    title: '무료 AI 텍스트 제거 | 이미지 텍스트 지우기',
    description: 'AI로 이미지에서 텍스트, 자막 및 캡션을 즉시 제거하세요. 원치 않는 텍스트 오버레이를 몇 초 만에 지워 사진을 깨끗하게 만드세요.',
    keywords: 'text remover ai, 텍스트 제거, ai 텍스트 지우기, 이미지 텍스트 삭제, 자막 제거, 캡션 제거',
    openGraph: {
        title: '무료 AI 텍스트 제거 | 이미지 텍스트 지우기',
        description: 'AI로 이미지에서 텍스트, 자막 및 캡션을 즉시 제거하세요.',
        url: 'https://removewatermarkpro.com/ko/text-remover-ai',
        siteName: 'Remove Watermark Pro',
        locale: 'ko_KR',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: '무료 AI 텍스트 제거 | 이미지 텍스트 지우기',
        description: 'AI로 이미지에서 텍스트를 즉시 제거하세요.',
    },
    alternates: {
        canonical: 'https://removewatermarkpro.com/ko/text-remover-ai',
        languages: {
            'en': 'https://removewatermarkpro.com/text-remover-ai',
            'fr': 'https://removewatermarkpro.com/fr/supprimer-texte-image',
            'de': 'https://removewatermarkpro.com/de/text-entfernen',
            'es': 'https://removewatermarkpro.com/es/eliminar-texto-imagen',
            'pt': 'https://removewatermarkpro.com/pt/remover-texto-imagem',
            'ko': 'https://removewatermarkpro.com/ko/text-remover-ai',
            'no': 'https://removewatermarkpro.com/no/fjern-tekst-fra-bilde',
        },
    },
}

export default function TextRemoverKo() {
    return <TextRemoverClientKo />
}
