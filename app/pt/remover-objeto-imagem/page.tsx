import type { Metadata } from 'next'
import ObjectRemoverClientPt from './ObjectRemoverClientPt'
import StructuredData, { createSoftwareSchema } from '@/components/StructuredData'

export const metadata: Metadata = {
    title: 'Remover Objeto Imagem Grátis | Apagar Objetos Indesejados IA',
    description: 'Remova objetos indesejados, pessoas e elementos de fotos instantaneamente com IA. Apague photobombers, desordem e distrações em segundos.',
    keywords: 'remover objeto imagem, apagar objeto foto, tirar objeto indesejado, ia remoção objeto, remover photobombers, limpar foto',
    openGraph: {
        title: 'Remover Objeto Imagem Grátis | Apagar Objetos Indesejados IA',
        description: 'Remova objetos indesejados, pessoas e elementos de fotos instantaneamente com IA.',
        url: 'https://removewatermarkpro.co/pt/remover-objeto-imagem',
        siteName: 'Remove Watermark Pro',
        locale: 'pt_PT',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Remover Objeto Imagem Grátis | Apagar Objetos Indesejados IA',
        description: 'Remova objetos indesejados de fotos instantaneamente com IA.',
    },
    alternates: {
        canonical: 'https://removewatermarkpro.co/pt/remover-objeto-imagem',
        languages: {
            'en': 'https://removewatermarkpro.co/object-remover-ai',
            'fr': 'https://removewatermarkpro.co/fr/supprimer-objet-image',
            'de': 'https://removewatermarkpro.co/de/objekt-entfernen',
            'es': 'https://removewatermarkpro.co/es/eliminar-objeto-imagen',
            'pt': 'https://removewatermarkpro.co/pt/remover-objeto-imagem',
            'ko': 'https://removewatermarkpro.co/ko/object-remover-ai',
            'no': 'https://removewatermarkpro.co/no/fjern-objekt-fra-bilde',
        },
    },
}

export default function RemoverObjetoImagem() {
    return (
        <>
            <StructuredData data={createSoftwareSchema({
                name: "Remover Objeto de Imagem - IA Grátis",
                url: "https://removewatermarkpro.co/pt/remover-objeto-imagem",
                description: "Remova objetos indesejados, pessoas e elementos de fotos instantaneamente com IA. Apague distrações em segundos."
            })} />
            <ObjectRemoverClientPt />
        </>
    )
}
