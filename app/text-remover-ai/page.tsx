import type { Metadata } from 'next'
import TextRemoverClient from './TextRemoverClient'
import StructuredData, { createSoftwareSchema } from '@/components/StructuredData'

export const metadata: Metadata = {
    title: 'Text Remover AI Free | Erase Text from Photos Instantly',
    description: 'Erase text, captions & subtitles from images with AI. 100% free tool. Remove watermarks, logos & unwanted text in seconds. Try it now!',
    keywords: 'text remover ai, remove text from image, ai text remover, erase text from photo, delete text from image, remove captions, remove subtitles',
    openGraph: {
        title: 'Free AI Text Remover | Remove Text from Image Instantly',
        description: 'Remove text, captions, and subtitles from images instantly with AI. Clean photos by erasing unwanted text overlays in seconds.',
        url: 'https://removewatermarkpro.com/text-remover-ai',
        siteName: 'Remove Watermark Pro',
        locale: 'en_US',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Free AI Text Remover | Remove Text from Image Instantly',
        description: 'Remove text, captions, and subtitles from images instantly with AI.',
    },
    alternates: {
        canonical: 'https://removewatermarkpro.com/text-remover-ai',
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

export default function TextRemoverAI() {
    return (
        <>
            <StructuredData data={createSoftwareSchema({
                name: "AI Text Remover - Free",
                url: "https://removewatermarkpro.com/text-remover-ai",
                description: "Remove text, captions, and subtitles from images instantly with AI. Clean photos by erasing unwanted text overlays in seconds."
            })} />
            <TextRemoverClient />
        </>
    )
}
