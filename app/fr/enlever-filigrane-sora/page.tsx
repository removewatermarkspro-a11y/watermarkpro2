import type { Metadata } from 'next'
import SoraWatermarkRemoverClientFr from './SoraWatermarkRemoverClientFr'
import StructuredData, { createSoftwareSchema } from '@/components/StructuredData'

export const metadata: Metadata = {
    title: 'Supprimer Filigrane Sora | Enlever Logos OpenAI Instantanément',
    description: 'Supprimez les filigranes et logos Sora IA des vidéos instantanément. Outil 100% gratuit pour contenu OpenAI Sora. Nettoyez vos vidéos en secondes. Essayez !',

    alternates: {
        canonical: 'https://removewatermarkspro.com/fr/enlever-filigrane-sora',
        languages: {
            'en': 'https://removewatermarkspro.com/sora-watermark-remover',
            'fr': 'https://removewatermarkspro.com/fr/enlever-filigrane-sora',
            'de': 'https://removewatermarkspro.com/de/sora-wasserzeichen-entfernen',
            'es': 'https://removewatermarkspro.com/es/eliminar-marca-agua-sora',
            'pt': 'https://removewatermarkspro.com/pt/remover-marca-dagua-sora',
            'ko': 'https://removewatermarkspro.com/ko/sora-watermark-remover',
            'no': 'https://removewatermarkspro.com/no/fjern-sora-vannmerke',
            'x-default': 'https://removewatermarkspro.com/sora-watermark-remover'
        }
    },

    openGraph: {
        title: 'Supprimer Filigrane Sora Gratuit | Enlever Logo OpenAI Sora',
        description: 'Supprimez les filigranes Sora AI instantanément. Outil gratuit pour effacer les logos, marques OpenAI Sora des vidéos IA.',
        url: 'https://removewatermarkspro.com/fr/enlever-filigrane-sora',
        siteName: 'Remove Watermark Pro',
        locale: 'fr_FR',
        type: 'website',
        images: [
            {
                url: 'https://removewatermarkspro.com/og-image-sora-fr.jpg',
                width: 1200,
                height: 630,
                alt: 'Outil Suppression Filigrane Sora - Avant et Après'
            }
        ]
    },

    twitter: {
        card: 'summary_large_image',
        title: 'Supprimer Filigrane Sora Gratuit | Enlever Logo OpenAI Sora',
        description: 'Supprimez les filigranes Sora AI instantanément. Outil gratuit pour effacer les logos, marques OpenAI Sora des vidéos IA.',
        images: ['https://removewatermarkspro.com/og-image-sora-fr.jpg']
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

export default function SoraWatermarkRemoverFrenchPage() {
    return (
        <>
            <StructuredData data={createSoftwareSchema({
                name: "Supprimer Filigrane Sora - Gratuit",
                url: "https://removewatermarkspro.com/fr/enlever-filigrane-sora",
                description: "Supprimez les filigranes Sora AI instantanément. Outil gratuit pour effacer les logos OpenAI Sora des vidéos IA."
            })} />
            <SoraWatermarkRemoverClientFr />
        </>
    )
}
