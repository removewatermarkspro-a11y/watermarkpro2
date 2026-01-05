import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Pricing from '@/components/Pricing'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Preise - Remove Watermark Pro | Pläne und Preise',
    description: 'Entdecken Sie unsere Preise zum Entfernen von Wasserzeichen. Kostenlose und Premium-Pläne mit Credits zum Entfernen von Wasserzeichen aus Ihren Bildern und Videos.',

    alternates: {
        canonical: 'https://removewatermarkspro.com/de/preise',
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
        title: 'Preise - Remove Watermark Pro | Pläne und Preise',
        description: 'Entdecken Sie unsere Preise zum Entfernen von Wasserzeichen. Kostenlose und Premium-Pläne mit Credits.',
        url: 'https://removewatermarkspro.com/de/preise',
        siteName: 'Remove Watermark Pro',
        locale: 'de_DE',
        type: 'website',
    },

    twitter: {
        card: 'summary_large_image',
        title: 'Preise - Remove Watermark Pro | Pläne und Preise',
        description: 'Entdecken Sie unsere Preise zum Entfernen von Wasserzeichen. Kostenlose und Premium-Pläne.',
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

export default function PreisePage() {
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
