import type { Metadata } from 'next'
import BackgroundReplacerClient from './BackgroundReplacerClient'
<<<<<<< HEAD
import StructuredData, { createSoftwareSchema, createFAQSchema } from '@/components/StructuredData'
import { replaceBackgroundFaqItems } from '@/utils/faqItems'
=======
import StructuredData, { createSoftwareSchema } from '@/components/StructuredData'
>>>>>>> feature/qwen-api-integration

export const metadata: Metadata = {
    title: 'Background Changer AI | Replace Photo Backgrounds Instantly',
    description: 'Change photo backgrounds with AI in seconds. Replace, swap & transform backgrounds instantly. 100% free tool. Perfect results every time. Try now!',
    keywords: 'background changer ai, change photo background, replace background, swap background, ai background changer, photo background editor',
    openGraph: {
        title: 'Free AI Background Changer | Change Photo Background Instantly',
        description: 'Change backgrounds in photos instantly with AI. Replace photo backgrounds, swap scenes, and transform images in seconds.',
        url: 'https://removewatermarkpro.com/background-changer-ai',
        siteName: 'Remove Watermark Pro',
        locale: 'en_US',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Free AI Background Changer | Change Photo Background Instantly',
        description: 'Change backgrounds in photos instantly with AI.',
    },
    alternates: {
        canonical: 'https://removewatermarkpro.com/background-changer-ai',
        languages: {
            'en': 'https://removewatermarkpro.com/background-changer-ai',
            'fr': 'https://removewatermarkpro.com/fr/changer-arriere-plan',
            'de': 'https://removewatermarkpro.com/de/hintergrund-wechseln',
            'es': 'https://removewatermarkpro.com/es/cambiar-fondo-imagen',
            'pt': 'https://removewatermarkpro.com/pt/trocar-fundo-imagem',
            'ko': 'https://removewatermarkpro.com/ko/background-changer-ai',
            'no': 'https://removewatermarkpro.com/no/endre-bakgrunn',
        },
    },
}

export default function BackgroundChangerAI() {
    return (
        <>
            <StructuredData data={createSoftwareSchema({
                name: "AI Background Changer - Free",
                url: "https://removewatermarkpro.com/background-changer-ai",
                description: "Change backgrounds in photos instantly with AI. Replace photo backgrounds, swap scenes, and transform images in seconds."
            })} />
            <BackgroundReplacerClient />
        </>
    )
}
