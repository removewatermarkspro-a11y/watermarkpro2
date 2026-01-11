import type { Metadata } from 'next'
import BackgroundChangerClientEs from './BackgroundChangerClientEs'
import StructuredData, { createSoftwareSchema } from '@/components/StructuredData'

export const metadata: Metadata = {
    title: 'Cambiar Fondo Imagen Gratis | Modificar Fondo Foto IA',
    description: 'Cambia fondos de fotos al instante con IA. Reemplaza fondos de fotos, intercambia escenas y transforma imágenes en segundos.',
    keywords: 'cambiar fondo imagen, modificar fondo foto, reemplazar fondo, intercambiar fondo, ia cambio fondo, editor fondo foto',
    openGraph: {
        title: 'Cambiar Fondo Imagen Gratis | Modificar Fondo Foto IA',
        description: 'Cambia fondos de fotos al instante con IA. Reemplaza fondos de fotos, intercambia escenas y transforma imágenes en segundos.',
        url: 'https://removewatermarkpro.com/es/cambiar-fondo-imagen',
        siteName: 'Remove Watermark Pro',
        locale: 'es_ES',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Cambiar Fondo Imagen Gratis | Modificar Fondo Foto IA',
        description: 'Cambia fondos de fotos al instante con IA.',
    },
    alternates: {
        canonical: 'https://removewatermarkpro.com/es/cambiar-fondo-imagen',
        languages: {
            'en': 'https://removewatermarkpro.com/background-changer-ai',
            'fr': 'https://removewatermarkpro.com/fr/changer-arriere-plan',
            'de': 'https://removewatermarkpro.com/de/hintergrund-wechseln',
            'es': 'https://removewatermarkpro.com/es/cambiar-fondo-imagen',
            'pt': 'https://removewatermarkpro.com/pt/trocar-fundo-imagem',
            'ko': 'https://removewatermarkpro.com/ko/background-changer-ai',
            'no': 'https://removewatermarkpro.com/no/endre-bakgrunn',
        },
    },
}

export default function CambiarFondoImagen() {
    return (
        <>
            <StructuredData data={createSoftwareSchema({
                name: "Cambiar Fondo de Imagen - IA Gratis",
                url: "https://removewatermarkpro.com/es/cambiar-fondo-imagen",
                description: "Cambia fondos en fotos al instante con IA. Reemplaza fondos de fotos y transforma imágenes."
            })} />
            <BackgroundChangerClientEs />
        </>
    )
}
