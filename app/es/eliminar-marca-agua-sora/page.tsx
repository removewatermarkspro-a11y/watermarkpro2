import type { Metadata } from 'next'
import SoraWatermarkRemoverClientEs from './SoraWatermarkRemoverClientEs'

export const metadata: Metadata = {
    title: 'Eliminar Marca de Agua Sora Gratis | Quitar Logo OpenAI Sora',
    description: 'Elimina marcas de agua de Sora AI de videos al instante con IA. Quita el branding de OpenAI Sora, logos y marcas de agua de videos generados por IA en segundos.',
    keywords: 'eliminar marca agua sora, quitar marca agua sora, sora logo remover, openai sora watermark, sora branding, ia video marca agua',
    openGraph: {
        title: 'Eliminar Marca de Agua Sora Gratis | Quitar Logo OpenAI Sora',
        description: 'Elimina marcas de agua de Sora AI de videos al instante con IA. Quita el branding de OpenAI Sora, logos y marcas de agua de videos generados por IA en segundos.',
        url: 'https://removewatermarkpro.com/es/eliminar-marca-agua-sora',
        siteName: 'Remove Watermark Pro',
        locale: 'es_ES',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Sora Wasserzeichen Entfernen Kostenlos | OpenAI Sora Logo Entfernen',
        description: 'Entfernen Sie Sora AI-Wasserzeichen sofort aus Videos mit KI.',
    },
    alternates: {
        canonical: 'https://removewatermarkpro.com/es/eliminar-marca-agua-sora',
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

export default function SoraWatermarkRemoverEs() {
    return <SoraWatermarkRemoverClientEs />
}
