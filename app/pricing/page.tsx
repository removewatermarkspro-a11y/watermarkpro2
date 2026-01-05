import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Pricing from '@/components/Pricing'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Pricing - Remove Watermark Pro | Plans & Pricing',
    description: 'Discover our pricing plans to remove watermarks. Free and premium plans with credits to remove watermarks from your images and videos.',

    alternates: {
        canonical: 'https://removewatermarkspro.com/pricing',
        languages: {
            'en': 'https://removewatermarkspro.com/pricing',
            'fr': 'https://removewatermarkspro.com/fr/tarifs',
            'de': 'https://removewatermarkspro.com/de/preise',
            'es': 'https://removewatermarkspro.com/es/precios',
            'pt': 'https://removewatermarkspro.com/pt/precos',
            'ko': 'https://removewatermarkspro.com/ko/pricing',
            'no': 'https://removewatermarkspro.com/no/pricing',
            'x-default': 'https://removewatermarkspro.com/pricing'
        }
    },

    openGraph: {
        title: 'Pricing - Remove Watermark Pro | Plans & Pricing',
        description: 'Discover our pricing plans to remove watermarks. Free and premium plans with credits to remove watermarks from your images and videos.',
        url: 'https://removewatermarkspro.com/pricing',
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
