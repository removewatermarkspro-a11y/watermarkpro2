import type { Metadata } from 'next'
import RemoveTextClient from './RemoveTextClient'

export const metadata: Metadata = {
    title: 'Free Remove Text from Image | AI Text Remover Tool',
    description: 'Remove text, captions, and subtitles from images instantly with AI. Clean photos by erasing unwanted text overlays in seconds. Free AI-powered text removal tool.',
    keywords: 'remove text from image, text remover, erase text from photo, delete text from image, ai text removal, remove captions, remove subtitles',
    openGraph: {
        title: 'Free Remove Text from Image | AI Text Remover Tool',
        description: 'Remove text, captions, and subtitles from images instantly with AI. Clean photos by erasing unwanted text overlays in seconds.',
        url: 'https://removewatermarkpro.com/remove-text-from-image',
        siteName: 'Remove Watermark Pro',
        locale: 'en_US',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Free Remove Text from Image | AI Text Remover Tool',
        description: 'Remove text, captions, and subtitles from images instantly with AI.',
    },
    alternates: {
        canonical: 'https://removewatermarkpro.com/remove-text-from-image',
        languages: {
            'en': 'https://removewatermarkpro.com/remove-text-from-image',
            'fr': 'https://removewatermarkpro.com/fr/supprimer-texte-image',
            'de': 'https://removewatermarkpro.com/de/text-entfernen',
            'es': 'https://removewatermarkpro.com/es/eliminar-texto-imagen',
            'pt': 'https://removewatermarkpro.com/pt/remover-texto-imagem',
            'ko': 'https://removewatermarkpro.com/ko/remove-text-from-image',
            'no': 'https://removewatermarkpro.com/no/fjern-tekst-fra-bilde',
        },
    },
}

export default function RemoveTextFromImage() {
    return <RemoveTextClient />
}
