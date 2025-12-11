'use client'

import { useEffect } from 'react'
import styles from './ProcessingPopup.module.css'
import { useLanguage } from '@/contexts/LanguageContext'
import { translations } from '@/locales/translations'

interface ProcessingPopupProps {
    isOpen: boolean
}

export default function ProcessingPopup({ isOpen }: ProcessingPopupProps) {
    const { language } = useLanguage()
    const t = translations[language]
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'unset'
        }
        return () => {
            document.body.style.overflow = 'unset'
        }
    }, [isOpen])

    if (!isOpen) return null

    return (
        <div className={styles.overlay}>
            <div className={styles.modal}>
                <div className={styles.iconContainer}>
                    <svg width="80" height="80" viewBox="0 0 80 80" fill="none" className={styles.spinner}>
                        <circle cx="40" cy="40" r="35" stroke="#a855f7" strokeWidth="4" strokeLinecap="round" strokeDasharray="164.93 54.98" />
                    </svg>
                    <div className={styles.sparkles}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M12 2L14.09 8.26L20 10.27L14.09 12.28L12 18.54L9.91 12.28L4 10.27L9.91 8.26L12 2Z" fill="#a855f7" />
                        </svg>
                    </div>
                </div>

                <h2 className={styles.title}>{t.processingPopup.title}</h2>
                <p className={styles.subtitle}>{t.processingPopup.subtitle}</p>

                <div className={styles.dots}>
                    <span className={styles.dot}></span>
                    <span className={styles.dot}></span>
                    <span className={styles.dot}></span>
                </div>
            </div>
        </div>
    )
}
