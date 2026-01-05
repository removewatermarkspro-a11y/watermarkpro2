import type { Metadata } from 'next'
import BackgroundRemoverClientNo from './BackgroundRemoverClientNo'

export const metadata: Metadata = {
    title: 'Gratis Fjern Bakgrunn | Slett Foto Bakgrunn AI',
    description: 'Fjern bakgrunner fra bilder øyeblikkelig med AI. Slett fotobakgrunner, isoler motiver og lag gjennomsiktige bilder på sekunder.',
    keywords: 'fjern bakgrunn, slett foto bakgrunn, fjern bakgrunn, gjennomsiktig bakgrunn, ai bakgrunn fjerner, foto bakgrunn viskelær',
    openGraph: {
        title: 'Gratis Fjern Bakgrunn | Slett Foto Bakgrunn AI',
        description: 'Fjern bakgrunner fra bilder øyeblikkelig med AI.',
        url: 'https://removewatermarkpro.com/no/fjern-bakgrunn',
        siteName: 'Remove Watermark Pro',
        locale: 'no_NO',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Gratis Fjern Bakgrunn | Slett Foto Bakgrunn AI',
        description: 'Fjern bakgrunner fra bilder øyeblikkelig med AI.',
    },
    alternates: {
        canonical: 'https://removewatermarkpro.com/no/fjern-bakgrunn',
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

export default function FjernBakgrunn() {
    return <BackgroundRemoverClientNo />
}
