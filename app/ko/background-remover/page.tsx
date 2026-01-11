import type { Metadata } from 'next'
import BackgroundRemoverClientKo from './BackgroundRemoverClientKo'
import StructuredData, { createSoftwareSchema } from '@/components/StructuredData'

export const metadata: Metadata = {
    title: '무료 AI 배경 제거 | 사진 배경 삭제',
    description: 'AI로 사진 배경을 즉시 제거하세요. 사진 배경을 삭제하고, 피사체를 분리하고, 투명한 이미지를 몇 초 만에 만드세요.',
    keywords: 'background remover, 배경 제거, ai 배경 삭제, 투명 배경, 사진 배경 지우개',
    openGraph: {
        title: '무료 AI 배경 제거 | 사진 배경 삭제',
        description: 'AI로 사진 배경을 즉시 제거하세요.',
        url: 'https://removewatermarkpro.com/ko/background-remover',
        siteName: 'Remove Watermark Pro',
        locale: 'ko_KR',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: '무료 AI 배경 제거 | 사진 배경 삭제',
        description: 'AI로 사진 배경을 즉시 제거하세요.',
    },
    alternates: {
        canonical: 'https://removewatermarkpro.com/ko/background-remover',
        languages: {
            'en': 'https://removewatermarkpro.com/background-remover',
            'fr': 'https://removewatermarkpro.com/fr/supprimer-arriere-plan',
            'de': 'https://removewatermarkpro.com/de/hintergrund-entfernen',
            'es': 'https://removewatermarkpro.com/es/eliminar-fondo-imagen',
            'pt': 'https://removewatermarkpro.com/pt/remover-fundo-imagem',
            'ko': 'https://removewatermarkpro.com/ko/background-remover',
            'no': 'https://removewatermarkpro.com/no/fjern-bakgrunn',
        },
    },
}

export default function BackgroundRemoverKo() {
    return (
        <>
            <StructuredData data={createSoftwareSchema({
                name: "AI Background Remover - Free",
                url: "https://removewatermarkpro.com/ko/background-remover",
                description: "Remove backgrounds from photos instantly with AI. Create transparent images in seconds."
            })} />
            <BackgroundRemoverClientKo />
        </>
    )
}
