import type { Metadata } from 'next'
import ObjectRemoverClient from './ObjectRemoverClient'
import StructuredData, { createSoftwareSchema, createFAQSchema } from '@/components/StructuredData'
import { objectRemovalFaqItems } from '@/utils/faqItems'

export const metadata: Metadata = {
    title: 'Free AI Object Remover',
    description: 'Delete unwanted objects, people & elements from photos with AI. 100% free tool. Remove photobombers, clutter & distractions. Try it today!',
    keywords: 'object remover ai, remove object from photo, erase unwanted objects, delete objects from image, ai object removal, remove photobombers',
    openGraph: {
        title: 'Free AI Object Remover | Remove Unwanted Objects from Photos',
        description: 'Remove unwanted objects, people, and elements from photos instantly with AI. Erase photobombers, clutter, and distractions in seconds.',
        url: 'https://removewatermarkpro.co/object-remover-ai',
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
        canonical: 'https://removewatermarkpro.co/object-remover-ai',
        languages: {
            'en': 'https://removewatermarkpro.co/object-remover-ai',
            'fr': 'https://removewatermarkpro.co/fr/supprimer-objet-image',
            'de': 'https://removewatermarkpro.co/de/objekt-entfernen',
            'es': 'https://removewatermarkpro.co/es/eliminar-objeto-imagen',
            'pt': 'https://removewatermarkpro.co/pt/remover-objeto-imagem',
            'ko': 'https://removewatermarkpro.co/ko/object-remover-ai',
            'no': 'https://removewatermarkpro.co/no/fjern-objekt-fra-bilde',
        },
    },
}

export default function ObjectRemoverAI() {
    return (
        <>
            <StructuredData data={createSoftwareSchema({
                name: "AI Object Remover - Free",
                url: "https://removewatermarkpro.co/object-remover-ai",
                description: "Remove unwanted objects, people, and elements from photos instantly with AI. Erase photobombers, clutter, and distractions in seconds."
            })} />
            <ObjectRemoverClient />
        </>
    )
}
