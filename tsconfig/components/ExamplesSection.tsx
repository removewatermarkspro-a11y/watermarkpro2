import styles from './ExamplesSection.module.css'

interface Example {
    title: string
    beforeImage: string
    afterImage: string
}

interface ExamplesSectionProps {
    examples: Example[]
}

export default function ExamplesSection({ examples }: ExamplesSectionProps) {
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
                                    <span className={styles.placeholderText}>Before</span>
                                </div>
                            </div>
                            <div className={styles.imageWrapper}>
                                <span className={styles.label}>After</span>
                                <div className={styles.imagePlaceholder}>
                                    <span className={styles.placeholderIcon}>✨</span>
                                    <span className={styles.placeholderText}>After</span>
                                </div>
                            </div>
                        </div>
                        <h3 className={styles.title}>{example.title}</h3>
                        <button className={styles.button}>
                            Try now
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                            </svg>
                        </button>
                    </div>
                ))}
            </div>
        </section>
    )
}
