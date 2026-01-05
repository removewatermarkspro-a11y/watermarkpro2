import type { Metadata } from 'next'
import BackgroundChangerClientFr from './BackgroundChangerClientFr'
import StructuredData, { createSoftwareSchema } from '@/components/StructuredData'

export const metadata: Metadata = {
    title: 'Changer Arrière-Plan IA | Remplacer Fond Photo Instantanément',
    description: 'Changez les arrière-plans des photos avec l\'IA en secondes. Remplacez, échangez et transformez les fonds instantanément. Outil 100% gratuit. Résultats parfaits. Essayez !',
    keywords: 'changer arrière-plan, modifier fond photo, remplacer arrière-plan, échanger fond, ia changement fond, éditeur fond photo',
    openGraph: {
        title: 'Changer Arrière-Plan Gratuit | Modifier Fond Photo IA',
        description: 'Changez l\'arrière-plan des photos instantanément avec l\'IA. Remplacez les fonds de photos, échangez les scènes et transformez les images en quelques secondes.',
        url: 'https://removewatermarkpro.com/fr/changer-arriere-plan',
        siteName: 'Remove Watermark Pro',
        locale: 'fr_FR',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Changer Arrière-Plan Gratuit | Modifier Fond Photo IA',
        description: 'Changez l\'arrière-plan des photos instantanément avec l\'IA.',
    },
    alternates: {
        canonical: 'https://removewatermarkpro.com/fr/changer-arriere-plan',
        languages: {
            'en': 'https://removewatermarkpro.com/background-changer-ai',
            'fr': 'https://removewatermarkpro.com/fr/changer-arriere-plan',
            'de': 'https://removewatermarkpro.com/de/hintergrund-wechseln',
            'es': 'https://removewatermarkpro.com/es/cambiar-fondo-imagen',
            'pt': 'https://removewatermarkpro.com/pt/trocar-fundo-imagem',
            'ko': 'https://removewatermarkpro.com/ko/background-changer-ai',
            'no': 'https://removewatermarkpro.com/no/endre-bakgrunn',
        },
    },
}

export default function ChangerArrierePlan() {
    return (
        <>
            <StructuredData data={createSoftwareSchema({
                name: "Changer Arrière-Plan - IA Gratuit",
                url: "https://removewatermarkpro.com/fr/changer-arriere-plan",
                description: "Changez l'arrière-plan des photos instantanément avec l'IA. Remplacez les fonds et transformez vos images."
            })} />
            <BackgroundChangerClientFr />
        </>
    )
}
