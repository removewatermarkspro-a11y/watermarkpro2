import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Pricing from '@/components/Pricing'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Precios - Remove Watermark Pro | Planes y Precios',
    description: 'Descubre nuestros precios para eliminar marcas de agua. Planes gratuitos y premium con créditos para eliminar marcas de agua de tus imágenes y videos.',

    alternates: {
        canonical: 'https://removewatermarkspro.com/es/precios',
        languages: {
            'en': 'https://removewatermarkspro.com/pricing',
            'fr': 'https://removewatermarkspro.com/fr/tarifs',
            'de': 'https://removewatermarkspro.com/de/preise',
            'es': 'https://removewatermarkspro.com/es/precios',
            'pt': 'https://removewatermarkspro.com/pt/precos',
            'ko': 'https://removewatermarkspro.com/ko/pricing',
            'no': 'https://removewatermarkspro.com/no/priser',
            'x-default': 'https://removewatermarkspro.com/pricing'
        }
    },

    openGraph: {
        title: 'Precios - Remove Watermark Pro | Planes y Precios',
        description: 'Descubre nuestros precios para eliminar marcas de agua. Planes gratuitos y premium con créditos.',
        url: 'https://removewatermarkspro.com/es/precios',
        siteName: 'Remove Watermark Pro',
        locale: 'es_ES',
        type: 'website',
    },

    twitter: {
        card: 'summary_large_image',
        title: 'Precios - Remove Watermark Pro | Planes y Precios',
        description: 'Descubre nuestros precios para eliminar marcas de agua. Planes gratuitos y premium.',
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

export default function PreciosPage() {
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
