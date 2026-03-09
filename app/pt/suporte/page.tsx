import SupportClient from '../../support/SupportClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Suporte - Remove Watermark Pro | Ajuda & Contato',
    description: 'Obtenha ajuda com Remove Watermark Pro. Entre em contato com nossa equipe de suporte para obter assistência com remoção de marca d\'água, problemas de conta e questões técnicas.',

    alternates: {
        canonical: 'https://removewatermarkpro.co/pt/suporte',
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
        title: 'Suporte - Remove Watermark Pro | Ajuda & Contato',
        description: 'Obtenha ajuda com Remove Watermark Pro. Entre em contato com nossa equipe de suporte.',
        url: 'https://removewatermarkpro.co/pt/suporte',
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
