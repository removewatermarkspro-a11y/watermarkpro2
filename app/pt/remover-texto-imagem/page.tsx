import type { Metadata } from 'next'
import TextRemoverClientPt from './TextRemoverClientPt'
import StructuredData, { createSoftwareSchema } from '@/components/StructuredData'

export const metadata: Metadata = {
    title: 'Remover Texto Imagem Grátis | Apagar Texto Foto IA',
    description: 'Remova texto, legendas e subtítulos de imagens instantaneamente com IA. Limpe fotos apagando sobreposições de texto indesejadas em segundos.',
    keywords: 'remover texto imagem, apagar texto foto, tirar texto imagem, ia remoção texto, remover legendas, apagar subtítulos',
    openGraph: {
        title: 'Remover Texto Imagem Grátis | Apagar Texto Foto IA',
        description: 'Remova texto, legendas e subtítulos de imagens instantaneamente com IA.',
        url: 'https://removewatermarkpro.com/pt/remover-texto-imagem',
        siteName: 'Remove Watermark Pro',
        locale: 'pt_PT',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Remover Texto Imagem Grátis | Apagar Texto Foto IA',
        description: 'Remova texto, legendas e subtítulos de imagens instantaneamente com IA.',
    },
    alternates: {
        canonical: 'https://removewatermarkpro.com/pt/remover-texto-imagem',
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

export default function RemoverTextoImagem() {
    return (
        <>
            <StructuredData data={createSoftwareSchema({
                name: "Remover Texto de Imagem - IA Grátis",
                url: "https://removewatermarkpro.com/pt/remover-texto-imagem",
                description: "Remova texto, legendas e subtítulos de imagens instantaneamente com IA. Limpe fotos em segundos."
            })} />
            <TextRemoverClientPt />
        </>
    )
}
