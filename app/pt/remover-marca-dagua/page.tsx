import type { Metadata } from 'next'
import WatermarkRemoverClientPt from './WatermarkRemoverClientPt'
import StructuredData, { createSoftwareSchema } from '@/components/StructuredData'

export const metadata: Metadata = {
    title: 'Remover Marca D\'água Grátis | Em 1 Clique - IA',
    description: 'Remova marcas d\'água de imagens em 1 clique. Ferramenta IA gratuita, rápida e sem cadastro. Experimente agora e obtenha resultados profissionais instantaneamente!',

    alternates: {
        canonical: 'https://removewatermarkpro.co/pt/remover-marca-dagua',
        languages: {
            'en': 'https://removewatermarkpro.co/watermark-remover',
            'fr': 'https://removewatermarkpro.co/fr/enlever-filigrane',
            'de': 'https://removewatermarkpro.co/de/wasserzeichen-entfernen',
            'es': 'https://removewatermarkpro.co/es/eliminar-marca-agua',
            'pt': 'https://removewatermarkpro.co/pt/remover-marca-dagua',
            'ko': 'https://removewatermarkpro.co/ko/watermark-remover',
            'no': 'https://removewatermarkpro.co/no/fjern-vannmerke',
            'x-default': 'https://removewatermarkpro.co/watermark-remover'
        }
    },

    openGraph: {
        title: 'Remover Marca D\'água Grátis | Em 1 Clique',
        description: 'Remova marcas d\'água de imagens em 1 clique. Ferramenta IA gratuita, rápida e sem cadastro.',
        url: 'https://removewatermarkpro.co/pt/remover-marca-dagua',
        siteName: 'Remove Watermark Pro',
        locale: 'pt_BR',
        type: 'website',
        images: [
            {
                url: 'https://removewatermarkpro.co/og-image-pt.jpg',
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
        images: ['https://removewatermarkpro.co/og-image-pt.jpg']
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
