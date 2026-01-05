import type { Metadata } from 'next'
import ImageUpscalerClientDe from './ImageUpscalerClientDe'
import StructuredData, { createSoftwareSchema } from '@/components/StructuredData'

export const metadata: Metadata = {
    title: 'Kostenlos Bild Hochskalieren | Fotoqualität Verbessern KI',
    description: 'Skalieren Sie Bilder mit KI bis zu 4x der Auflösung hoch. Verbessern Sie die Fotoqualität, erhöhen Sie die Auflösung und fügen Sie automatisch realistische Details hinzu.',
    keywords: 'bild hochskalieren, fotoqualität verbessern, auflösung erhöhen, ki bildverbesserung, foto vergrößerer',
    openGraph: {
        title: 'Kostenlos Bild Hochskalieren | Fotoqualität Verbessern KI',
        description: 'Skalieren Sie Bilder mit KI bis zu 4x der Auflösung hoch.',
        url: 'https://removewatermarkpro.com/de/bild-hochskalieren',
        siteName: 'Remove Watermark Pro',
        locale: 'de_DE',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Kostenlos Bild Hochskalieren | Fotoqualität Verbessern KI',
        description: 'Skalieren Sie Bilder mit KI bis zu 4x der Auflösung hoch.',
    },
    alternates: {
        canonical: 'https://removewatermarkpro.com/de/bild-hochskalieren',
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

export default function BildHochskalieren() {
    return (
        <>
            <StructuredData data={createSoftwareSchema({
                name: "Bild Hochskalieren - KI Kostenlos",
                url: "https://removewatermarkpro.com/de/bild-hochskalieren",
                description: "Skalieren Sie Bilder mit KI bis zu 4x Auflösung hoch. Verbessern Sie die Fotoqualität sofort."
            })} />
            <ImageUpscalerClientDe />
        </>
    )
}
