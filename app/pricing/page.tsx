import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Pricing from '@/components/Pricing'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Pricing - Remove Watermark Pro | Plans & Pricing',
    description: 'Discover our pricing plans to remove watermarks. Free and premium plans with credits to remove watermarks from your images and videos.',

    alternates: {
        canonical: 'https://removewatermarkpro.co/pricing',
        languages: {
            'en': 'https://removewatermarkpro.co/pricing',
            'fr': 'https://removewatermarkpro.co/fr/tarifs',
            'de': 'https://removewatermarkpro.co/de/preise',
            'es': 'https://removewatermarkpro.co/es/precios',
            'pt': 'https://removewatermarkpro.co/pt/precos',
            'ko': 'https://removewatermarkpro.co/ko/pricing',
            'no': 'https://removewatermarkpro.co/no/pricing',
            'x-default': 'https://removewatermarkpro.co/pricing'
        }
    },

    openGraph: {
        title: 'Pricing - Remove Watermark Pro | Plans & Pricing',
        description: 'Discover our pricing plans to remove watermarks. Free and premium plans with credits to remove watermarks from your images and videos.',
        url: 'https://removewatermarkpro.co/pricing',
        siteName: 'Remove Watermark Pro',
        locale: 'en_US',
        type: 'website',
    },

    twitter: {
        card: 'summary_large_image',
        title: 'Pricing - Remove Watermark Pro | Plans & Pricing',
        description: 'Discover our pricing plans to remove watermarks. Free and premium plans with credits.',
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

export default function PricingPage() {
    return (
        <>
            <Header />
            <main style={{ minHeight: '100vh', paddingTop: '4rem', paddingBottom: '4rem' }}>
                <div className="container">
                    <Pricing />
                </div>
            </main>
            <Footer />
        </>
    )
}
