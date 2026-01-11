import type { Metadata } from 'next'
import WatermarkRemoverClientDe from './WatermarkRemoverClientDe'
import StructuredData, { createSoftwareSchema } from '@/components/StructuredData'

export const metadata: Metadata = {
    title: 'Wasserzeichen Entfernen Kostenlos | KI-Tool - In 1 Sekunde',
    description: 'Entfernen Sie Wasserzeichen von Bildern sofort mit KI. 100% kostenloses Tool. Professionelle Ergebnisse in 1 Klick. Funktioniert bei Fotos, Logos & Text. Jetzt testen!',

    alternates: {
        canonical: 'https://removewatermarkspro.com/de/wasserzeichen-entfernen',
        languages: {
            'en': 'https://removewatermarkspro.com/watermark-remover',
            'fr': 'https://removewatermarkspro.com/fr/enlever-filigrane',
            'de': 'https://removewatermarkspro.com/de/wasserzeichen-entfernen',
            'es': 'https://removewatermarkspro.com/es/eliminar-marca-agua',
            'pt': 'https://removewatermarkspro.com/pt/remover-marca-dagua',
            'ko': 'https://removewatermarkspro.com/ko/watermark-remover',
            'no': 'https://removewatermarkspro.com/no/fjern-vannmerke',
            'x-default': 'https://removewatermarkspro.com/watermark-remover'
        }
    },

    openGraph: {
        title: 'Wasserzeichen Entfernen Kostenlos | In 1 Klick',
        description: 'Entfernen Sie Wasserzeichen von Bildern in 1 Klick. Kostenloses KI-Tool, schnell und ohne Anmeldung.',
        url: 'https://removewatermarkspro.com/de/wasserzeichen-entfernen',
        siteName: 'Remove Watermark Pro',
        locale: 'de_DE',
        type: 'website',
        images: [
            {
                url: 'https://removewatermarkspro.com/og-image-de.jpg',
                width: 1200,
                height: 630,
                alt: 'Wasserzeichen Entferner Tool - Vorher und Nachher'
            }
        ]
    },

    twitter: {
        card: 'summary_large_image',
        title: 'Wasserzeichen Entfernen Kostenlos | In 1 Klick',
        description: 'Entfernen Sie Wasserzeichen von Bildern in 1 Klick. Kostenloses KI-Tool, schnell und ohne Anmeldung.',
        images: ['https://removewatermarkspro.com/og-image-de.jpg']
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

export default function WatermarkRemoverGermanPage() {
    return (
        <>
            <StructuredData data={createSoftwareSchema({
                name: "Wasserzeichen Entfernen - KI Kostenlos",
                url: "https://removewatermarkpro.com/de/wasserzeichen-entfernen",
                description: "Entfernen Sie Wasserzeichen von Bildern in 1 Klick. Kostenloses KI-Tool, schnell und ohne Anmeldung."
            })} />
            <WatermarkRemoverClientDe />
        </>
    )
}
