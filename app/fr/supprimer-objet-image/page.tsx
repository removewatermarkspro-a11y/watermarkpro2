import type { Metadata } from 'next'
import ObjectRemoverClientFr from './ObjectRemoverClientFr'
import StructuredData, { createSoftwareSchema } from '@/components/StructuredData'

export const metadata: Metadata = {
    title: 'Supprimer Objet Image Gratuit | Effacer Objets Rapidement',
    description: 'Supprimez objets indésirables, personnes et éléments des photos avec l\'IA. Outil 100% gratuit. Effacez intrus, encombrement et distractions. Essayez !',
    keywords: 'supprimer objet image, effacer objet photo, enlever objet indésirable, ia suppression objet, retirer photobombers, nettoyer photo',
    openGraph: {
        title: 'Supprimer Objet Image Gratuit | Effacer Objets Indésirables IA',
        description: 'Supprimez les objets indésirables, personnes et éléments des photos instantanément avec l\'IA. Effacez les photobombers, l\'encombrement et les distractions en quelques secondes.',
        url: 'https://removewatermarkpro.com/fr/supprimer-objet-image',
        siteName: 'Remove Watermark Pro',
        locale: 'fr_FR',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Supprimer Objet Image Gratuit | Effacer Objets Indésirables IA',
        description: 'Supprimez les objets indésirables des photos instantanément avec l\'IA.',
    },
    alternates: {
        canonical: 'https://removewatermarkpro.com/fr/supprimer-objet-image',
        languages: {
            'en': 'https://removewatermarkpro.com/object-remover-ai',
            'fr': 'https://removewatermarkpro.com/fr/supprimer-objet-image',
            'de': 'https://removewatermarkpro.com/de/objekt-entfernen',
            'es': 'https://removewatermarkpro.com/es/eliminar-objeto-imagen',
            'pt': 'https://removewatermarkpro.com/pt/remover-objeto-imagem',
            'ko': 'https://removewatermarkpro.com/ko/object-remover-ai',
            'no': 'https://removewatermarkpro.com/no/fjern-objekt-fra-bilde',
        },
    },
}

export default function SupprimerObjetImage() {
    return (
        <>
            <StructuredData data={createSoftwareSchema({
                name: "Supprimer Objet Image - IA Gratuit",
                url: "https://removewatermarkspro.com/fr/supprimer-objet-image",
                description: "Supprimez les objets indésirables, personnes et éléments des photos instantanément avec l'IA. Effacez les photobombers en quelques secondes."
            })} />
            <ObjectRemoverClientFr />
        </>
    )
}
