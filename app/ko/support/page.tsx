import SupportClient from '../../support/SupportClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: '지원 - Remove Watermark Pro | 도움말 & 문의',
    description: 'Remove Watermark Pro에 대한 도움을 받으세요. 워터마크 제거, 계정 문제 및 기술적 질문에 대한 지원을 받으려면 지원팀에 문의하세요.',

    alternates: {
        canonical: 'https://removewatermarkpro.co/ko/support',
        languages: {
            'en': 'https://removewatermarkpro.co/support',
            'fr': 'https://removewatermarkpro.co/fr/support',
            'de': 'https://removewatermarkpro.co/de/support',
            'es': 'https://removewatermarkpro.co/es/soporte',
            'pt': 'https://removewatermarkpro.co/pt/suporte',
            'ko': 'https://removewatermarkpro.co/ko/support',
            'no': 'https://removewatermarkpro.co/no/support',
            'x-default': 'https://removewatermarkpro.co/support'
        }
    },

    openGraph: {
        title: '지원 - Remove Watermark Pro | 도움말 & 문의',
        description: 'Remove Watermark Pro에 대한 도움을 받으세요. 지원팀에 문의하세요.',
        url: 'https://removewatermarkpro.co/ko/support',
        siteName: 'Remove Watermark Pro',
        locale: 'ko_KR',
        type: 'website',
    },

    twitter: {
        card: 'summary_large_image',
        title: '지원 - Remove Watermark Pro | 도움말 & 문의',
        description: 'Remove Watermark Pro에 대한 도움을 받으세요. 지원팀에 문의하세요.',
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

export default function SupportPageKo() {
    return <SupportClient />
}
