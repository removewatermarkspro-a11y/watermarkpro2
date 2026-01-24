'use client'

import { useState } from 'react'
import Link from 'next/link'
import styles from './BlogSidebar.module.css'

const sidebarImages = [
    {
        src: '/images-optimized/ai-watermark-remover-comparison.webp',
        alt: 'AI Watermark Remover - Before and After Comparison'
    },
    {
        src: '/images-optimized/free-watermark-remover-tool.webp',
        alt: 'Free Watermark Remover Tool'
    },
    {
        src: '/images-optimized/free-watermark-remover-feature.webp',
        alt: 'Watermark Remover Feature'
    }
]

export default function BlogSidebar() {
    const [activeIndex, setActiveIndex] = useState(0)

    return (
        <aside className={styles.sidebar}>
            <div className={styles.sidebarContent}>
                <h3 className={styles.sidebarTitle}>See What You Can Create</h3>

                <div className={styles.imageCarousel}>
                    <div className={styles.imageWrapper}>
                        <span className={styles.aiBadge}>AI Powered</span>
                        <img
                            src={sidebarImages[activeIndex].src}
                            alt={sidebarImages[activeIndex].alt}
                            className={styles.carouselImage}
                        />
                    </div>

                    <div className={styles.carouselIndicators}>
                        {sidebarImages.map((_, index) => (
                            <button
                                key={index}
                                className={`${styles.indicator} ${index === activeIndex ? styles.indicatorActive : ''}`}
                                onClick={() => setActiveIndex(index)}
                                aria-label={`View image ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>

                <Link href="/" className={styles.ctaButton}>
                    Remove Watermarks Free
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                        <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </Link>

                <p className={styles.ctaSubtext}>
                    No credit card required • 3 free removals
                </p>
            </div>
        </aside>
    )
}
