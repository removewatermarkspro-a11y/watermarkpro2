import type { Metadata } from 'next'
import BackgroundRemoverClientPt from './BackgroundRemoverClientPt'
import StructuredData, { createSoftwareSchema } from '@/components/StructuredData'

export const metadata: Metadata = {
    title: 'Remover Fundo Imagem Grátis | Apagar Fundo Foto IA',
    description: 'Remova fundos de fotos instantaneamente com IA. Apague fundos de fotos, isole sujeitos e crie imagens transparentes em segundos.',
    keywords: 'remover fundo imagem, apagar fundo foto, remover fundo, fundo transparente, ia removedor fundo, borracha fundo foto',
    openGraph: {
        title: 'Remover Fundo Imagem Grátis | Apagar Fundo Foto IA',
        description: 'Remova fundos de fotos instantaneamente com IA.',
        url: 'https://removewatermarkpro.co/pt/remover-fundo-imagem',
        siteName: 'Remove Watermark Pro',
        locale: 'pt_PT',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Remover Fundo Imagem Grátis | Apagar Fundo Foto IA',
        description: 'Remova fundos de fotos instantaneamente com IA.',
    },
    alternates: {
        canonical: 'https://removewatermarkpro.co/pt/remover-fundo-imagem',
        languages: {
            'en': 'https://removewatermarkpro.co/background-remover',
            'fr': 'https://removewatermarkpro.co/fr/supprimer-arriere-plan',
            'de': 'https://removewatermarkpro.co/de/hintergrund-entfernen',
            'es': 'https://removewatermarkpro.co/es/eliminar-fondo-imagen',
            'pt': 'https://removewatermarkpro.co/pt/remover-fundo-imagem',
            'ko': 'https://removewatermarkpro.co/ko/background-remover',
            'no': 'https://removewatermarkpro.co/no/fjern-bakgrunn',
        },
    },
}

export default function RemoverFundoImagem() {
    return (
        <>
            <StructuredData data={createSoftwareSchema({
                name: "Remover Fundo de Imagem - IA Grátis",
                url: "https://removewatermarkpro.co/pt/remover-fundo-imagem",
                description: "Remova fundos de fotos instantaneamente com IA. Crie imagens transparentes em segundos."
            })} />
            <BackgroundRemoverClientPt />
        </>
    )
}
