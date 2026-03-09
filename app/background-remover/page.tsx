import type { Metadata } from 'next'
import BackgroundRemoverClient from './BackgroundRemoverClient'
import StructuredData, { createSoftwareSchema, createFAQSchema } from '@/components/StructuredData'
import { backgroundRemovalFaqItems } from '@/utils/faqItems'

export const metadata: Metadata = {
    title: 'Background Remover AI | Remove Photo Backgrounds in 1 Click',
    description: 'Remove backgrounds from photos instantly with AI. Create transparent PNGs in 1 click. 100% free tool. Perfect for products, portraits & logos!',
    keywords: 'background remover, remove photo background, delete background, transparent background, ai background remover, photo background eraser',
    openGraph: {
        title: 'Free AI Background Remover | Remove Photo Background Instantly',
        description: 'Remove backgrounds from photos instantly with AI. Delete photo backgrounds, isolate subjects, and create transparent images in seconds.',
        url: 'https://removewatermarkpro.co/background-remover',
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
        canonical: 'https://removewatermarkpro.co/background-remover',
        languages: {
            'en': 'https://removewatermarkpro.co/background-remover',
            'fr': 'https://removewatermarkpro.co/fr/supprimer-arriere-plan',
            'de': 'https://removewatermarkpro.co/de/hintergrund-entfernen',
            'es': 'https://removewatermarkpro.co/es/eliminar-fondo-imagen',
            'pt': 'https://removewatermarkpro.co/pt/remover-fundo-imagem',
            'ko': 'https://removewatermarkpro.co/ko/background-remover',
            'no': 'https://removewatermarkpro.co/no/fjern-bakgrunn',
        },
    },
}

export default function BackgroundRemover() {
    return (
        <>
            <StructuredData data={createSoftwareSchema({
                name: "AI Background Remover - Free",
                url: "https://removewatermarkpro.co/background-remover",
                description: "Remove backgrounds from photos instantly with AI. Delete photo backgrounds, isolate subjects, and create transparent images in seconds."
            })} />
            <BackgroundRemoverClient />
        </>
    )
}
