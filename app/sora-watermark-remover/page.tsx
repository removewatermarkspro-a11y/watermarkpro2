import type { Metadata } from 'next'
import SoraWatermarkRemoverClient from './SoraWatermarkRemoverClient'
import StructuredData, { createSoftwareSchema, createFAQSchema } from '@/components/StructuredData'
import { soraRemoverFaqItems } from '@/utils/soraRemoverFaqItems'

export const metadata: Metadata = {
    title: 'Sora Watermark Remover | Remove OpenAI Sora Logos Instantly',
    description: 'Remove Sora AI watermarks & logos from videos instantly. 100% free tool for OpenAI Sora content. Clean videos in seconds. Try it now!',

    alternates: {
        canonical: 'https://removewatermarkspro.com/sora-watermark-remover',
        languages: {
            'en': 'https://removewatermarkspro.com/sora-watermark-remover',
            'fr': 'https://removewatermarkspro.com/fr/supprimer-filigrane-sora',
            'de': 'https://removewatermarkspro.com/de/sora-wasserzeichen-entfernen',
            'es': 'https://removewatermarkspro.com/es/eliminar-marca-agua-sora',
            'pt': 'https://removewatermarkspro.com/pt/remover-marca-dagua-sora',
            'ko': 'https://removewatermarkspro.com/ko/sora-watermark-remover',
            'no': 'https://removewatermarkspro.com/no/fjern-sora-vannmerke',
            'x-default': 'https://removewatermarkspro.com/sora-watermark-remover'
        }
    },

    openGraph: {
        title: 'Free Sora Watermark Remover | Remove OpenAI Sora Logo & Branding',
        description: 'Remove Sora AI watermarks instantly. Free tool to erase OpenAI Sora logos, branding & watermarks from AI-generated videos.',
        url: 'https://removewatermarkspro.com/sora-watermark-remover',
        siteName: 'Remove Watermark Pro',
        locale: 'en_US',
        type: 'website',
        images: [
            {
                url: 'https://removewatermarkspro.com/og-sora-remover.jpg',
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
        images: ['https://removewatermarkspro.com/og-sora-remover.jpg']
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
                url: "https://removewatermarkspro.com/sora-watermark-remover",
                description: "Remove Sora AI watermarks instantly. Free tool to erase OpenAI Sora logos, branding & watermarks from AI-generated videos."
            })} />
            <SoraWatermarkRemoverClient />
        </>
    )
}
