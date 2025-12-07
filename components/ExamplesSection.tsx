import styles from './ExamplesSection.module.css'

export default function ExamplesSection() {
    const examples = [
        {
            title: 'Remove any watermark',
            image: '/images/hero-comparison-v2.png'
        },
        {
            title: 'Instantly swap backgrounds',
            image: '/images/example-swap-background-v2.png'
        },
        {
            title: 'Remove unwanted object',
            image: '/images/example-remove-object.png'
        }
    ]

    return (
        <section className={styles.examples}>
            <div className={styles.grid}>
                {examples.map((example, index) => (
                    <div key={index} className={styles.card}>
                        <div className={styles.imageComparison} style={{ padding: 0, overflow: 'hidden', display: example.image ? 'block' : 'grid', position: 'relative' }}>
                            {/* @ts-ignore */}
                            {example.image ? (
                                <>
                                    <span className={styles.labelLeft}>Before</span>
                                    <span className={styles.labelRight}>After</span>
                                    <img
                                        /* @ts-ignore */
                                        src={example.image}
                                        alt={example.title}
                                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                    />
                                </>
                            ) : (
                                <>
                                    <div className={styles.imageWrapper}>
                                        <span className={styles.label}>Before</span>
                                        <div className={styles.imagePlaceholder}>
                                            <span className={styles.placeholderIcon}>🖼️</span>
                                        </div>
                                    </div>
                                    <div className={styles.divider}></div>
                                    <div className={styles.imageWrapper}>
                                        <span className={styles.label}>After</span>
                                        <div className={styles.imagePlaceholder}>
                                            <span className={styles.placeholderIcon}>✨</span>
                                        </div>
                                    </div>
                                </>
                            )}
                        </div>
                        <div className={styles.cardContent}>
                            <h3 className={styles.title}>{example.title}</h3>
                            <button className={styles.button}>
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" style={{ marginRight: '8px' }}>
                                    <path d="M10 3L10 17M10 17L15 12M10 17L5 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                Try this now
                            </button>
                            <p className={styles.formats}>Supported formats: JPG, PNG, WEBP</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
