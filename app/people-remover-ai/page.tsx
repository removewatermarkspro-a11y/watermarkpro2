import type { Metadata } from 'next'
import PeopleRemoverClient from './PeopleRemoverClient'
<<<<<<< HEAD
import StructuredData, { createSoftwareSchema, createFAQSchema } from '@/components/StructuredData'
import { peopleRemovalFaqItems } from '@/utils/faqItems'
=======
import StructuredData, { createSoftwareSchema } from '@/components/StructuredData'
>>>>>>> feature/qwen-api-integration

export const metadata: Metadata = {
    title: 'People Remover AI Free | Delete People from Photos Fast',
    description: 'Remove people from photos with AI. Delete unwanted people, crowds & tourists in seconds. 100% free tool. Clean up your photos perfectly. Try it free!',
    keywords: 'people remover ai, remove people from photo, delete people, crowd remover, ai people eraser, photo people removal',
    openGraph: {
        title: 'Free AI People Remover | Remove People from Photos Instantly',
        description: 'Remove people from photos instantly with AI. Delete unwanted people, clear crowds, and clean up your images in seconds.',
        url: 'https://removewatermarkpro.com/people-remover-ai',
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
        canonical: 'https://removewatermarkpro.com/people-remover-ai',
        languages: {
            'en': 'https://removewatermarkpro.com/people-remover-ai',
            'fr': 'https://removewatermarkpro.com/fr/effacer-personnes-photo',
            'de': 'https://removewatermarkpro.com/de/personen-entfernen',
            'es': 'https://removewatermarkpro.com/es/eliminar-personas-foto',
            'pt': 'https://removewatermarkpro.com/pt/remover-pessoas-foto',
            'ko': 'https://removewatermarkpro.com/ko/people-remover-ai',
            'no': 'https://removewatermarkpro.com/no/fjern-personer-foto',
        },
    },
}

export default function PeopleRemoverAI() {
    return (
        <>
            <StructuredData data={createSoftwareSchema({
                name: "AI People Remover - Free",
                url: "https://removewatermarkpro.com/people-remover-ai",
                description: "Remove people from photos instantly with AI. Delete unwanted people, clear crowds, and clean up your images in seconds."
            })} />
            <PeopleRemoverClient />
        </>
    )
}
