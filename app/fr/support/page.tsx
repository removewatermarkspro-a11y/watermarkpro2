import SupportClient from '../../support/SupportClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Support - Remove Watermark Pro | Aide & Contact',
    description: 'Obtenez de l\'aide avec Remove Watermark Pro. Contactez notre équipe de support pour obtenir de l\'aide concernant la suppression de filigrane, les problèmes de compte et les questions techniques.',

    alternates: {
        canonical: 'https://removewatermarkpro.co/fr/support',
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
        title: 'Support - Remove Watermark Pro | Aide & Contact',
        description: 'Obtenez de l\'aide avec Remove Watermark Pro. Contactez notre équipe de support pour obtenir de l\'aide concernant la suppression de filigrane.',
        url: 'https://removewatermarkpro.co/fr/support',
        siteName: 'Remove Watermark Pro',
        locale: 'fr_FR',
        type: 'website',
    },

    twitter: {
        card: 'summary_large_image',
        title: 'Support - Remove Watermark Pro | Aide & Contact',
        description: 'Obtenez de l\'aide avec Remove Watermark Pro. Contactez notre équipe de support.',
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

export default function SupportPageFr() {
    return <SupportClient />
}
