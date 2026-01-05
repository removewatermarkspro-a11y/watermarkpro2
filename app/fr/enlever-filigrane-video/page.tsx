import type { Metadata } from 'next'
import VideoWatermarkRemoverClientFr from './VideoWatermarkRemoverClientFr'
import StructuredData, { createSoftwareSchema } from '@/components/StructuredData'

export const metadata: Metadata = {
    title: 'Enlever Filigrane Vidéo | Supprimer MP4, MOV, AVI - Gratuit',
    description: 'Supprimez les filigranes des vidéos en 1 clic. Supporte MP4, MOV, AVI et plus. Outil IA 100% gratuit. Enlevez filigranes TikTok et logos. Essayez !',

    alternates: {
        canonical: 'https://removewatermarkspro.com/fr/enlever-filigrane-video',
        languages: {
            'en': 'https://removewatermarkspro.com/watermark-remover-video',
            'fr': 'https://removewatermarkspro.com/fr/enlever-filigrane-video',
            'de': 'https://removewatermarkspro.com/de/wasserzeichen-entfernen-video',
            'es': 'https://removewatermarkspro.com/es/eliminar-marca-agua-video',
            'pt': 'https://removewatermarkspro.com/pt/remover-marca-dagua-video',
            'ko': 'https://removewatermarkspro.com/ko/watermark-remover-video',
            'no': 'https://removewatermarkspro.com/no/fjern-vannmerke-video',
            'x-default': 'https://removewatermarkspro.com/watermark-remover-video'
        }
    },

    openGraph: {
        title: 'Enlever Filigrane Vidéo Gratuit | Suppression Filigrane Vidéo IA',
        description: 'Supprimez les filigranes des vidéos en 1 clic. Outil IA gratuit pour MP4, MOV, AVI. Rapide, sans inscription.',
        url: 'https://removewatermarkspro.com/fr/enlever-filigrane-video',
        siteName: 'Remove Watermark Pro',
        locale: 'fr_FR',
        type: 'website',
        images: [
            {
                url: 'https://removewatermarkspro.com/og-image-video-fr.jpg',
                width: 1200,
                height: 630,
                alt: 'Outil Suppression Filigrane Vidéo - Avant et Après'
            }
        ]
    },

    twitter: {
        card: 'summary_large_image',
        title: 'Enlever Filigrane Vidéo Gratuit | Suppression Filigrane Vidéo IA',
        description: 'Supprimez les filigranes des vidéos en 1 clic. Outil IA gratuit pour MP4, MOV, AVI. Rapide, sans inscription.',
        images: ['https://removewatermarkspro.com/og-image-video-fr.jpg']
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

export default function VideoWatermarkRemoverFrenchPage() {
    return (
        <>
            <StructuredData data={createSoftwareSchema({
                name: "Enlever Filigrane Vidéo - Gratuit",
                url: "https://removewatermarkspro.com/fr/enlever-filigrane-video",
                description: "Supprimez les filigranes des vidéos en 1 clic. Outil IA gratuit pour MP4, MOV, AVI. Rapide, sans inscription."
            })} />
            <VideoWatermarkRemoverClientFr />
        </>
    )
}
