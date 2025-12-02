import styles from './ExamplesSection.module.css'

export default function ExamplesSection() {
    const examples = [
        {
            title: 'Remove any watermark',
            beforeImage: '',
            afterImage: ''
        },
        {
            title: 'Automatically remove people',
            beforeImage: '',
            afterImage: ''
        },
        {
            title: 'Remove unwanted object',
            beforeImage: '',
            afterImage: ''
        }
    ]

    return (
        <section className={styles.examples}>
            <div className={styles.grid}>
                {examples.map((example, index) => (
                    <div key={index} className={styles.card}>
                        <div className={styles.imageComparison}>
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
