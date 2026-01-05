import type { Metadata } from 'next'
import ImageUpscalerClientFr from './ImageUpscalerClientFr'
import StructuredData, { createSoftwareSchema } from '@/components/StructuredData'

export const metadata: Metadata = {
    title: 'Agrandir Image Gratuit | Améliorer Photos en Qualité 4K',
    description: 'Agrandissez les images en 4K avec l\'IA. Améliorez la qualité photo jusqu\'à 4x la résolution. Outil 100% gratuit. Sans perte de qualité, détails parfaits. Essayez !',
    keywords: 'agrandir image, améliorer qualité photo, augmenter résolution, ia amélioration image, agrandisseur photo',
    openGraph: {
        title: 'Agrandir Image Gratuit | Améliorer Qualité Photo IA',
        description: 'Agrandissez les images avec l\'IA jusqu\'à 4x la résolution.',
        url: 'https://removewatermarkpro.com/fr/agrandir-image',
        siteName: 'Remove Watermark Pro',
        locale: 'fr_FR',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Agrandir Image Gratuit | Améliorer Qualité Photo IA',
        description: 'Agrandissez les images avec l\'IA jusqu\'à 4x la résolution.',
    },
    alternates: {
        canonical: 'https://removewatermarkpro.com/fr/agrandir-image',
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

export default function AgrandirImage() {
    return (
        <>
            <StructuredData data={createSoftwareSchema({
                name: "Agrandir Image - IA Gratuit",
                url: "https://removewatermarkpro.com/fr/agrandir-image",
                description: "Agrandissez les images avec l'IA jusqu'à 4x la résolution. Améliorez la qualité photo instantanément."
            })} />
            <ImageUpscalerClientFr />
        </>
    )
}
