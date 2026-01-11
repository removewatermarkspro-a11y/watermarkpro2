import type { Metadata } from 'next'
import PeopleRemoverClientPt from './PeopleRemoverClientPt'
import StructuredData, { createSoftwareSchema } from '@/components/StructuredData'

export const metadata: Metadata = {
    title: 'Remover Pessoas Foto Grátis | Apagar Pessoas IA',
    description: 'Remova pessoas de fotos instantaneamente com IA. Apague pessoas indesejadas, limpe multidões e melhore suas imagens em segundos.',
    keywords: 'remover pessoas foto, apagar pessoas, remover multidão, ia apagador pessoas, tirar pessoas foto',
    openGraph: {
        title: 'Remover Pessoas Foto Grátis | Apagar Pessoas IA',
        description: 'Remova pessoas de fotos instantaneamente com IA.',
        url: 'https://removewatermarkpro.com/pt/remover-pessoas-foto',
        siteName: 'Remove Watermark Pro',
        locale: 'pt_PT',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Remover Pessoas Foto Grátis | Apagar Pessoas IA',
        description: 'Remova pessoas de fotos instantaneamente com IA.',
    },
    alternates: {
        canonical: 'https://removewatermarkpro.com/pt/remover-pessoas-foto',
        languages: {
            'en': 'https://removewatermarkpro.com/people-remover-ai',
            'fr': 'https://removewatermarkpro.com/fr/effacer-personnes-photo',
            'de': 'https://removewatermarkpro.com/de/personen-entfernen',
            'es': 'https://removewatermarkpro.com/es/eliminar-personas-foto',
            'pt': 'https://removewatermarkpro.com/pt/remover-pessoas-foto',
            'ko': 'https://removewatermarkpro.com/ko/people-remover-ai',
            'no': 'https://removewatermarkpro.com/no/fjern-personer-foto',
        },
    },
}

export default function RemoverPessoasFoto() {
    return (
        <>
            <StructuredData data={createSoftwareSchema({
                name: "Remover Pessoas de Foto - IA Grátis",
                url: "https://removewatermarkpro.com/pt/remover-pessoas-foto",
                description: "Remova pessoas de fotos instantaneamente com IA. Apague pessoas indesejadas em segundos."
            })} />
            <PeopleRemoverClientPt />
        </>
    )
}
