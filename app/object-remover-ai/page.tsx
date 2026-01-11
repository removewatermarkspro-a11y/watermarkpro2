import type { Metadata } from 'next'
import ObjectRemoverClient from './ObjectRemoverClient'
import StructuredData, { createSoftwareSchema } from '@/components/StructuredData'

export const metadata: Metadata = {
    title: 'Object Remover AI Free | Delete Unwanted Objects Fast',
    description: 'Delete unwanted objects, people & elements from photos with AI. 100% free tool. Remove photobombers, clutter & distractions. Try it today!',
    keywords: 'object remover ai, remove object from photo, erase unwanted objects, delete objects from image, ai object removal, remove photobombers',
    openGraph: {
        title: 'Free AI Object Remover | Remove Unwanted Objects from Photos',
        description: 'Remove unwanted objects, people, and elements from photos instantly with AI. Erase photobombers, clutter, and distractions in seconds.',
        url: 'https://removewatermarkpro.com/object-remover-ai',
        siteName: 'Remove Watermark Pro',
        locale: 'en_US',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Free AI Object Remover | Remove Unwanted Objects from Photos',
        description: 'Remove unwanted objects from photos instantly with AI.',
    },
    alternates: {
        canonical: 'https://removewatermarkpro.com/object-remover-ai',
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

export default function ObjectRemoverAI() {
    return (
        <>
            <StructuredData data={createSoftwareSchema({
                name: "AI Object Remover - Free",
                url: "https://removewatermarkpro.com/object-remover-ai",
                description: "Remove unwanted objects, people, and elements from photos instantly with AI. Erase photobombers, clutter, and distractions in seconds."
            })} />
            <ObjectRemoverClient />
        </>
    )
}
