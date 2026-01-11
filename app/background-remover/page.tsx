import type { Metadata } from 'next'
import BackgroundRemoverClient from './BackgroundRemoverClient'
<<<<<<< HEAD
import StructuredData, { createSoftwareSchema, createFAQSchema } from '@/components/StructuredData'
import { backgroundRemovalFaqItems } from '@/utils/faqItems'
=======
import StructuredData, { createSoftwareSchema } from '@/components/StructuredData'
>>>>>>> feature/qwen-api-integration

export const metadata: Metadata = {
    title: 'Background Remover AI | Remove Photo Backgrounds in 1 Click',
    description: 'Remove backgrounds from photos instantly with AI. Create transparent PNGs in 1 click. 100% free tool. Perfect for products, portraits & logos!',
    keywords: 'background remover, remove photo background, delete background, transparent background, ai background remover, photo background eraser',
    openGraph: {
        title: 'Free AI Background Remover | Remove Photo Background Instantly',
        description: 'Remove backgrounds from photos instantly with AI. Delete photo backgrounds, isolate subjects, and create transparent images in seconds.',
        url: 'https://removewatermarkpro.com/background-remover',
        siteName: 'Remove Watermark Pro',
        locale: 'en_US',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Free AI Background Remover | Remove Photo Background Instantly',
        description: 'Remove backgrounds from photos instantly with AI.',
    },
    alternates: {
        canonical: 'https://removewatermarkpro.com/background-remover',
        languages: {
            'en': 'https://removewatermarkpro.com/background-remover',
            'fr': 'https://removewatermarkpro.com/fr/supprimer-arriere-plan',
            'de': 'https://removewatermarkpro.com/de/hintergrund-entfernen',
            'es': 'https://removewatermarkpro.com/es/eliminar-fondo-imagen',
            'pt': 'https://removewatermarkpro.com/pt/remover-fundo-imagem',
            'ko': 'https://removewatermarkpro.com/ko/background-remover',
            'no': 'https://removewatermarkpro.com/no/fjern-bakgrunn',
        },
    },
}

export default function BackgroundRemover() {
    return (
        <>
            <StructuredData data={createSoftwareSchema({
                name: "AI Background Remover - Free",
                url: "https://removewatermarkpro.com/background-remover",
                description: "Remove backgrounds from photos instantly with AI. Delete photo backgrounds, isolate subjects, and create transparent images in seconds."
            })} />
            <BackgroundRemoverClient />
        </>
    )
}
