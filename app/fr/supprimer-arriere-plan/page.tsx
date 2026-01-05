import type { Metadata } from 'next'
import BackgroundRemoverClientFr from './BackgroundRemoverClientFr'
import StructuredData, { createSoftwareSchema } from '@/components/StructuredData'

export const metadata: Metadata = {
    title: 'Supprimer Arrière-Plan IA | Effacer Fond Photo en 1 Clic',
    description: 'Supprimez les arrière-plans des photos instantanément avec l\'IA. Créez des PNG transparents en 1 clic. Outil 100% gratuit. Parfait pour produits, portraits et logos !',
    keywords: 'supprimer arrière-plan, effacer fond photo, supprimer fond, arrière-plan transparent, ia suppression fond, gomme fond photo',
    openGraph: {
        title: 'Supprimer Arrière-Plan Gratuit | Effacer Fond Photo IA',
        description: 'Supprimez l\'arrière-plan des photos instantanément avec l\'IA.',
        url: 'https://removewatermarkpro.com/fr/supprimer-arriere-plan',
        siteName: 'Remove Watermark Pro',
        locale: 'fr_FR',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Supprimer Arrière-Plan Gratuit | Effacer Fond Photo IA',
        description: 'Supprimez l\'arrière-plan des photos instantanément avec l\'IA.',
    },
    alternates: {
        canonical: 'https://removewatermarkpro.com/fr/supprimer-arriere-plan',
        languages: {
            'en': 'https://removewatermarkpro.com/background-remover',
            'fr': 'https://removewatermarkpro.com/fr/supprimer-arriere-plan',
            'de': 'https://removewatermarkpro.com/de/hintergrund-entfernen',
            'es': 'https://removewatermarkpro.com/es/eliminar-fondo-imagen',
            'pt': 'https://removewatermarkpro.com/pt/remover-fundo-imagem',
            'ko': 'https://removewatermarkpro.com/ko/background-remover',
            'no': 'https://removewatermarkpro.com/no/fjern-bakgrunn',
        },
    },
}

export default function SupprimerArrierePlan() {
    return (
        <>
            <StructuredData data={createSoftwareSchema({
                name: "Supprimer Arrière-Plan - IA Gratuit",
                url: "https://removewatermarkpro.com/fr/supprimer-arriere-plan",
                description: "Supprimez l'arrière-plan des photos instantanément avec l'IA. Créez des images transparentes en quelques secondes."
            })} />
            <BackgroundRemoverClientFr />
        </>
    )
}
