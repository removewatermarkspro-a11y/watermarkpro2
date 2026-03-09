import type { Metadata } from 'next'
import PeopleRemoverClient from './PeopleRemoverClient'
import StructuredData, { createSoftwareSchema, createFAQSchema } from '@/components/StructuredData'
import { peopleRemovalFaqItems } from '@/utils/faqItems'

export const metadata: Metadata = {
    title: 'Free AI People Eraser',
    description: 'Remove people from photos with AI. Delete unwanted people, crowds & tourists in seconds. 100% free tool. Clean up your photos perfectly. Try it free!',
    keywords: 'people remover ai, remove people from photo, delete people, crowd remover, ai people eraser, photo people removal',
    openGraph: {
        title: 'Free AI People Remover | Remove People from Photos Instantly',
        description: 'Remove people from photos instantly with AI. Delete unwanted people, clear crowds, and clean up your images in seconds.',
        url: 'https://removewatermarkpro.co/people-remover-ai',
        siteName: 'Remove Watermark Pro',
        locale: 'en_US',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Free AI People Remover | Remove People from Photos Instantly',
        description: 'Remove people from photos instantly with AI.',
    },
    alternates: {
        canonical: 'https://removewatermarkpro.co/people-remover-ai',
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

export default function PeopleRemoverAI() {
    return (
        <>
            <StructuredData data={createSoftwareSchema({
                name: "AI People Remover - Free",
                url: "https://removewatermarkpro.co/people-remover-ai",
                description: "Remove people from photos instantly with AI. Delete unwanted people, clear crowds, and clean up your images in seconds."
            })} />
            <PeopleRemoverClient />
        </>
    )
}
