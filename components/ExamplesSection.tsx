'use client'

import Link from 'next/link'
import styles from './ExamplesSection.module.css'
import { useLanguage } from '@/contexts/LanguageContext'
import { translations } from '@/locales/translations'

interface Example {
    title: string
    beforeImage: string
    afterImage: string
    link?: string
}

interface ExamplesSectionProps {
    examples?: Example[]
}

const defaultExamples: Example[] = [
    {
        title: 'Remove any watermark',
        beforeImage: '/images-optimized/ai-watermark-remover-comparison.webp',
        afterImage: '/images-optimized/ai-watermark-remover-comparison.webp',
        link: '/watermark-remover'
    },
    {
        title: 'Instantly swap backgrounds',
        beforeImage: '/images-optimized/ai-background-changer-example.webp',
        afterImage: '/images-optimized/ai-background-changer-example.webp',
        link: '/background-changer-ai'
    },
    {
        title: 'Remove unwanted object',
        beforeImage: '/images-optimized/ai-object-removal-example.webp',
        afterImage: '/images-optimized/ai-object-removal-example.webp',
        link: '/object-remover-ai'
    }
]

export default function ExamplesSection({ examples = defaultExamples }: ExamplesSectionProps = {}) {
    const { language } = useLanguage()
    const t = (translations as any)[language] || translations.en

    // Update examples with language-aware URLs
    const localizedExamples = examples.map(example => {
        if (example.title === 'Remove any watermark') {
            return {
                ...example,
                link: language === 'fr' ? '/fr/enlever-filigrane' : language === 'de' ? '/de/wasserzeichen-entfernen' : language === 'es' ? '/es/eliminar-marca-agua' : language === 'pt' ? '/pt/remover-marca-dagua' : language === 'ko' ? '/ko/watermark-remover' : language === 'no' ? '/no/fjern-vannmerke' : '/watermark-remover'
            }
        }
        if (example.title === 'Remove unwanted object') {
            return {
                ...example,
                link: language === 'fr' ? '/fr/supprimer-objet-image' : language === 'de' ? '/de/objekt-entfernen' : language === 'es' ? '/es/eliminar-objeto-imagen' : language === 'pt' ? '/pt/remover-objeto-imagem' : language === 'ko' ? '/ko/object-remover-ai' : language === 'no' ? '/no/fjern-objekt-fra-bilde' : '/object-remover-ai'
            }
        }
        if (example.title === 'Instantly swap backgrounds') {
            return {
                ...example,
                link: language === 'fr' ? '/fr/changer-arriere-plan' : language === 'de' ? '/de/hintergrund-wechseln' : language === 'es' ? '/es/cambiar-fondo-imagen' : language === 'pt' ? '/pt/trocar-fundo-imagem' : language === 'ko' ? '/ko/background-changer-ai' : language === 'no' ? '/no/endre-bakgrunn' : '/background-changer-ai'
            }
        }
        return example
    })

    // Map English titles to translated titles
    const getTranslatedTitle = (title: string) => {
        if (title === 'Remove any watermark') return t.examples.example1
        if (title === 'Instantly swap backgrounds') return t.examples.example2
        if (title === 'Remove unwanted object') return t.examples.example3
        return title
    }

    return (
        <section className={styles.examples}>
            <div className={styles.grid}>
                {localizedExamples.map((example, index) => (
                    <div key={index} className={styles.card}>
                        <div className={styles.imageComparison} style={{ padding: 0, overflow: 'hidden', display: 'block', position: 'relative' }}>
                            <span className={styles.labelLeft}>{t.examples.before}</span>
                            <span className={styles.labelRight}>{t.examples.after}</span>
                            <img
                                src={example.beforeImage || example.afterImage}
                                alt={getTranslatedTitle(example.title)}
                                style={{ width: '100%', height: '100%', objectFit: 'cover' }} loading="lazy" decoding="async" />
                        </div>
                        <div className={styles.cardContent}>
                            <h3 className={styles.title}>{getTranslatedTitle(example.title)}</h3>
                            {example.link ? (
                                <Link href={example.link} style={{ textDecoration: 'none' }}>
                                    <button className={styles.button}>
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" style={{ marginRight: '8px' }}>
                                            <path d="M10 3L10 17M10 17L15 12M10 17L5 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                        {t.examples.tryNow}
                                    </button>
                                </Link>
                            ) : (
                                <button className={styles.button}>
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" style={{ marginRight: '8px' }}>
                                        <path d="M10 3L10 17M10 17L15 12M10 17L5 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                    {t.examples.tryNow}
                                </button>
                            )}
                            <p className={styles.formats}>{t.examples.formats}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
