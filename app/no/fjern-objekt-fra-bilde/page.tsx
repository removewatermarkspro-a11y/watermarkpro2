import type { Metadata } from 'next'
import ObjectRemoverClientNo from './ObjectRemoverClientNo'

export const metadata: Metadata = {
    title: 'Gratis Fjern Objekt Fra Bilde | Slette Uønskede Objekter AI',
    description: 'Fjern uønskede objekter, personer og elementer fra bilder øyeblikkelig med AI. Slett photobombers, rot og distraksjoner på sekunder.',
    keywords: 'fjern objekt fra bilde, slette objekt fra foto, fjerne uønsket objekt, ai objektfjerning, fjerne photobombers, rense bilde',
    openGraph: {
        title: 'Gratis Fjern Objekt Fra Bilde | Slette Uønskede Objekter AI',
        description: 'Fjern uønskede objekter, personer og elementer fra bilder øyeblikkelig med AI.',
        url: 'https://removewatermarkpro.com/no/fjern-objekt-fra-bilde',
        siteName: 'Remove Watermark Pro',
        locale: 'no_NO',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Gratis Fjern Objekt Fra Bilde | Slette Uønskede Objekter AI',
        description: 'Fjern uønskede objekter fra bilder øyeblikkelig med AI.',
    },
    alternates: {
        canonical: 'https://removewatermarkpro.com/no/fjern-objekt-fra-bilde',
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

export default function FjernObjektFraBilde() {
    return <ObjectRemoverClientNo />
}
