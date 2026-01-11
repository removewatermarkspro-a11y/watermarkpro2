import type { Metadata } from 'next'
import WatermarkRemoverClientFr from './WatermarkRemoverClientFr'
import StructuredData, { createSoftwareSchema } from '@/components/StructuredData'

export const metadata: Metadata = {
    title: 'Enlever Filigrane Gratuit | Outil IA - Suppression en 1 Seconde',
    description: 'Supprimez les filigranes des images instantanément avec l\'IA. Outil 100% gratuit. Résultats professionnels en 1 clic. Fonctionne sur photos, logos et texte. Essayez !',

    alternates: {
        canonical: 'https://removewatermarkspro.com/fr/enlever-filigrane',
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
        title: 'Enlever Filigrane Gratuit | Suppression en 1 Clic',
        description: 'Enlevez les filigranes des images en 1 clic. Outil IA gratuit, rapide et sans inscription.',
        url: 'https://removewatermarkspro.com/fr/enlever-filigrane',
        siteName: 'Remove Watermark Pro',
        locale: 'fr_FR',
        type: 'website',
        images: [
            {
                url: 'https://removewatermarkspro.com/og-image-fr.jpg',
                width: 1200,
                height: 630,
                alt: 'Outil pour Enlever les Filigranes - Avant et Après'
            }
        ]
    },

    twitter: {
        card: 'summary_large_image',
        title: 'Enlever Filigrane Gratuit | Suppression en 1 Clic',
        description: 'Enlevez les filigranes des images en 1 clic. Outil IA gratuit, rapide et sans inscription.',
        images: ['https://removewatermarkspro.com/og-image-fr.jpg']
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

export default function WatermarkRemoverFrenchPage() {
    return (
        <>
            <StructuredData data={createSoftwareSchema({
                name: "Enlever Filigrane - IA Gratuit",
                url: "https://removewatermarkspro.com/fr/enlever-filigrane",
                description: "Enlevez les filigranes des images en 1 clic. Outil IA gratuit, rapide et sans inscription."
            })} />
            <WatermarkRemoverClientFr />
        </>
    )
}
