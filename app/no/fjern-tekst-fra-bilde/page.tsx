import type { Metadata } from 'next'
import TextRemoverClientNo from './TextRemoverClientNo'

export const metadata: Metadata = {
    title: 'Gratis Fjern Tekst Fra Bilde | AI Tekst Fjerner',
    description: 'Fjern tekst, undertekster og bildetekster fra bilder øyeblikkelig med AI. Rens bilder ved å slette uønskede tekstoverlegg på sekunder.',
    keywords: 'fjern tekst fra bilde, tekst fjerner ai, slette tekst fra bilde, ai tekst fjerning, fjerne undertekster, fjerne bildetekster',
    openGraph: {
        title: 'Gratis Fjern Tekst Fra Bilde | AI Tekst Fjerner',
        description: 'Fjern tekst, undertekster og bildetekster fra bilder øyeblikkelig med AI.',
        url: 'https://removewatermarkpro.co/no/fjern-tekst-fra-bilde',
        siteName: 'Remove Watermark Pro',
        locale: 'no_NO',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Gratis Fjern Tekst Fra Bilde | AI Tekst Fjerner',
        description: 'Fjern tekst fra bilder øyeblikkelig med AI.',
    },
    alternates: {
        canonical: 'https://removewatermarkpro.co/no/fjern-tekst-fra-bilde',
        languages: {
            'en': 'https://removewatermarkpro.co/text-remover-ai',
            'fr': 'https://removewatermarkpro.co/fr/supprimer-texte-image',
            'de': 'https://removewatermarkpro.co/de/text-entfernen',
            'es': 'https://removewatermarkpro.co/es/eliminar-texto-imagen',
            'pt': 'https://removewatermarkpro.co/pt/remover-texto-imagem',
            'ko': 'https://removewatermarkpro.co/ko/text-remover-ai',
            'no': 'https://removewatermarkpro.co/no/fjern-tekst-fra-bilde',
        },
    },
}

export default function FjernTekstFraBilde() {
    return <TextRemoverClientNo />
}
