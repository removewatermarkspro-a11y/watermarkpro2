import type { Metadata } from 'next'
import ImageUpscalerClientNo from './ImageUpscalerClientNo'

export const metadata: Metadata = {
    title: 'Gratis Forbedre Bildekvalitet | Øke Oppløsning AI',
    description: 'Skaler opp bilder med AI opptil 4x oppløsningen. Forbedre fotokvalitet, øk oppløsning og legg til realistiske detaljer automatisk.',
    keywords: 'forbedre bildekvalitet, øke oppløsning, forstørre bilde, ai bildeforbedring, foto forstørrer',
    openGraph: {
        title: 'Gratis Forbedre Bildekvalitet | Øke Oppløsning AI',
        description: 'Skaler opp bilder med AI opptil 4x oppløsningen.',
        url: 'https://removewatermarkpro.co/no/forbedre-bildekvalitet',
        siteName: 'Remove Watermark Pro',
        locale: 'no_NO',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Gratis Forbedre Bildekvalitet | Øke Oppløsning AI',
        description: 'Skaler opp bilder med AI opptil 4x oppløsningen.',
    },
    alternates: {
        canonical: 'https://removewatermarkpro.co/no/forbedre-bildekvalitet',
        languages: {
            'en': 'https://removewatermarkpro.co/image-upscaler-ai',
            'fr': 'https://removewatermarkpro.co/fr/agrandir-image',
            'de': 'https://removewatermarkpro.co/de/bild-hochskalieren',
            'es': 'https://removewatermarkpro.co/es/mejorar-calidad-imagen',
            'pt': 'https://removewatermarkpro.co/pt/melhorar-qualidade-imagem',
            'ko': 'https://removewatermarkpro.co/ko/image-upscaler-ai',
            'no': 'https://removewatermarkpro.co/no/forbedre-bildekvalitet',
        },
    },
}

export default function ForbedreBildekvalitet() {
    return <ImageUpscalerClientNo />
}
