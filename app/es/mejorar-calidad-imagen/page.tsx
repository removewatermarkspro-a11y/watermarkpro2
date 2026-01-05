import type { Metadata } from 'next'
import ImageUpscalerClientEs from './ImageUpscalerClientEs'
import StructuredData, { createSoftwareSchema } from '@/components/StructuredData'

export const metadata: Metadata = {
    title: 'Mejorar Calidad Imagen Gratis | Aumentar Resolución IA',
    description: 'Amplíe imágenes con IA hasta 4x la resolución. Mejore la calidad de foto, aumente la resolución y agregue detalles realistas automáticamente.',
    keywords: 'mejorar calidad imagen, aumentar resolución, ampliar imagen, ia mejora imagen, ampliador foto',
    openGraph: {
        title: 'Mejorar Calidad Imagen Gratis | Aumentar Resolución IA',
        description: 'Amplíe imágenes con IA hasta 4x la resolución.',
        url: 'https://removewatermarkpro.com/es/mejorar-calidad-imagen',
        siteName: 'Remove Watermark Pro',
        locale: 'es_ES',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Mejorar Calidad Imagen Gratis | Aumentar Resolución IA',
        description: 'Amplíe imágenes con IA hasta 4x la resolución.',
    },
    alternates: {
        canonical: 'https://removewatermarkpro.com/es/mejorar-calidad-imagen',
        languages: {
            'en': 'https://removewatermarkpro.com/image-upscaler-ai',
            'fr': 'https://removewatermarkpro.com/fr/agrandir-image',
            'de': 'https://removewatermarkpro.com/de/bild-hochskalieren',
            'es': 'https://removewatermarkpro.com/es/mejorar-calidad-imagen',
            'pt': 'https://removewatermarkpro.com/pt/melhorar-qualidade-imagem',
            'ko': 'https://removewatermarkpro.com/ko/image-upscaler-ai',
            'no': 'https://removewatermarkpro.com/no/forbedre-bildekvalitet',
        },
    },
}

export default function MejorarCalidadImagen() {
    return (
        <>
            <StructuredData data={createSoftwareSchema({
                name: "Mejorar Calidad de Imagen - IA Gratis",
                url: "https://removewatermarkpro.com/es/mejorar-calidad-imagen",
                description: "Mejora imágenes con IA hasta 4x resolución. Aumenta la calidad de foto al instante."
            })} />
            <ImageUpscalerClientEs />
        </>
    )
}
