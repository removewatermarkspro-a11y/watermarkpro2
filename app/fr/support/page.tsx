import SupportClient from '../../support/SupportClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Support - Remove Watermark Pro | Aide & Contact',
    description: 'Obtenez de l\'aide avec Remove Watermark Pro. Contactez notre équipe de support pour obtenir de l\'aide concernant la suppression de filigrane, les problèmes de compte et les questions techniques.',

    alternates: {
        canonical: 'https://removewatermarkspro.com/fr/support',
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
        title: 'Support - Remove Watermark Pro | Aide & Contact',
        description: 'Obtenez de l\'aide avec Remove Watermark Pro. Contactez notre équipe de support pour obtenir de l\'aide concernant la suppression de filigrane.',
        url: 'https://removewatermarkspro.com/fr/support',
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
