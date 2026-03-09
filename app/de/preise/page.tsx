import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Pricing from '@/components/Pricing'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Preise - Remove Watermark Pro | Pläne und Preise',
    description: 'Entdecken Sie unsere Preise zum Entfernen von Wasserzeichen. Kostenlose und Premium-Pläne mit Credits zum Entfernen von Wasserzeichen aus Ihren Bildern und Videos.',

    alternates: {
        canonical: 'https://removewatermarkpro.co/de/preise',
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
        title: 'Preise - Remove Watermark Pro | Pläne und Preise',
        description: 'Entdecken Sie unsere Preise zum Entfernen von Wasserzeichen. Kostenlose und Premium-Pläne mit Credits.',
        url: 'https://removewatermarkpro.co/de/preise',
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
