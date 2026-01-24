import type { Metadata } from 'next'
import WatermarkRemoverClient from './watermark-remover/WatermarkRemoverClient'
import StructuredData, { websiteSchema, organizationSchema, createSoftwareSchema } from '@/components/StructuredData'

export const metadata: Metadata = {
    title: 'Watermark Remover Free | AI Tool - Remove in 1 Second',
    description: 'Remove watermarks from images instantly with AI. 100% free tool. Professional results in 1 click. Works on photos, logos & text. Try it now!',

    alternates: {
        canonical: 'https://removewatermarkspro.com',
        languages: {
            'en': 'https://removewatermarkspro.com',
            'fr': 'https://removewatermarkspro.com/fr/enlever-filigrane',
            'de': 'https://removewatermarkspro.com/de/wasserzeichen-entfernen',
            'es': 'https://removewatermarkspro.com/es/eliminar-marca-agua',
            'pt': 'https://removewatermarkspro.com/pt/remover-marca-dagua',
            'ko': 'https://removewatermarkspro.com/ko/watermark-remover',
            'no': 'https://removewatermarkspro.com/no/fjern-vannmerke',
            'x-default': 'https://removewatermarkspro.com'
        }
    },

    openGraph: {
        title: 'Watermark Remover Free | Remove in 1 Click',
        description: 'Remove watermarks from images in 1 click. Free AI tool, fast and no signup required.',
        url: 'https://removewatermarkspro.com',
        siteName: 'Remove Watermark Pro',
        locale: 'en_US',
        type: 'website',
        images: [
            {
                url: 'https://removewatermarkspro.com/og-watermark-remover.jpg',
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
        images: ['https://removewatermarkspro.com/og-watermark-remover.jpg']
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
                url: "https://removewatermarkspro.com",
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
