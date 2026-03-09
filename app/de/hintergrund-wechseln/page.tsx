import type { Metadata } from 'next'
import BackgroundChangerClientDe from './BackgroundChangerClientDe'
import StructuredData, { createSoftwareSchema } from '@/components/StructuredData'

export const metadata: Metadata = {
    title: 'Kostenlos Hintergrund Wechseln | Foto Hintergrund Ändern KI',
    description: 'Wechseln Sie Hintergründe in Fotos sofort mit KI. Ändern Sie Foto-Hintergründe, tauschen Sie Szenen aus und transformieren Sie Bilder in Sekunden.',
    keywords: 'hintergrund wechseln, foto hintergrund ändern, hintergrund ersetzen, hintergrund tauschen, ki hintergrund wechsler, foto hintergrund editor',
    openGraph: {
        title: 'Kostenlos Hintergrund Wechseln | Foto Hintergrund Ändern KI',
        description: 'Wechseln Sie Hintergründe in Fotos sofort mit KI. Ändern Sie Foto-Hintergründe, tauschen Sie Szenen aus und transformieren Sie Bilder in Sekunden.',
        url: 'https://removewatermarkpro.co/de/hintergrund-wechseln',
        siteName: 'Remove Watermark Pro',
        locale: 'de_DE',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Kostenlos Hintergrund Wechseln | Foto Hintergrund Ändern KI',
        description: 'Wechseln Sie Hintergründe in Fotos sofort mit KI.',
    },
    alternates: {
        canonical: 'https://removewatermarkpro.co/de/hintergrund-wechseln',
        languages: {
            'en': 'https://removewatermarkpro.co/background-changer-ai',
            'fr': 'https://removewatermarkpro.co/fr/changer-arriere-plan',
            'de': 'https://removewatermarkpro.co/de/hintergrund-wechseln',
            'es': 'https://removewatermarkpro.co/es/cambiar-fondo-imagen',
            'pt': 'https://removewatermarkpro.co/pt/trocar-fundo-imagem',
            'ko': 'https://removewatermarkpro.co/ko/background-changer-ai',
            'no': 'https://removewatermarkpro.co/no/endre-bakgrunn',
        },
    },
}

export default function HintergrundWechseln() {
    return (
        <>
            <StructuredData data={createSoftwareSchema({
                name: "Hintergrund Wechseln - KI Kostenlos",
                url: "https://removewatermarkpro.co/de/hintergrund-wechseln",
                description: "Wechseln Sie Hintergründe in Fotos sofort mit KI. Ersetzen Sie Fotohintergründe und transformieren Sie Bilder."
            })} />
            <BackgroundChangerClientDe />
        </>
    )
}
