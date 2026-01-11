import type { Metadata } from 'next'
import PeopleRemoverClientNo from './PeopleRemoverClientNo'

export const metadata: Metadata = {
    title: 'Gratis Fjern Personer Foto | Slett Personer AI',
    description: 'Fjern personer fra bilder øyeblikkelig med AI. Slett uønskede personer, rens folkemengder og forbedre bildene dine på sekunder.',
    keywords: 'fjern personer foto, slett personer, fjern folkemengde, ai personer viskelær, fjerne personer fra bilde',
    openGraph: {
        title: 'Gratis Fjern Personer Foto | Slett Personer AI',
        description: 'Fjern personer fra bilder øyeblikkelig med AI.',
        url: 'https://removewatermarkpro.com/no/fjern-personer-foto',
        siteName: 'Remove Watermark Pro',
        locale: 'no_NO',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Gratis Fjern Personer Foto | Slett Personer AI',
        description: 'Fjern personer fra bilder øyeblikkelig med AI.',
    },
    alternates: {
        canonical: 'https://removewatermarkpro.com/no/fjern-personer-foto',
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

export default function FjernPersonerFoto() {
    return <PeopleRemoverClientNo />
}
