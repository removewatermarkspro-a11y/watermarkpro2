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
        beforeImage: '/images/hero-comparison-v2.png',
        afterImage: '/images/hero-comparison-v2.png',
        link: '/'
    },
    {
        title: 'Instantly swap backgrounds',
        beforeImage: '/images/example-swap-background-v2.png',
        afterImage: '/images/example-swap-background-v2.png',
        link: '/replace-background'
    },
    {
        title: 'Remove unwanted object',
        beforeImage: '/images/example-remove-object.png',
        afterImage: '/images/example-remove-object.png',
        link: '/remove-object'
    }
]

export default function ExamplesSection({ examples = defaultExamples }: ExamplesSectionProps = {}) {
    const { language } = useLanguage()
    const t = translations[language]

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
                {examples.map((example, index) => (
                    <div key={index} className={styles.card}>
                        <div className={styles.imageComparison} style={{ padding: 0, overflow: 'hidden', display: 'block', position: 'relative' }}>
                            <span className={styles.labelLeft}>{t.examples.before}</span>
                            <span className={styles.labelRight}>{t.examples.after}</span>
                            <img
                                src={example.beforeImage || example.afterImage}
                                alt={getTranslatedTitle(example.title)}
                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                            />
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
