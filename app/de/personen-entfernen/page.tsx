import type { Metadata } from 'next'
import PeopleRemoverClientDe from './PeopleRemoverClientDe'
import StructuredData, { createSoftwareSchema } from '@/components/StructuredData'

export const metadata: Metadata = {
    title: 'Kostenlos Personen Entfernen | Menschen Löschen KI',
    description: 'Entfernen Sie Personen aus Fotos sofort mit KI. Löschen Sie unerwünschte Personen, beseitigen Sie Menschenmengen und bereinigen Sie Ihre Bilder in Sekunden.',
    keywords: 'personen entfernen, menschen löschen, personen aus foto entfernen, menschenmenge entfernen, ki personen radierer',
    openGraph: {
        title: 'Kostenlos Personen Entfernen | Menschen Löschen KI',
        description: 'Entfernen Sie Personen aus Fotos sofort mit KI.',
        url: 'https://removewatermarkpro.com/de/personen-entfernen',
        siteName: 'Remove Watermark Pro',
        locale: 'de_DE',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Kostenlos Personen Entfernen | Menschen Löschen KI',
        description: 'Entfernen Sie Personen aus Fotos sofort mit KI.',
    },
    alternates: {
        canonical: 'https://removewatermarkpro.com/de/personen-entfernen',
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

export default function PersonenEntfernen() {
    return (
        <>
            <StructuredData data={createSoftwareSchema({
                name: "Personen Entfernen - KI Kostenlos",
                url: "https://removewatermarkpro.com/de/personen-entfernen",
                description: "Entfernen Sie Personen sofort von Fotos mit KI. Löschen Sie unerwünschte Personen in Sekunden."
            })} />
            <PeopleRemoverClientDe />
        </>
    )
}
