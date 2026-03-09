import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Pricing from '@/components/Pricing'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Preços - Remove Watermark Pro | Planos e Preços',
    description: 'Descubra nossos preços para remover marcas d\'água. Planos gratuitos e premium com créditos para remover marcas d\'água de suas imagens e vídeos.',

    alternates: {
        canonical: 'https://removewatermarkpro.co/pt/precos',
        languages: {
            'en': 'https://removewatermarkpro.co/pricing',
            'fr': 'https://removewatermarkpro.co/fr/tarifs',
            'de': 'https://removewatermarkpro.co/de/preise',
            'es': 'https://removewatermarkpro.co/es/precios',
            'pt': 'https://removewatermarkpro.co/pt/precos',
            'ko': 'https://removewatermarkpro.co/ko/pricing',
            'no': 'https://removewatermarkpro.co/no/priser',
            'x-default': 'https://removewatermarkpro.co/pricing'
        }
    },

    openGraph: {
        title: 'Preços - Remove Watermark Pro | Planos e Preços',
        description: 'Descubra nossos preços para remover marcas d\'água. Planos gratuitos e premium com créditos.',
        url: 'https://removewatermarkpro.co/pt/precos',
        siteName: 'Remove Watermark Pro',
        locale: 'pt_PT',
        type: 'website',
    },

    twitter: {
        card: 'summary_large_image',
        title: 'Preços - Remove Watermark Pro | Planos e Preços',
        description: 'Descubra nossos preços para remover marcas d\'água. Planos gratuitos e premium.',
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

export default function PrecosPage() {
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
