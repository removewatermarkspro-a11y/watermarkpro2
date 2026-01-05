import type { Metadata } from 'next'
import PeopleRemoverClientEs from './PeopleRemoverClientEs'
import StructuredData, { createSoftwareSchema } from '@/components/StructuredData'

export const metadata: Metadata = {
    title: 'Eliminar Personas Foto Gratis | Borrar Personas IA',
    description: 'Elimina personas de fotos al instante con IA. Borra personas no deseadas, limpia multitudes y mejora tus imágenes en segundos.',
    keywords: 'eliminar personas foto, borrar personas, eliminar multitud, ia borrador personas, quitar personas foto',
    openGraph: {
        title: 'Eliminar Personas Foto Gratis | Borrar Personas IA',
        description: 'Elimina personas de fotos al instante con IA.',
        url: 'https://removewatermarkpro.com/es/eliminar-personas-foto',
        siteName: 'Remove Watermark Pro',
        locale: 'es_ES',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Eliminar Personas Foto Gratis | Borrar Personas IA',
        description: 'Elimina personas de fotos al instante con IA.',
    },
    alternates: {
        canonical: 'https://removewatermarkpro.com/es/eliminar-personas-foto',
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

export default function EliminarPersonasFoto() {
    return (
        <>
            <StructuredData data={createSoftwareSchema({
                name: "Eliminar Personas de Foto - IA Gratis",
                url: "https://removewatermarkpro.com/es/eliminar-personas-foto",
                description: "Elimina personas de fotos al instante con IA. Borra personas no deseadas en segundos."
            })} />
            <PeopleRemoverClientEs />
        </>
    )
}
