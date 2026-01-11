import type { Metadata } from 'next'
import ImageUpscalerClientKo from './ImageUpscalerClientKo'
import StructuredData, { createSoftwareSchema } from '@/components/StructuredData'

export const metadata: Metadata = {
    title: '무료 AI 이미지 업스케일러 | 사진 화질 개선',
    description: 'AI로 이미지를 최대 4배 해상도로 업스케일하세요. 사진 품질을 개선하고, 해상도를 높이고, 자동으로 사실적인 디테일을 추가하세요.',
    keywords: 'image upscaler ai, 이미지 업스케일, 사진 화질 개선, 해상도 증가, ai 이미지 향상',
    openGraph: {
        title: '무료 AI 이미지 업스케일러 | 사진 화질 개선',
        description: 'AI로 이미지를 최대 4배 해상도로 업스케일하세요.',
        url: 'https://removewatermarkpro.com/ko/image-upscaler-ai',
        siteName: 'Remove Watermark Pro',
        locale: 'ko_KR',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: '무료 AI 이미지 업스케일러 | 사진 화질 개선',
        description: 'AI로 이미지를 최대 4배 해상도로 업스케일하세요.',
    },
    alternates: {
        canonical: 'https://removewatermarkpro.com/ko/image-upscaler-ai',
        languages: {
            'en': 'https://removewatermarkpro.com/image-upscaler-ai',
            'fr': 'https://removewatermarkpro.com/fr/agrandir-image',
            'de': 'https://removewatermarkpro.com/de/bild-hochskalieren',
            'es': 'https://removewatermarkpro.com/es/mejorar-calidad-imagen',
            'pt': 'https://removewatermarkpro.com/pt/melhorar-qualidade-imagem',
            'ko': 'https://removewatermarkpro.com/ko/image-upscaler-ai',
            'no': 'https://removewatermarkpro.com/no/forbedre-bildekvalitet',
        },
    },
}

export default function ImageUpscalerKo() {
    return <ImageUpscalerClientKo />
}
