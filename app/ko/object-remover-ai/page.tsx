import type { Metadata } from 'next'
import ObjectRemoverClientKo from './ObjectRemoverClientKo'
import StructuredData, { createSoftwareSchema } from '@/components/StructuredData'

export const metadata: Metadata = {
    title: '무료 AI 객체 제거 | 원치 않는 물체 지우기',
    description: 'AI로 사진에서 원치 않는 객체, 사람 및 요소를 즉시 제거하세요. 포토봄버, 잡동사니 및 방해 요소를 몇 초 만에 지우세요.',
    keywords: 'object remover ai, 객체 제거, ai 물체 지우기, 원치 않는 객체 삭제, 포토봄버 제거, 사진 정리',
    openGraph: {
        title: '무료 AI 객체 제거 | 원치 않는 물체 지우기',
        description: 'AI로 사진에서 원치 않는 객체를 즉시 제거하세요.',
        url: 'https://removewatermarkpro.com/ko/object-remover-ai',
        siteName: 'Remove Watermark Pro',
        locale: 'ko_KR',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: '무료 AI 객체 제거 | 원치 않는 물체 지우기',
        description: 'AI로 사진에서 원치 않는 객체를 즉시 제거하세요.',
    },
    alternates: {
        canonical: 'https://removewatermarkpro.com/ko/object-remover-ai',
        languages: {
            'en': 'https://removewatermarkpro.com/object-remover-ai',
            'fr': 'https://removewatermarkpro.com/fr/supprimer-objet-image',
            'de': 'https://removewatermarkpro.com/de/objekt-entfernen',
            'es': 'https://removewatermarkpro.com/es/eliminar-objeto-imagen',
            'pt': 'https://removewatermarkpro.com/pt/remover-objeto-imagem',
            'ko': 'https://removewatermarkpro.com/ko/object-remover-ai',
            'no': 'https://removewatermarkpro.com/no/fjern-objekt-fra-bilde',
        },
    },
}

export default function ObjectRemoverKo() {
    return <ObjectRemoverClientKo />
}
