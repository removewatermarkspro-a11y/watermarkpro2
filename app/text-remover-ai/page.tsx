import type { Metadata } from 'next'
import TextRemoverClient from './TextRemoverClient'
import StructuredData, { createSoftwareSchema, createFAQSchema } from '@/components/StructuredData'
import { textRemovalFaqItems } from '@/utils/faqItems'

export const metadata: Metadata = {
    title: 'Text Remover AI Free | Erase Text from Photos Instantly',
    description: 'Erase text, captions & subtitles from images with AI. 100% free tool. Remove watermarks, logos & unwanted text in seconds. Try it now!',
    keywords: 'text remover ai, remove text from image, ai text remover, erase text from photo, delete text from image, remove captions, remove subtitles',
    openGraph: {
        title: 'Free AI Text Remover | Remove Text from Image Instantly',
        description: 'Remove text, captions, and subtitles from images instantly with AI. Clean photos by erasing unwanted text overlays in seconds.',
        url: 'https://removewatermarkpro.co/text-remover-ai',
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
        canonical: 'https://removewatermarkpro.co/text-remover-ai',
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

export default function TextRemoverAI() {
    return (
        <>
            <StructuredData data={createSoftwareSchema({
                name: "AI Text Remover - Free",
                url: "https://removewatermarkpro.co/text-remover-ai",
                description: "Remove text, captions, and subtitles from images instantly with AI. Clean photos by erasing unwanted text overlays in seconds."
            })} />
            <TextRemoverClient />
        </>
    )
}
