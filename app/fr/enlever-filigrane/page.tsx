import type { Metadata } from 'next'
import WatermarkRemoverClientFr from './WatermarkRemoverClientFr'
import StructuredData, { createSoftwareSchema } from '@/components/StructuredData'

export const metadata: Metadata = {
    title: 'Enlever Filigrane Gratuit | Outil IA - Suppression en 1 Seconde',
    description: 'Supprimez les filigranes des images instantanément avec l\'IA. Outil 100% gratuit. Résultats professionnels en 1 clic. Fonctionne sur photos, logos et texte. Essayez !',

    alternates: {
        canonical: 'https://removewatermarkpro.co/fr/enlever-filigrane',
        languages: {
            'en': 'https://removewatermarkpro.co/watermark-remover',
            'fr': 'https://removewatermarkpro.co/fr/enlever-filigrane',
            'de': 'https://removewatermarkpro.co/de/wasserzeichen-entfernen',
            'es': 'https://removewatermarkpro.co/es/eliminar-marca-agua',
            'pt': 'https://removewatermarkpro.co/pt/remover-marca-dagua',
            'ko': 'https://removewatermarkpro.co/ko/watermark-remover',
            'no': 'https://removewatermarkpro.co/no/fjern-vannmerke',
            'x-default': 'https://removewatermarkpro.co/watermark-remover'
        }
    },

    openGraph: {
        title: 'Enlever Filigrane Gratuit | Suppression en 1 Clic',
        description: 'Enlevez les filigranes des images en 1 clic. Outil IA gratuit, rapide et sans inscription.',
        url: 'https://removewatermarkpro.co/fr/enlever-filigrane',
        siteName: 'Remove Watermark Pro',
        locale: 'fr_FR',
        type: 'website',
        images: [
            {
                url: 'https://removewatermarkpro.co/og-image-fr.jpg',
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
        images: ['https://removewatermarkpro.co/og-image-fr.jpg']
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
                url: "https://removewatermarkpro.co/fr/enlever-filigrane",
                description: "Enlevez les filigranes des images en 1 clic. Outil IA gratuit, rapide et sans inscription."
            })} />
            <WatermarkRemoverClientFr />
        </>
    )
}
