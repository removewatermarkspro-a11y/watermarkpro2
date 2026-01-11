import SupportClient from '../../support/SupportClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Suporte - Remove Watermark Pro | Ajuda & Contato',
    description: 'Obtenha ajuda com Remove Watermark Pro. Entre em contato com nossa equipe de suporte para obter assistência com remoção de marca d\'água, problemas de conta e questões técnicas.',

    alternates: {
        canonical: 'https://removewatermarkspro.com/pt/suporte',
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
        title: 'Suporte - Remove Watermark Pro | Ajuda & Contato',
        description: 'Obtenha ajuda com Remove Watermark Pro. Entre em contato com nossa equipe de suporte.',
        url: 'https://removewatermarkspro.com/pt/suporte',
        siteName: 'Remove Watermark Pro',
        locale: 'pt_PT',
        type: 'website',
    },

    twitter: {
        card: 'summary_large_image',
        title: 'Suporte - Remove Watermark Pro | Ajuda & Contato',
        description: 'Obtenha ajuda com Remove Watermark Pro. Entre em contato com nossa equipe de suporte.',
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

export default function SupportPagePt() {
    return <SupportClient />
}
