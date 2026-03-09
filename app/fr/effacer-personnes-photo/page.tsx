import type { Metadata } from 'next'
import PeopleRemoverClientFr from './PeopleRemoverClientFr'
import StructuredData, { createSoftwareSchema } from '@/components/StructuredData'

export const metadata: Metadata = {
    title: 'Effacer Personnes Photo Gratuit | Supprimer Personnes Rapide',
    description: 'Supprimez les personnes des photos avec l\'IA. Effacez personnes indésirables, foules et touristes en secondes. Outil 100% gratuit. Nettoyez vos photos parfaitement. Essayez !',
    keywords: 'effacer personnes photo, supprimer personnes, effacer foule, ia effaceur personnes, enlever personnes photo',
    openGraph: {
        title: 'Effacer Personnes Photo Gratuit | Supprimer Personnes IA',
        description: 'Effacez les personnes des photos instantanément avec l\'IA.',
        url: 'https://removewatermarkpro.co/fr/effacer-personnes-photo',
        siteName: 'Remove Watermark Pro',
        locale: 'fr_FR',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Effacer Personnes Photo Gratuit | Supprimer Personnes IA',
        description: 'Effacez les personnes des photos instantanément avec l\'IA.',
    },
    alternates: {
        canonical: 'https://removewatermarkpro.co/fr/effacer-personnes-photo',
        languages: {
            'en': 'https://removewatermarkpro.co/people-remover-ai',
            'fr': 'https://removewatermarkpro.co/fr/effacer-personnes-photo',
            'de': 'https://removewatermarkpro.co/de/personen-entfernen',
            'es': 'https://removewatermarkpro.co/es/eliminar-personas-foto',
            'pt': 'https://removewatermarkpro.co/pt/remover-pessoas-foto',
            'ko': 'https://removewatermarkpro.co/ko/people-remover-ai',
            'no': 'https://removewatermarkpro.co/no/fjern-personer-foto',
        },
    },
}

export default function EffacerPersonnesPhoto() {
    return (
        <>
            <StructuredData data={createSoftwareSchema({
                name: "Effacer Personnes Photo - IA Gratuit",
                url: "https://removewatermarkpro.co/fr/effacer-personnes-photo",
                description: "Effacez les personnes des photos instantanément avec l'IA. Supprimez les personnes indésirables en quelques secondes."
            })} />
            <PeopleRemoverClientFr />
        </>
    )
}
