import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Pricing from '@/components/Pricing'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Tarifs - Remove Watermark Pro | Plans et Prix',
    description: 'Découvrez nos tarifs pour supprimer les filigranes. Plans gratuits et premium avec crédits pour enlever les filigranes de vos images et vidéos.',

    alternates: {
        canonical: 'https://removewatermarkpro.co/fr/tarifs',
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
        title: 'Tarifs - Remove Watermark Pro | Plans et Prix',
        description: 'Découvrez nos tarifs pour supprimer les filigranes. Plans gratuits et premium avec crédits pour enlever les filigranes de vos images et vidéos.',
        url: 'https://removewatermarkpro.co/fr/tarifs',
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
