import type { Metadata } from 'next'
import TextRemoverClientDe from './TextRemoverClientDe'
import StructuredData, { createSoftwareSchema } from '@/components/StructuredData'

export const metadata: Metadata = {
    title: 'Kostenlos Text Entfernen | KI Text Entferner Tool',
    description: 'Entfernen Sie Text, Bildunterschriften und Untertitel sofort aus Bildern mit KI. Bereinigen Sie Fotos, indem Sie unerwünschte Textüberlagerungen in Sekunden löschen.',
    keywords: 'text entfernen, text aus bild entfernen, ki text entferner, text löschen, bildunterschriften entfernen, untertitel entfernen',
    openGraph: {
        title: 'Kostenlos Text Entfernen | KI Text Entferner Tool',
        description: 'Entfernen Sie Text, Bildunterschriften und Untertitel sofort aus Bildern mit KI. Bereinigen Sie Fotos, indem Sie unerwünschte Textüberlagerungen in Sekunden löschen.',
        url: 'https://removewatermarkpro.com/de/text-entfernen',
        siteName: 'Remove Watermark Pro',
        locale: 'de_DE',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Kostenlos Text Entfernen | KI Text Entferner Tool',
        description: 'Entfernen Sie Text, Bildunterschriften und Untertitel sofort aus Bildern mit KI.',
    },
    alternates: {
        canonical: 'https://removewatermarkpro.com/de/text-entfernen',
        languages: {
            'en': 'https://removewatermarkpro.com/text-remover-ai',
            'fr': 'https://removewatermarkpro.com/fr/supprimer-texte-image',
            'de': 'https://removewatermarkpro.com/de/text-entfernen',
            'es': 'https://removewatermarkpro.com/es/eliminar-texto-imagen',
            'pt': 'https://removewatermarkpro.com/pt/remover-texto-imagem',
            'ko': 'https://removewatermarkpro.com/ko/text-remover-ai',
            'no': 'https://removewatermarkpro.com/no/fjern-tekst-fra-bilde',
        },
    },
}

export default function TextEntfernen() {
    return (
        <>
            <StructuredData data={createSoftwareSchema({
                name: "Text Entfernen - KI Kostenlos",
                url: "https://removewatermarkpro.com/de/text-entfernen",
                description: "Entfernen Sie Text, Untertitel und Beschriftungen sofort von Bildern mit KI. Bereinigen Sie Fotos in Sekunden."
            })} />
            <TextRemoverClientDe />
        </>
    )
}
