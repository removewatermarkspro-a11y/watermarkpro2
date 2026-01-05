import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Pricing from '@/components/Pricing'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Priser - Remove Watermark Pro | Planer og Priser',
    description: 'Oppdag våre priser for å fjerne vannmerker. Gratis og premium-planer med kreditter for å fjerne vannmerker fra bildene og videoene dine.',

    alternates: {
        canonical: 'https://removewatermarkspro.com/no/priser',
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
        title: 'Priser - Remove Watermark Pro | Planer og Priser',
        description: 'Oppdag våre priser for å fjerne vannmerker. Gratis og premium-planer med kreditter.',
        url: 'https://removewatermarkspro.com/no/priser',
        siteName: 'Remove Watermark Pro',
        locale: 'no_NO',
        type: 'website',
    },

    twitter: {
        card: 'summary_large_image',
        title: 'Priser - Remove Watermark Pro | Planer og Priser',
        description: 'Oppdag våre priser for å fjerne vannmerker. Gratis og premium-planer.',
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

export default function PriserPage() {
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
