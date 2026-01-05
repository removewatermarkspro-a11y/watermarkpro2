import type { Metadata } from 'next'
import SoraWatermarkRemoverClientPt from './SoraWatermarkRemoverClientPt'
import StructuredData, { createSoftwareSchema } from '@/components/StructuredData'

export const metadata: Metadata = {
    title: 'Remover Marca d\'Água Sora Grátis | Remover Logo OpenAI Sora',
    description: 'Remova marcas d\'água Sora AI de vídeos instantaneamente com IA. Remova branding OpenAI Sora, logos e marcas d\'água de vídeos gerados por IA em segundos.',
    keywords: 'remover marca agua sora, tirar marca agua sora, sora logo remover, openai sora watermark, sora branding, ia video marca agua',
    openGraph: {
        title: 'Remover Marca d\'Água Sora Grátis | Remover Logo OpenAI Sora',
        description: 'Remova marcas d\'água Sora AI de vídeos instantaneamente com IA. Remova branding OpenAI Sora, logos e marcas d\'água de vídeos gerados por IA em segundos.',
        url: 'https://removewatermarkpro.com/pt/remover-marca-dagua-sora',
        siteName: 'Remove Watermark Pro',
        locale: 'pt_PT',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Remover Marca d\'Água Sora Grátis | Remover Logo OpenAI Sora',
        description: 'Remova marcas d\'água Sora AI de vídeos instantaneamente com IA.',
    },
    alternates: {
        canonical: 'https://removewatermarkpro.com/pt/remover-marca-dagua-sora',
        languages: {
            'en': 'https://removewatermarkpro.com/sora-watermark-remover',
            'fr': 'https://removewatermarkpro.com/fr/enlever-filigrane-sora',
            'de': 'https://removewatermarkpro.com/de/sora-wasserzeichen-entfernen',
            'es': 'https://removewatermarkpro.com/es/eliminar-marca-agua-sora',
            'pt': 'https://removewatermarkpro.com/pt/remover-marca-dagua-sora',
            'ko': 'https://removewatermarkpro.com/ko/sora-watermark-remover',
            'no': 'https://removewatermarkpro.com/no/fjern-sora-vannmerke',
        },
    },
}

export default function SoraWatermarkRemoverPt() {
    return <SoraWatermarkRemoverClientPt />
}
