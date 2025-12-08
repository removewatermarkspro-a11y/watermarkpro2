import Link from 'next/link'
import styles from './ExamplesSection.module.css'

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

    return (
        <section className={styles.examples}>
            <div className={styles.grid}>
                {examples.map((example, index) => (
                    <div key={index} className={styles.card}>
                        <div className={styles.imageComparison} style={{ padding: 0, overflow: 'hidden', display: 'block', position: 'relative' }}>
                            <span className={styles.labelLeft}>Before</span>
                            <span className={styles.labelRight}>After</span>
                            <img
                                src={example.beforeImage || example.afterImage}
                                alt={example.title}
                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                            />
                        </div>
                        <div className={styles.cardContent}>
                            <h3 className={styles.title}>{example.title}</h3>
                            {example.link ? (
                                <Link href={example.link} style={{ textDecoration: 'none' }}>
                                    <button className={styles.button}>
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" style={{ marginRight: '8px' }}>
                                            <path d="M10 3L10 17M10 17L15 12M10 17L5 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                        Try this now
                                    </button>
                                </Link>
                            ) : (
                                <button className={styles.button}>
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" style={{ marginRight: '8px' }}>
                                        <path d="M10 3L10 17M10 17L15 12M10 17L5 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                    Try this now
                                </button>
                            )}
                            <p className={styles.formats}>Supported formats: JPG, PNG, WEBP</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
