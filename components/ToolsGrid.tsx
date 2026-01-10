'use client'

import Link from 'next/link'
import styles from './ToolsGrid.module.css'
import { useLanguage } from '@/contexts/LanguageContext'
import { translations } from '@/locales/translations'

const tools = [
    {
        title: 'Free Watermark Remover',
        description: 'Our free watermark remover uses an advanced AI watermark remover to remove watermark from photo and clean images or videos. Get clean results in seconds thanks to precise watermark removal technology.',
        icon: '💧',
        href: '/'
    },
    {
        title: 'Remove Watermark from Video',
        description: 'With our watermark remover video, you can easily remove watermark from video, delete watermark from video or even remove TikTok watermark. The tool handles MP4, MOV, AVI and provides clean, natural rendering.',
        icon: '🎬',
        href: '/watermark-remover-video'
    },
    {
        title: 'Remove Text',
        description: 'Our AI detects and instantly erases any text thanks to its remove text from image system. It acts as a photo watermark remover capable of reconstructing complex areas while maintaining optimal image quality.',
        icon: '📝',
        href: '/text-remover-ai'
    },
    {
        title: 'Remove Object',
        description: 'Easily erase any unwanted element with our image watermark remover, ideal for removing logos, objects or annoying elements. The AI watermark remover restores the background to deliver a clean, natural result.',
        icon: '🎯',
        href: '/object-remover-ai'
    },
    {
        title: 'Replace Background',
        description: 'Thanks to our intelligent technology, change the background while preserving your subjects. Ideal for creators wanting to remove watermark from image and transform the scene effortlessly, in just seconds.',
        icon: '🎨',
        href: '/background-changer-ai'
    },
    {
        title: 'Remove Background',
        description: 'Our tool automatically detects the subject and removes the background in one click. Combine this with our watermark removal or remove watermark from photo options to get a professional-ready visual.',
        icon: '✂️',
        href: '/background-remover'
    },
    {
        title: 'People Remover AI',
        description: 'The AI can analyze the image and remove people automatically, just as it remove watermark from image or text. Perfect for cleaning photos, protecting privacy or preparing creative projects.',
        icon: '👥',
        href: '/people-remover-ai'
    },
    {
        title: 'Image Upscaler',
        description: 'Improve your photo resolution with our AI-based upscaler. It works perfectly after a watermark remover, allowing you to optimize an already cleaned file while maintaining excellent sharpness.',
        icon: '📈',
        href: '/image-upscaler-ai'
    }
]

interface ToolsGridProps {
    customImages?: { [key: string]: string }
}

