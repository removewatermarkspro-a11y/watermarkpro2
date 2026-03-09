import type { Metadata } from 'next'
import TextRemoverClientEs from './TextRemoverClientEs'
import StructuredData, { createSoftwareSchema } from '@/components/StructuredData'

export const metadata: Metadata = {
    title: 'Eliminar Texto Imagen Gratis | Borrar Texto Foto IA',
    description: 'Elimina texto, subtítulos y leyendas de imágenes al instante con IA. Limpia fotos borrando superposiciones de texto no deseadas en segundos.',
    keywords: 'eliminar texto imagen, borrar texto foto, quitar texto imagen, ia eliminación texto, remover subtítulos, eliminar leyendas',
    openGraph: {
        title: 'Eliminar Texto Imagen Gratis | Borrar Texto Foto IA',
        description: 'Elimina texto, subtítulos y leyendas de imágenes al instante con IA. Limpia fotos borrando superposiciones de texto no deseadas en segundos.',
        url: 'https://removewatermarkpro.co/es/eliminar-texto-imagen',
        siteName: 'Remove Watermark Pro',
        locale: 'es_ES',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Eliminar Texto Imagen Gratis | Borrar Texto Foto IA',
        description: 'Elimina texto, subtítulos y leyendas de imágenes al instante con IA.',
    },
    alternates: {
        canonical: 'https://removewatermarkpro.co/es/eliminar-texto-imagen',
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

export default function EliminarTextoImagen() {
    return (
        <>
            <StructuredData data={createSoftwareSchema({
                name: "Eliminar Texto de Imagen - IA Gratis",
                url: "https://removewatermarkpro.co/es/eliminar-texto-imagen",
                description: "Elimina texto, subtítulos y leyendas de imágenes al instante con IA. Limpia fotos en segundos."
            })} />
            <TextRemoverClientEs />
        </>
    )
}
