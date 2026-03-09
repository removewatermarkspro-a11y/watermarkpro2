import SupportClient from '../../support/SupportClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Soporte - Remove Watermark Pro | Ayuda & Contacto',
    description: 'Obtenga ayuda con Remove Watermark Pro. Contacte a nuestro equipo de soporte para obtener asistencia con la eliminación de marcas de agua, problemas de cuenta y preguntas técnicas.',

    alternates: {
        canonical: 'https://removewatermarkpro.co/es/soporte',
        languages: {
            'en': 'https://removewatermarkpro.co/support',
            'fr': 'https://removewatermarkpro.co/fr/support',
            'de': 'https://removewatermarkpro.co/de/support',
            'es': 'https://removewatermarkpro.co/es/soporte',
            'pt': 'https://removewatermarkpro.co/pt/suporte',
            'ko': 'https://removewatermarkpro.co/ko/support',
            'no': 'https://removewatermarkpro.co/no/support',
            'x-default': 'https://removewatermarkpro.co/support'
        }
    },

    openGraph: {
        title: 'Soporte - Remove Watermark Pro | Ayuda & Contacto',
        description: 'Obtenga ayuda con Remove Watermark Pro. Contacte a nuestro equipo de soporte.',
        url: 'https://removewatermarkpro.co/es/soporte',
        siteName: 'Remove Watermark Pro',
        locale: 'es_ES',
        type: 'website',
    },

    twitter: {
        card: 'summary_large_image',
        title: 'Soporte - Remove Watermark Pro | Ayuda & Contacto',
        description: 'Obtenga ayuda con Remove Watermark Pro. Contacte a nuestro equipo de soporte.',
    },

    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
}

export default function SupportPageEs() {
    return <SupportClient />
}
