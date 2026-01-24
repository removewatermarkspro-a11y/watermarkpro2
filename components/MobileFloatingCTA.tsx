'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import styles from './MobileFloatingCTA.module.css'

export default function MobileFloatingCTA() {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            // Show CTA after scrolling 300px
            setIsVisible(window.scrollY > 300)
        }

        window.addEventListener('scroll', handleScroll, { passive: true })
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <div className={`${styles.floatingCTA} ${isVisible ? styles.visible : ''}`}>
            <Link href="/watermark-remover" className={styles.ctaButton}>
                <span className={styles.emoji}>👆</span>
                Remove Watermarks Free
            </Link>
        </div>
    )
}
