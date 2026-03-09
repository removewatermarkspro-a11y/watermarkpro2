import type { Metadata } from 'next'
import BackgroundChangerClientKo from './BackgroundChangerClientKo'
import StructuredData, { createSoftwareSchema } from '@/components/StructuredData'

export const metadata: Metadata = {
    title: '무료 AI 배경 변경 | 사진 배경 바꾸기',
    description: 'AI로 사진 배경을 즉시 변경하세요. 사진 배경을 교체하고, 장면을 바꾸고, 이미지를 몇 초 만에 변환하세요.',
    keywords: 'background changer ai, 배경 변경, ai 배경 바꾸기, 사진 배경 교체, 배경 스왑, 사진 배경 편집기',
    openGraph: {
        title: '무료 AI 배경 변경 | 사진 배경 바꾸기',
        description: 'AI로 사진 배경을 즉시 변경하세요.',
        url: 'https://removewatermarkpro.co/ko/background-changer-ai',
        siteName: 'Remove Watermark Pro',
        locale: 'ko_KR',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: '무료 AI 배경 변경 | 사진 배경 바꾸기',
        description: 'AI로 사진 배경을 즉시 변경하세요.',
    },
    alternates: {
        canonical: 'https://removewatermarkpro.co/ko/background-changer-ai',
        languages: {
            'en': 'https://removewatermarkpro.co/background-changer-ai',
            'fr': 'https://removewatermarkpro.co/fr/changer-arriere-plan',
            'de': 'https://removewatermarkpro.co/de/hintergrund-wechseln',
            'es': 'https://removewatermarkpro.co/es/cambiar-fondo-imagen',
            'pt': 'https://removewatermarkpro.co/pt/trocar-fundo-imagem',
            'ko': 'https://removewatermarkpro.co/ko/background-changer-ai',
            'no': 'https://removewatermarkpro.co/no/endre-bakgrunn',
        },
    },
}

export default function BackgroundChangerKo() {
    return <BackgroundChangerClientKo />
}
