import type { Metadata } from 'next'
import PeopleRemoverClientKo from './PeopleRemoverClientKo'
import StructuredData, { createSoftwareSchema } from '@/components/StructuredData'

export const metadata: Metadata = {
    title: '무료 AI 사람 제거 | 사진 사람 삭제',
    description: 'AI로 사진에서 사람을 즉시 제거하세요. 원치 않는 사람을 삭제하고, 군중을 정리하고, 몇 초 만에 이미지를 개선하세요.',
    keywords: 'people remover ai, 사람 제거, ai 사람 삭제, 군중 제거, 사진 사람 지우개',
    openGraph: {
        title: '무료 AI 사람 제거 | 사진 사람 삭제',
        description: 'AI로 사진에서 사람을 즉시 제거하세요.',
        url: 'https://removewatermarkpro.co/ko/people-remover-ai',
        siteName: 'Remove Watermark Pro',
        locale: 'ko_KR',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: '무료 AI 사람 제거 | 사진 사람 삭제',
        description: 'AI로 사진에서 사람을 즉시 제거하세요.',
    },
    alternates: {
        canonical: 'https://removewatermarkpro.co/ko/people-remover-ai',
        languages: {
            'en': 'https://removewatermarkpro.co/people-remover-ai',
            'fr': 'https://removewatermarkpro.co/fr/effacer-personnes-photo',
            'de': 'https://removewatermarkpro.co/de/personen-entfernen',
            'es': 'https://removewatermarkpro.co/es/eliminar-personas-foto',
            'pt': 'https://removewatermarkpro.co/pt/remover-pessoas-foto',
            'ko': 'https://removewatermarkpro.co/ko/people-remover-ai',
            'no': 'https://removewatermarkpro.co/no/fjern-personer-foto',
        },
    },
}

export default function PeopleRemoverKo() {
    return <PeopleRemoverClientKo />
}
