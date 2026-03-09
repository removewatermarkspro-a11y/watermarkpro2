import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Pricing from '@/components/Pricing'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Priser - Remove Watermark Pro | Planer og Priser',
    description: 'Oppdag våre priser for å fjerne vannmerker. Gratis og premium-planer med kreditter for å fjerne vannmerker fra bildene og videoene dine.',

    alternates: {
        canonical: 'https://removewatermarkpro.co/no/priser',
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
        title: 'Priser - Remove Watermark Pro | Planer og Priser',
        description: 'Oppdag våre priser for å fjerne vannmerker. Gratis og premium-planer med kreditter.',
        url: 'https://removewatermarkpro.co/no/priser',
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
