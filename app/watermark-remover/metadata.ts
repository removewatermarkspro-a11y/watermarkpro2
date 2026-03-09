import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Watermark Remover Free | Remove in 1 Click - AI Powered',
    description: 'Remove watermarks from images in 1 click. Free AI tool, fast and no signup required. Try now and get professional results instantly!',

    alternates: {
        canonical: 'https://removewatermarkpro.co/en/watermark-remover',
        languages: {
            'en': 'https://removewatermarkpro.co/en/watermark-remover',
            'x-default': 'https://removewatermarkpro.co/en/watermark-remover'
        }
    },

    openGraph: {
        title: 'Watermark Remover Free | Remove in 1 Click',
        description: 'Remove watermarks from images in 1 click. Free AI tool, fast and no signup required.',
        url: 'https://removewatermarkpro.co/en/watermark-remover',
        siteName: 'Remove Watermark Pro',
        locale: 'en_US',
        type: 'website',
        images: [
            {
                url: 'https://removewatermarkpro.co/og-image-en.jpg',
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
        images: ['https://removewatermarkpro.co/og-image-en.jpg']
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
