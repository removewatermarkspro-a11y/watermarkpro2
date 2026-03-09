import type { Metadata } from 'next'
import BackgroundRemoverClientEs from './BackgroundRemoverClientEs'
import StructuredData, { createSoftwareSchema } from '@/components/StructuredData'

export const metadata: Metadata = {
    title: 'Eliminar Fondo Imagen Gratis | Borrar Fondo Foto IA',
    description: 'Elimina fondos de fotos al instante con IA. Borra fondos de fotos, aísla sujetos y crea imágenes transparentes en segundos.',
    keywords: 'eliminar fondo imagen, borrar fondo foto, eliminar fondo, fondo transparente, ia eliminador fondo, borrador fondo foto',
    openGraph: {
        title: 'Eliminar Fondo Imagen Gratis | Borrar Fondo Foto IA',
        description: 'Elimina fondos de fotos al instante con IA.',
        url: 'https://removewatermarkpro.co/es/eliminar-fondo-imagen',
        siteName: 'Remove Watermark Pro',
        locale: 'es_ES',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Eliminar Fondo Imagen Gratis | Borrar Fondo Foto IA',
        description: 'Elimina fondos de fotos al instante con IA.',
    },
    alternates: {
        canonical: 'https://removewatermarkpro.co/es/eliminar-fondo-imagen',
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

export default function EliminarFondoImagen() {
    return (
        <>
            <StructuredData data={createSoftwareSchema({
                name: "Eliminar Fondo de Imagen - IA Gratis",
                url: "https://removewatermarkpro.co/es/eliminar-fondo-imagen",
                description: "Elimina fondos de fotos al instante con IA. Crea imágenes transparentes en segundos."
            })} />
            <BackgroundRemoverClientEs />
        </>
    )
}
