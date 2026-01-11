import type { Metadata } from 'next'
import WatermarkRemoverClientEs from './WatermarkRemoverClientEs'
import StructuredData, { createSoftwareSchema } from '@/components/StructuredData'

export const metadata: Metadata = {
    title: 'Eliminar Marca de Agua Gratis | Herramienta IA - En 1 Segundo',
    description: 'Elimine marcas de agua de imágenes al instante con IA. Herramienta 100% gratuita. Resultados profesionales en 1 clic. Funciona en fotos, logos y texto. ¡Pruébelo!',

    alternates: {
        canonical: 'https://removewatermarkspro.com/es/eliminar-marca-agua',
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
        title: 'Eliminar Marca de Agua Gratis | En 1 Clic',
        description: 'Elimina marcas de agua de imágenes en 1 clic. Herramienta IA gratuita, rápida y sin registro.',
        url: 'https://removewatermarkspro.com/es/eliminar-marca-agua',
        siteName: 'Remove Watermark Pro',
        locale: 'es_ES',
        type: 'website',
        images: [
            {
                url: 'https://removewatermarkspro.com/og-image-es.jpg',
                width: 1200,
                height: 630,
                alt: 'Herramienta para Eliminar Marcas de Agua - Antes y Después'
            }
        ]
    },

    twitter: {
        card: 'summary_large_image',
        title: 'Eliminar Marca de Agua Gratis | En 1 Clic',
        description: 'Elimina marcas de agua de imágenes en 1 clic. Herramienta IA gratuita, rápida y sin registro.',
        images: ['https://removewatermarkspro.com/og-image-es.jpg']
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

export default function WatermarkRemoverSpanishPage() {
    return <WatermarkRemoverClientEs />
}
