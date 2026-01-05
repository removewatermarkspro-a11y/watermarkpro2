import SupportClient from '../../support/SupportClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Soporte - Remove Watermark Pro | Ayuda & Contacto',
    description: 'Obtenga ayuda con Remove Watermark Pro. Contacte a nuestro equipo de soporte para obtener asistencia con la eliminación de marcas de agua, problemas de cuenta y preguntas técnicas.',

    alternates: {
        canonical: 'https://removewatermarkspro.com/es/soporte',
        languages: {
            'en': 'https://removewatermarkspro.com/support',
            'fr': 'https://removewatermarkspro.com/fr/support',
            'de': 'https://removewatermarkspro.com/de/support',
            'es': 'https://removewatermarkspro.com/es/soporte',
            'pt': 'https://removewatermarkspro.com/pt/suporte',
            'ko': 'https://removewatermarkspro.com/ko/support',
            'no': 'https://removewatermarkspro.com/no/support',
            'x-default': 'https://removewatermarkspro.com/support'
        }
    },

    openGraph: {
        title: 'Soporte - Remove Watermark Pro | Ayuda & Contacto',
        description: 'Obtenga ayuda con Remove Watermark Pro. Contacte a nuestro equipo de soporte.',
        url: 'https://removewatermarkspro.com/es/soporte',
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
