import type { Metadata } from 'next'
import ObjectRemoverClientEs from './ObjectRemoverClientEs'
import StructuredData, { createSoftwareSchema } from '@/components/StructuredData'

export const metadata: Metadata = {
    title: 'Eliminar Objeto Imagen Gratis | Borrar Objetos No Deseados IA',
    description: 'Elimina objetos no deseados, personas y elementos de fotos al instante con IA. Borra photobombers, desorden y distracciones en segundos.',
    keywords: 'eliminar objeto imagen, borrar objeto foto, quitar objeto no deseado, ia eliminación objeto, remover photobombers, limpiar foto',
    openGraph: {
        title: 'Eliminar Objeto Imagen Gratis | Borrar Objetos No Deseados IA',
        description: 'Elimina objetos no deseados, personas y elementos de fotos al instante con IA.',
        url: 'https://removewatermarkpro.com/es/eliminar-objeto-imagen',
        siteName: 'Remove Watermark Pro',
        locale: 'es_ES',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Eliminar Objeto Imagen Gratis | Borrar Objetos No Deseados IA',
        description: 'Elimina objetos no deseados de fotos al instante con IA.',
    },
    alternates: {
        canonical: 'https://removewatermarkpro.com/es/eliminar-objeto-imagen',
        languages: {
            'en': 'https://removewatermarkpro.com/object-remover-ai',
            'fr': 'https://removewatermarkpro.com/fr/supprimer-objet-image',
            'de': 'https://removewatermarkpro.com/de/objekt-entfernen',
            'es': 'https://removewatermarkpro.com/es/eliminar-objeto-imagen',
            'pt': 'https://removewatermarkpro.com/pt/remover-objeto-imagem',
            'ko': 'https://removewatermarkpro.com/ko/object-remover-ai',
            'no': 'https://removewatermarkpro.com/no/fjern-objekt-fra-bilde',
        },
    },
}

export default function EliminarObjetoImagen() {
    return (
        <>
            <StructuredData data={createSoftwareSchema({
                name: "Eliminar Objeto de Imagen - IA Gratis",
                url: "https://removewatermarkpro.com/es/eliminar-objeto-imagen",
                description: "Elimina objetos no deseados, personas y elementos de fotos al instante con IA. Borra distracciones en segundos."
            })} />
            <ObjectRemoverClientEs />
        </>
    )
}
