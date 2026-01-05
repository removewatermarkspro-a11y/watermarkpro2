import type { Metadata } from 'next'
import TextRemoverClientFr from './TextRemoverClientFr'
import StructuredData, { createSoftwareSchema } from '@/components/StructuredData'

export const metadata: Metadata = {
    title: 'Supprimer Texte Image Gratuit | Effacer Texte Photo IA',
    description: 'Effacez texte, légendes et sous-titres des images avec l\'IA. Outil 100% gratuit. Supprimez filigranes, logos et texte indésirable en secondes. Essayez !',
    keywords: 'supprimer texte image, effacer texte photo, enlever texte image, ia suppression texte, retirer légendes, supprimer sous-titres',
    openGraph: {
        title: 'Supprimer Texte Image Gratuit | Effacer Texte Photo IA',
        description: 'Supprimez le texte, les légendes et les sous-titres des images instantanément avec l\'IA. Nettoyez vos photos en effaçant les superpositions de texte indésirables en quelques secondes.',
        url: 'https://removewatermarkpro.com/fr/supprimer-texte-image',
        siteName: 'Remove Watermark Pro',
        locale: 'fr_FR',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Supprimer Texte Image Gratuit | Effacer Texte Photo IA',
        description: 'Supprimez le texte, les légendes et les sous-titres des images instantanément avec l\'IA.',
    },
    alternates: {
        canonical: 'https://removewatermarkpro.com/fr/supprimer-texte-image',
        languages: {
            'en': 'https://removewatermarkpro.com/text-remover-ai',
            'fr': 'https://removewatermarkpro.com/fr/supprimer-texte-image',
            'de': 'https://removewatermarkpro.com/de/text-entfernen',
            'es': 'https://removewatermarkpro.com/es/eliminar-texto-imagen',
            'pt': 'https://removewatermarkpro.com/pt/remover-texto-imagem',
            'ko': 'https://removewatermarkpro.com/ko/text-remover-ai',
            'no': 'https://removewatermarkpro.com/no/fjern-tekst-fra-bilde',
        },
    },
}

export default function SupprimerTexteImage() {
    return (
        <>
            <StructuredData data={createSoftwareSchema({
                name: "Supprimer Texte Image - IA Gratuit",
                url: "https://removewatermarkspro.com/fr/supprimer-texte-image",
                description: "Supprimez le texte, les légendes et les sous-titres des images instantanément avec l'IA. Nettoyez vos photos en quelques secondes."
            })} />
            <TextRemoverClientFr />
        </>
    )
}
