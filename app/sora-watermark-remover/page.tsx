import type { Metadata } from 'next'
import SoraWatermarkRemoverClient from './SoraWatermarkRemoverClient'
import StructuredData, { createSoftwareSchema, createFAQSchema } from '@/components/StructuredData'
import { soraRemoverFaqItems } from '@/utils/soraRemoverFaqItems'

export const metadata: Metadata = {
    title: 'Sora Watermark Remover | Remove OpenAI Sora Logos Instantly',
    description: 'Remove Sora AI watermarks & logos from videos instantly. 100% free tool for OpenAI Sora content. Clean videos in seconds. Try it now!',

    alternates: {
        canonical: 'https://removewatermarkpro.co/sora-watermark-remover',
        languages: {
            'en': 'https://removewatermarkpro.co/sora-watermark-remover',
            'fr': 'https://removewatermarkpro.co/fr/supprimer-filigrane-sora',
            'de': 'https://removewatermarkpro.co/de/sora-wasserzeichen-entfernen',
            'es': 'https://removewatermarkpro.co/es/eliminar-marca-agua-sora',
            'pt': 'https://removewatermarkpro.co/pt/remover-marca-dagua-sora',
            'ko': 'https://removewatermarkpro.co/ko/sora-watermark-remover',
            'no': 'https://removewatermarkpro.co/no/fjern-sora-vannmerke',
            'x-default': 'https://removewatermarkpro.co/sora-watermark-remover'
        }
    },

    openGraph: {
        title: 'Free Sora Watermark Remover | Remove OpenAI Sora Logo & Branding',
        description: 'Remove Sora AI watermarks instantly. Free tool to erase OpenAI Sora logos, branding & watermarks from AI-generated videos.',
        url: 'https://removewatermarkpro.co/sora-watermark-remover',
        siteName: 'Remove Watermark Pro',
        locale: 'en_US',
        type: 'website',
        images: [
            {
                url: 'https://removewatermarkpro.co/og-sora-remover.jpg',
                width: 1200,
                height: 630,
                alt: 'Sora Watermark Remover Tool - Before and After'
            }
        ]
    },

    twitter: {
        card: 'summary_large_image',
        title: 'Free Sora Watermark Remover | Remove OpenAI Sora Logo & Branding',
        description: 'Remove Sora AI watermarks instantly. Free tool to erase OpenAI Sora logos, branding & watermarks from AI-generated videos.',
        images: ['https://removewatermarkpro.co/og-sora-remover.jpg']
    },

    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
}

export default function SoraWatermarkRemoverPage() {
    return (
        <>
            <StructuredData data={createSoftwareSchema({
                name: "Sora Watermark Remover - Free",
                url: "https://removewatermarkpro.co/sora-watermark-remover",
                description: "Remove Sora AI watermarks instantly. Free tool to erase OpenAI Sora logos, branding & watermarks from AI-generated videos."
            })} />
            <SoraWatermarkRemoverClient />
        </>
    )
}
