import SupportClient from '../../support/SupportClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: '지원 - Remove Watermark Pro | 도움말 & 문의',
    description: 'Remove Watermark Pro에 대한 도움을 받으세요. 워터마크 제거, 계정 문제 및 기술적 질문에 대한 지원을 받으려면 지원팀에 문의하세요.',

    alternates: {
        canonical: 'https://removewatermarkspro.com/ko/support',
        languages: {
            'en': 'https://removewatermarkspro.com/support',
            'fr': 'https://removewatermarkspro.com/fr/support',
            'de': 'https://removewatermarkspro.com/de/support',
            'es': 'https://removewatermarkspro.com/es/soporte',
            'pt': 'https://removewatermarkspro.com/pt/suporte',
            'ko': 'https://removewatermarkspro.com/ko/support',
            'no': 'https://removewatermarkspro.com/no/support',
            'x-default': 'https://removewatermarkspro.com/support'
        }
    },

    openGraph: {
        title: '지원 - Remove Watermark Pro | 도움말 & 문의',
        description: 'Remove Watermark Pro에 대한 도움을 받으세요. 지원팀에 문의하세요.',
        url: 'https://removewatermarkspro.com/ko/support',
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
