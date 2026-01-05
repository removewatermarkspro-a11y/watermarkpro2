import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Pricing from '@/components/Pricing'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Tarifs - Remove Watermark Pro | Plans et Prix',
    description: 'Découvrez nos tarifs pour supprimer les filigranes. Plans gratuits et premium avec crédits pour enlever les filigranes de vos images et vidéos.',

    alternates: {
        canonical: 'https://removewatermarkspro.com/fr/tarifs',
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
        title: 'Tarifs - Remove Watermark Pro | Plans et Prix',
        description: 'Découvrez nos tarifs pour supprimer les filigranes. Plans gratuits et premium avec crédits pour enlever les filigranes de vos images et vidéos.',
        url: 'https://removewatermarkspro.com/fr/tarifs',
        siteName: 'Remove Watermark Pro',
        locale: 'fr_FR',
        type: 'website',
    },

    twitter: {
        card: 'summary_large_image',
        title: 'Tarifs - Remove Watermark Pro | Plans et Prix',
        description: 'Découvrez nos tarifs pour supprimer les filigranes. Plans gratuits et premium avec crédits.',
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

export default function TarifsPage() {
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
