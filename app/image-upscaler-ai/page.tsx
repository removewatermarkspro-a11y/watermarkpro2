import type { Metadata } from 'next'
import ImageUpscalerClient from './ImageUpscalerClient'
import StructuredData, { createSoftwareSchema, createFAQSchema } from '@/components/StructuredData'
import { imageUpscalerFaqItems } from '@/utils/faqItems'

export const metadata: Metadata = {
    title: 'Free AI Image Upscaler',
    description: 'Upscale images to 4K with AI. Enhance photo quality up to 4x resolution. 100% free tool. No quality loss, perfect details. Try it now!',
    keywords: 'image upscaler ai, upscale image, enhance photo quality, increase resolution, ai image enhancer, photo upscaler',
    openGraph: {
        title: 'Free AI Image Upscaler | Enhance Photo Quality & Resolution',
        description: 'Upscale images instantly with AI. Enhance photo quality, increase resolution, and improve image clarity in seconds.',
        url: 'https://removewatermarkpro.co/image-upscaler-ai',
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
        canonical: 'https://removewatermarkpro.co/image-upscaler-ai',
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

export default function ImageUpscalerAI() {
    return (
        <>
            <StructuredData data={createSoftwareSchema({
                name: "AI Image Upscaler - Free",
                url: "https://removewatermarkpro.co/image-upscaler-ai",
                description: "Upscale images instantly with AI. Enhance photo quality, increase resolution, and improve image clarity in seconds."
            })} />
            <ImageUpscalerClient />
        </>
    )
}
