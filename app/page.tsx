import type { Metadata } from 'next'
import WatermarkRemoverClient from './watermark-remover/WatermarkRemoverClient'
import StructuredData, { websiteSchema, organizationSchema, createSoftwareSchema } from '@/components/StructuredData'

export const metadata: Metadata = {
    title: 'Watermark Remover Free | AI Tool - Remove in 1 Second',
    description: 'Remove watermarks from images instantly with AI. 100% free tool. Professional results in 1 click. Works on photos, logos & text. Try it now!',

    alternates: {
        canonical: 'https://removewatermarkpro.co',
        languages: {
            'en': 'https://removewatermarkpro.co',
            'fr': 'https://removewatermarkpro.co/fr/enlever-filigrane',
            'de': 'https://removewatermarkpro.co/de/wasserzeichen-entfernen',
            'es': 'https://removewatermarkpro.co/es/eliminar-marca-agua',
            'pt': 'https://removewatermarkpro.co/pt/remover-marca-dagua',
            'ko': 'https://removewatermarkpro.co/ko/watermark-remover',
            'no': 'https://removewatermarkpro.co/no/fjern-vannmerke',
            'x-default': 'https://removewatermarkpro.co'
        }
    },

    openGraph: {
        title: 'Watermark Remover Free | Remove in 1 Click',
        description: 'Remove watermarks from images in 1 click. Free AI tool, fast and no signup required.',
        url: 'https://removewatermarkpro.co',
        siteName: 'Remove Watermark Pro',
        locale: 'en_US',
        type: 'website',
        images: [
            {
                url: 'https://removewatermarkpro.co/og-watermark-remover.jpg',
                width: 1200,
                height: 630,
                alt: 'Watermark Remover Tool - Before and After'
            }
        ]
    },

    twitter: {
        card: 'summary_large_image',
        title: 'Watermark Remover Free | Remove in 1 Click',
        description: 'Remove watermarks from images in 1 click. Free AI tool, fast and no signup required.',
        images: ['https://removewatermarkpro.co/og-watermark-remover.jpg']
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

export default function HomePage() {
    return (
        <>
            <StructuredData data={websiteSchema} />
            <StructuredData data={organizationSchema} />
            <StructuredData data={createSoftwareSchema({
                name: "Watermark Remover - AI Powered",
                url: "https://removewatermarkpro.co",
                description: "Remove watermarks from images in 1 click. Free AI tool, fast and no signup required. Professional results instantly.",
                applicationCategory: "MultimediaApplication",
                offers: {
                    price: "0",
                    priceCurrency: "USD"
                }
            })} />
            <WatermarkRemoverClient />
        </>
    )
}
