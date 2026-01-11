import type { Metadata } from 'next'
import BackgroundRemoverClientDe from './BackgroundRemoverClientDe'
import StructuredData, { createSoftwareSchema } from '@/components/StructuredData'

export const metadata: Metadata = {
    title: 'Kostenlos Hintergrund Entfernen | Foto Hintergrund Löschen KI',
    description: 'Entfernen Sie Hintergründe aus Fotos sofort mit KI. Löschen Sie Foto-Hintergründe, isolieren Sie Motive und erstellen Sie transparente Bilder in Sekunden.',
    keywords: 'hintergrund entfernen, foto hintergrund löschen, hintergrund löschen, transparenter hintergrund, ki hintergrund entferner, foto hintergrund radierer',
    openGraph: {
        title: 'Kostenlos Hintergrund Entfernen | Foto Hintergrund Löschen KI',
        description: 'Entfernen Sie Hintergründe aus Fotos sofort mit KI.',
        url: 'https://removewatermarkpro.com/de/hintergrund-entfernen',
        siteName: 'Remove Watermark Pro',
        locale: 'de_DE',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Kostenlos Hintergrund Entfernen | Foto Hintergrund Löschen KI',
        description: 'Entfernen Sie Hintergründe aus Fotos sofort mit KI.',
    },
    alternates: {
        canonical: 'https://removewatermarkpro.com/de/hintergrund-entfernen',
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

export default function HintergrundEntfernen() {
    return (
        <>
            <StructuredData data={createSoftwareSchema({
                name: "Hintergrund Entfernen - KI Kostenlos",
                url: "https://removewatermarkpro.com/de/hintergrund-entfernen",
                description: "Entfernen Sie Hintergründe von Fotos sofort mit KI. Erstellen Sie transparente Bilder in Sekunden."
            })} />
            <BackgroundRemoverClientDe />
        </>
    )
}
