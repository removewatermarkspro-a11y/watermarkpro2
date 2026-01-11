import type { Metadata } from 'next'
import SoraWatermarkRemoverClientNo from './SoraWatermarkRemoverClientNo'

export const metadata: Metadata = {
    title: 'Fjern Sora Vannmerke Gratis | Fjern OpenAI Sora Logo',
    description: 'Fjern Sora AI vannmerker fra videoer øyeblikkelig med AI. Fjern OpenAI Sora branding, logoer og vannmerker fra AI-genererte videoer på sekunder.',
    keywords: 'sora watermark remover, fjern sora vannmerke, sora logo remover, openai sora watermark, sora branding, ai video vannmerke',
    openGraph: {
        title: 'Fjern Sora Vannmerke Gratis | Fjern OpenAI Sora Logo',
        description: 'Fjern Sora AI vannmerker fra videoer øyeblikkelig med AI. Fjern OpenAI Sora branding, logoer og vannmerker fra AI-genererte videoer på sekunder.',
        url: 'https://removewatermarkpro.com/no/fjern-sora-vannmerke',
        siteName: 'Remove Watermark Pro',
        locale: 'no_NO',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Fjern Sora Vannmerke Gratis | Fjern OpenAI Sora Logo',
        description: 'Fjern Sora AI vannmerker fra videoer øyeblikkelig med AI.',
    },
    alternates: {
        canonical: 'https://removewatermarkpro.com/no/fjern-sora-vannmerke',
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

export default function SoraWatermarkRemoverNo() {
    return <SoraWatermarkRemoverClientNo />
}
