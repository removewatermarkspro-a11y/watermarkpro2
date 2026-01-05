import type { Metadata } from 'next'
import WatermarkRemoverClientPt from './WatermarkRemoverClientPt'
import StructuredData, { createSoftwareSchema } from '@/components/StructuredData'

export const metadata: Metadata = {
    title: 'Remover Marca D\'água Grátis | Em 1 Clique - IA',
    description: 'Remova marcas d\'água de imagens em 1 clique. Ferramenta IA gratuita, rápida e sem cadastro. Experimente agora e obtenha resultados profissionais instantaneamente!',

    alternates: {
        canonical: 'https://removewatermarkspro.com/pt/remover-marca-dagua',
        languages: {
            'en': 'https://removewatermarkspro.com/watermark-remover',
            'fr': 'https://removewatermarkspro.com/fr/enlever-filigrane',
            'de': 'https://removewatermarkspro.com/de/wasserzeichen-entfernen',
            'es': 'https://removewatermarkspro.com/es/eliminar-marca-agua',
            'pt': 'https://removewatermarkspro.com/pt/remover-marca-dagua',
            'ko': 'https://removewatermarkspro.com/ko/watermark-remover',
            'no': 'https://removewatermarkspro.com/no/fjern-vannmerke',
            'x-default': 'https://removewatermarkspro.com/watermark-remover'
        }
    },

    openGraph: {
        title: 'Remover Marca D\'água Grátis | Em 1 Clique',
        description: 'Remova marcas d\'água de imagens em 1 clique. Ferramenta IA gratuita, rápida e sem cadastro.',
        url: 'https://removewatermarkspro.com/pt/remover-marca-dagua',
        siteName: 'Remove Watermark Pro',
        locale: 'pt_BR',
        type: 'website',
        images: [
            {
                url: 'https://removewatermarkspro.com/og-image-pt.jpg',
                width: 1200,
                height: 630,
                alt: 'Ferramenta para Remover Marcas D\'água - Antes e Depois'
            }
        ]
    },

    twitter: {
        card: 'summary_large_image',
        title: 'Remover Marca D\'água Grátis | Em 1 Clique',
        description: 'Remova marcas d\'água de imagens em 1 clique. Ferramenta IA gratuita, rápida e sem cadastro.',
        images: ['https://removewatermarkspro.com/og-image-pt.jpg']
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

export default function WatermarkRemoverPortuguesePage() {
    return <WatermarkRemoverClientPt />
}
