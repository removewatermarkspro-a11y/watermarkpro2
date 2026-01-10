import type { Metadata } from 'next'
import ImageUpscalerClient from './ImageUpscalerClient'
import StructuredData, { createSoftwareSchema, createFAQSchema } from '@/components/StructuredData'
import { imageUpscalerFaqItems } from '@/utils/faqItems'

export const metadata: Metadata = {
    title: 'Image Upscaler AI Free | Enhance Photos to 4K Quality',
    description: 'Upscale images to 4K with AI. Enhance photo quality up to 4x resolution. 100% free tool. No quality loss, perfect details. Try it now!',
    keywords: 'image upscaler ai, upscale image, enhance photo quality, increase resolution, ai image enhancer, photo upscaler',
    openGraph: {
        title: 'Free AI Image Upscaler | Enhance Photo Quality & Resolution',
        description: 'Upscale images instantly with AI. Enhance photo quality, increase resolution, and improve image clarity in seconds.',
        url: 'https://removewatermarkpro.com/image-upscaler-ai',
        siteName: 'Remove Watermark Pro',
        locale: 'en_US',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Free AI Image Upscaler | Enhance Photo Quality & Resolution',
        description: 'Upscale images instantly with AI.',
    },
    alternates: {
        canonical: 'https://removewatermarkpro.com/image-upscaler-ai',
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

export default function ImageUpscalerAI() {
    return (
        <>
            <StructuredData data={createSoftwareSchema({
                name: "AI Image Upscaler - Free",
                url: "https://removewatermarkpro.com/image-upscaler-ai",
                description: "Upscale images instantly with AI. Enhance photo quality, increase resolution, and improve image clarity in seconds."
            })} />
            <ImageUpscalerClient />
        </>
    )
}
