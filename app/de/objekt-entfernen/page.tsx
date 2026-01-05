import type { Metadata } from 'next'
import ObjectRemoverClientDe from './ObjectRemoverClientDe'
import StructuredData, { createSoftwareSchema } from '@/components/StructuredData'

export const metadata: Metadata = {
    title: 'Kostenlos Objekt Entfernen | Unerwünschte Objekte Löschen KI',
    description: 'Entfernen Sie unerwünschte Objekte, Personen und Elemente sofort aus Fotos mit KI. Löschen Sie Photobomber, Unordnung und Ablenkungen in Sekunden.',
    keywords: 'objekt entfernen, objekt aus foto entfernen, unerwünschte objekte löschen, ki objektentfernung, photobomber entfernen, foto bereinigen',
    openGraph: {
        title: 'Kostenlos Objekt Entfernen | Unerwünschte Objekte Löschen KI',
        description: 'Entfernen Sie unerwünschte Objekte, Personen und Elemente sofort aus Fotos mit KI.',
        url: 'https://removewatermarkpro.com/de/objekt-entfernen',
        siteName: 'Remove Watermark Pro',
        locale: 'de_DE',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Kostenlos Objekt Entfernen | Unerwünschte Objekte Löschen KI',
        description: 'Entfernen Sie unerwünschte Objekte aus Fotos sofort mit KI.',
    },
    alternates: {
        canonical: 'https://removewatermarkpro.com/de/objekt-entfernen',
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

export default function ObjektEntfernen() {
    return (
        <>
            <StructuredData data={createSoftwareSchema({
                name: "Objekt Entfernen - KI Kostenlos",
                url: "https://removewatermarkpro.com/de/objekt-entfernen",
                description: "Entfernen Sie unerwünschte Objekte, Personen und Elemente sofort von Fotos mit KI. Löschen Sie Störungen in Sekunden."
            })} />
            <ObjectRemoverClientDe />
        </>
    )
}