export default function ToolsGrid({ customImages = {} }: ToolsGridProps) {
    const { language } = useLanguage()
    const t = (translations as any)[language] || translations.en

    const tools = [
        {
            title: t.toolsGrid.tool1Title,
            description: t.toolsGrid.tool1Description,
            icon: '✨',
            href: language === 'fr' ? '/fr/enlever-filigrane' : language === 'de' ? '/de/wasserzeichen-entfernen' : language === 'es' ? '/es/eliminar-marca-agua' : language === 'pt' ? '/pt/remover-marca-dagua' : language === 'ko' ? '/ko/watermark-remover' : language === 'no' ? '/no/fjern-vannmerke' : '/watermark-remover',
            image: customImages['tool1']
        },
        {
            title: t.toolsGrid.tool2Title,
            description: t.toolsGrid.tool2Description,
            icon: '🎬',
            href: language === 'fr' ? '/fr/enlever-filigrane-video' : language === 'de' ? '/de/wasserzeichen-entfernen-video' : language === 'es' ? '/es/eliminar-marca-agua-video' : language === 'pt' ? '/pt/remover-marca-dagua-video' : language === 'no' ? '/no/fjern-vannmerke-video' : language === 'ko' ? '/ko/watermark-remover-video' : '/watermark-remover-video',
            image: customImages['tool2']
        },
        {
            title: t.toolsGrid.tool3Title,
            description: t.toolsGrid.tool3Description,
            icon: '📝',
            href: language === 'fr' ? '/fr/supprimer-texte-image' : language === 'de' ? '/de/text-entfernen' : language === 'es' ? '/es/eliminar-texto-imagen' : language === 'pt' ? '/pt/remover-texto-imagem' : language === 'ko' ? '/ko/text-remover-ai' : language === 'no' ? '/no/fjern-tekst-fra-bilde' : '/text-remover-ai',
            image: customImages['tool3']
        },
        {
            title: t.toolsGrid.tool4Title,
            description: t.toolsGrid.tool4Description,
            icon: '🎯',
            href: language === 'fr' ? '/fr/supprimer-objet-image' : language === 'de' ? '/de/objekt-entfernen' : language === 'es' ? '/es/eliminar-objeto-imagen' : language === 'pt' ? '/pt/remover-objeto-imagem' : language === 'ko' ? '/ko/object-remover-ai' : language === 'no' ? '/no/fjern-objekt-fra-bilde' : '/object-remover-ai',
            image: customImages['tool4']
        },
        {
            title: t.toolsGrid.tool5Title,
            description: t.toolsGrid.tool5Description,
            icon: '🎨',
            href: language === 'fr' ? '/fr/changer-arriere-plan' : language === 'de' ? '/de/hintergrund-wechseln' : language === 'es' ? '/es/cambiar-fondo-imagen' : language === 'pt' ? '/pt/trocar-fundo-imagem' : language === 'ko' ? '/ko/background-changer-ai' : language === 'no' ? '/no/endre-bakgrunn' : '/background-changer-ai',
            image: customImages['tool5']
        },
        {
            title: t.toolsGrid.tool6Title,
            description: t.toolsGrid.tool6Description,
            icon: '✂️',
            href: language === 'fr' ? '/fr/supprimer-arriere-plan' : language === 'de' ? '/de/hintergrund-entfernen' : language === 'es' ? '/es/eliminar-fondo-imagen' : language === 'pt' ? '/pt/remover-fundo-imagem' : language === 'ko' ? '/ko/background-remover' : language === 'no' ? '/no/fjern-bakgrunn' : '/background-remover',
            image: customImages['tool6']
        },
        {
            title: t.toolsGrid.tool7Title,
            description: t.toolsGrid.tool7Description,
            icon: '👥',
            href: language === 'fr' ? '/fr/effacer-personnes-photo' : language === 'de' ? '/de/personen-entfernen' : language === 'es' ? '/es/eliminar-personas-foto' : language === 'pt' ? '/pt/remover-pessoas-foto' : language === 'ko' ? '/ko/people-remover-ai' : language === 'no' ? '/no/fjern-personer-foto' : '/people-remover-ai',
            image: customImages['tool7']
        },
        {
            title: t.toolsGrid.tool8Title,
            description: t.toolsGrid.tool8Description,
            icon: '📈',
            href: language === 'fr' ? '/fr/agrandir-image' : language === 'de' ? '/de/bild-hochskalieren' : language === 'es' ? '/es/mejorar-calidad-imagen' : language === 'pt' ? '/pt/melhorar-qualidade-imagem' : language === 'ko' ? '/ko/image-upscaler-ai' : language === 'no' ? '/no/forbedre-bildekvalitet' : '/image-upscaler-ai',
            image: customImages['tool8']
        },
        {
            title: t.toolsGrid.tool9Title,
            description: t.toolsGrid.tool9Description,
            icon: '🎥',
            href: language === 'fr' ? '/fr/enlever-filigrane-sora' : '/sora-watermark-remover',
            image: customImages['tool9']
        }
    ]

    return (
        <section className={styles.toolsSection}>
            <div className="container">
                <h2 className={styles.title}>{t.toolsGrid.title}</h2>

                <div className={styles.grid}>
                    {tools.map((tool, index) => (
                        <Link href={tool.href} key={index} className={styles.toolCard}>
                            <div className={styles.imageHeader}>
                                {tool.image && (
                                    <img
                                        src={tool.image}
                                        alt={tool.title}
                                        style={{ width: '100%', height: '100%', objectFit: 'cover' }} loading="lazy" decoding="async" />
                                )}
                            </div>
                            <div className={styles.cardContent}>
                                <h3 className={styles.toolTitle}>{tool.title}</h3>
                                <p className={styles.toolDescription}>{tool.description}</p>
                            </div>
                        </Link>
                    ))}
                </div>

                <div className={styles.ctaContainer}>
                    <Link href={language === 'fr' ? '/fr/enlever-filigrane' : language === 'de' ? '/de/wasserzeichen-entfernen' : language === 'es' ? '/es/eliminar-marca-agua' : language === 'pt' ? '/pt/remover-marca-dagua' : language === 'ko' ? '/ko/watermark-remover' : language === 'no' ? '/no/fjern-vannmerke' : '/watermark-remover'} className={styles.ctaButton}>
                        {t.toolsGrid.getStartedButton}
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                    </Link>
                </div>
            </div>
        </section>
    )
}
