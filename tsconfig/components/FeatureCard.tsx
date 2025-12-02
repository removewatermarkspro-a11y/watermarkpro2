import Link from 'next/link'
import styles from './FeatureCard.module.css'

interface FeatureCardProps {
    title: string
    description: string
    icon: string
    href: string
    gradient?: string
}

export default function FeatureCard({ title, description, icon, href, gradient = 'primary' }: FeatureCardProps) {
    return (
        <Link href={href} className={styles.card}>
            <div className={`${styles.iconWrapper} ${styles[`gradient-${gradient}`]}`}>
                <span className={styles.icon}>{icon}</span>
            </div>
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.description}>{description}</p>
            <div className={styles.arrow}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </div>
        </Link>
    )
}
