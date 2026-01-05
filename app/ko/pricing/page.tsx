import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Pricing from '@/components/Pricing'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: '가격 - Remove Watermark Pro | 요금제 및 가격',
    description: '워터마크 제거를 위한 가격을 확인하세요. 이미지와 비디오에서 워터마크를 제거할 수 있는 무료 및 프리미엄 플랜.',

    alternates: {
        canonical: 'https://removewatermarkspro.com/ko/pricing',
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
        title: '가격 - Remove Watermark Pro | 요금제 및 가격',
        description: '워터마크 제거를 위한 가격을 확인하세요. 이미지와 비디오에서 워터마크를 제거할 수 있는 무료 및 프리미엄 플랜.',
        url: 'https://removewatermarkspro.com/ko/pricing',
        siteName: 'Remove Watermark Pro',
        locale: 'ko_KR',
        type: 'website',
    },

    twitter: {
        card: 'summary_large_image',
        title: '가격 - Remove Watermark Pro | 요금제 및 가격',
        description: '워터마크 제거를 위한 가격을 확인하세요. 무료 및 프리미엄 플랜.',
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
