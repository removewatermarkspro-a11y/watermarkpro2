import type { Metadata } from 'next'
import BackgroundChangerClientPt from './BackgroundChangerClientPt'
import StructuredData, { createSoftwareSchema } from '@/components/StructuredData'

export const metadata: Metadata = {
    title: 'Trocar Fundo Imagem Grátis | Mudar Fundo Foto IA',
    description: 'Troque fundos de fotos instantaneamente com IA. Substitua fundos de fotos, troque cenas e transforme imagens em segundos.',
    keywords: 'trocar fundo imagem, mudar fundo foto, substituir fundo, trocar fundo, ia troca fundo, editor fundo foto',
    openGraph: {
        title: 'Trocar Fundo Imagem Grátis | Mudar Fundo Foto IA',
        description: 'Troque fundos de fotos instantaneamente com IA. Substitua fundos de fotos, troque cenas e transforme imagens em segundos.',
        url: 'https://removewatermarkpro.co/pt/trocar-fundo-imagem',
        siteName: 'Remove Watermark Pro',
        locale: 'pt_PT',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Trocar Fundo Imagem Grátis | Mudar Fundo Foto IA',
        description: 'Troque fundos de fotos instantaneamente com IA.',
    },
    alternates: {
        canonical: 'https://removewatermarkpro.co/pt/trocar-fundo-imagem',
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

export default function TrocarFundoImagem() {
    return (
        <>
            <StructuredData data={createSoftwareSchema({
                name: "Trocar Fundo de Imagem - IA Grátis",
                url: "https://removewatermarkpro.co/pt/trocar-fundo-imagem",
                description: "Troque fundos em fotos instantaneamente com IA. Substitua fundos de fotos e transforme imagens."
            })} />
            <BackgroundChangerClientPt />
        </>
    )
}
