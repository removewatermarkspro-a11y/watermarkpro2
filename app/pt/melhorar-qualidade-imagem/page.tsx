import type { Metadata } from 'next'
import ImageUpscalerClientPt from './ImageUpscalerClientPt'
import StructuredData, { createSoftwareSchema } from '@/components/StructuredData'

export const metadata: Metadata = {
    title: 'Melhorar Qualidade Imagem Grátis | Aumentar Resolução IA',
    description: 'Amplie imagens com IA até 4x a resolução. Melhore a qualidade da foto, aumente a resolução e adicione detalhes realistas automaticamente.',
    keywords: 'melhorar qualidade imagem, aumentar resolução, ampliar imagem, ia melhoria imagem, ampliador foto',
    openGraph: {
        title: 'Melhorar Qualidade Imagem Grátis | Aumentar Resolução IA',
        description: 'Amplie imagens com IA até 4x a resolução.',
        url: 'https://removewatermarkpro.com/pt/melhorar-qualidade-imagem',
        siteName: 'Remove Watermark Pro',
        locale: 'pt_PT',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Melhorar Qualidade Imagem Grátis | Aumentar Resolução IA',
        description: 'Amplie imagens com IA até 4x a resolução.',
    },
    alternates: {
        canonical: 'https://removewatermarkpro.com/pt/melhorar-qualidade-imagem',
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

export default function MelhorarQualidadeImagem() {
    return (
        <>
            <StructuredData data={createSoftwareSchema({
                name: "Melhorar Qualidade de Imagem - IA Grátis",
                url: "https://removewatermarkpro.com/pt/melhorar-qualidade-imagem",
                description: "Melhore imagens com IA até 4x resolução. Aumente a qualidade de foto instantaneamente."
            })} />
            <ImageUpscalerClientPt />
        </>
    )
}
