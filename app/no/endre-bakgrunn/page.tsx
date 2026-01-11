import type { Metadata } from 'next'
import BackgroundChangerClientNo from './BackgroundChangerClientNo'

export const metadata: Metadata = {
    title: 'Gratis Endre Bakgrunn | Bytt Foto Bakgrunn AI',
    description: 'Endre bakgrunner i bilder øyeblikkelig med AI. Bytt fotobakgrunner, bytt scener og transformer bilder på sekunder.',
    keywords: 'endre bakgrunn, bytte foto bakgrunn, erstatte bakgrunn, bytte bakgrunn, ai bakgrunn endrer, foto bakgrunn editor',
    openGraph: {
        title: 'Gratis Endre Bakgrunn | Bytt Foto Bakgrunn AI',
        description: 'Endre bakgrunner i bilder øyeblikkelig med AI. Bytt fotobakgrunner, bytt scener og transformer bilder på sekunder.',
        url: 'https://removewatermarkpro.com/no/endre-bakgrunn',
        siteName: 'Remove Watermark Pro',
        locale: 'no_NO',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Gratis Endre Bakgrunn | Bytt Foto Bakgrunn AI',
        description: 'Endre bakgrunner i bilder øyeblikkelig med AI.',
    },
    alternates: {
        canonical: 'https://removewatermarkpro.com/no/endre-bakgrunn',
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

export default function EndreBakgrunn() {
    return <BackgroundChangerClientNo />
}
