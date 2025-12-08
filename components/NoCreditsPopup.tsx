'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import styles from './NoCreditsPopup.module.css'

interface NoCreditsPopupProps {
    isOpen: boolean
    onClose: () => void
}

export default function NoCreditsPopup({ isOpen, onClose }: NoCreditsPopupProps) {
    const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })

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

    useEffect(() => {
        // Calculate time left until end of current day
        const calculateTimeLeft = () => {
            const now = new Date()
            const endOfDay = new Date()
            endOfDay.setHours(23, 59, 59, 999)

            const diff = endOfDay.getTime() - now.getTime()

            const days = Math.floor(diff / (1000 * 60 * 60 * 24))
            const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
            const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
            const seconds = Math.floor((diff % (1000 * 60)) / 1000)

            setTimeLeft({ days, hours, minutes, seconds })
        }

        if (isOpen) {
            calculateTimeLeft()
            const timer = setInterval(calculateTimeLeft, 1000)
            return () => clearInterval(timer)
        }
    }, [isOpen])

    if (!isOpen) return null

    return (
        <div className={styles.overlay} onClick={onClose}>
            <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
                <button className={styles.closeButton} onClick={onClose}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                </button>

                <div className={styles.content}>
                    <div className={styles.leftSection}>
                        <div className={styles.iconContainer}>
                            <svg className={styles.sparkleIcon} width="120" height="120" viewBox="0 0 120 120" fill="none">
                                <path d="M60 10L65 45L80 35L70 50L105 55L70 60L80 75L65 65L60 100L55 65L40 75L50 60L15 55L50 50L40 35L55 45L60 10Z" fill="url(#sparkle-gradient)" />
                                <defs>
                                    <linearGradient id="sparkle-gradient" x1="15" y1="10" x2="105" y2="100" gradientUnits="userSpaceOnUse">
                                        <stop offset="0%" stopColor="#8b5cf6" />
                                        <stop offset="100%" stopColor="#d946ef" />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </div>
                    </div>

                    <div className={styles.rightSection}>
                        <div className={styles.badge}>
                            <span className={styles.badgeIcon}>🔥</span>
                            UPGRADE NOW
                        </div>

                        <h2 className={styles.title}>Have more images?</h2>

                        <p className={styles.subtitle}>
                            Remove watermarks in bulk with premium credits
                        </p>

                        <div className={styles.promoBox}>
                            <div className={styles.promoHeader}>
                                <span className={styles.promoIcon}>🔥</span>
                                EXCLUSIVE OFFER
                            </div>

                            <div className={styles.promoContent}>
                                <div className={styles.discount}>-50%</div>
                                <div className={styles.promoText}>
                                    <div>On all annual plans</div>
                                    <div className={styles.expiresText}>Expires in</div>
                                </div>
                                <div className={styles.countdown}>
                                    <div className={styles.timeBox}>
                                        <div className={styles.timeValue}>{String(timeLeft.hours).padStart(2, '0')}</div>
                                    </div>
                                    <span className={styles.timeSeparator}>:</span>
                                    <div className={styles.timeBox}>
                                        <div className={styles.timeValue}>{String(timeLeft.minutes).padStart(2, '0')}</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={styles.features}>
                            <div className={styles.feature}>
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <path d="M7 10L9 12L13 8M19 10C19 14.9706 14.9706 19 10 19C5.02944 19 1 14.9706 1 10C1 5.02944 5.02944 1 10 1C14.9706 1 19 5.02944 19 10Z" stroke="#8b5cf6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <span>Unlimited daily processing</span>
                            </div>
                            <div className={styles.feature}>
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <path d="M7 10L9 12L13 8M19 10C19 14.9706 14.9706 19 10 19C5.02944 19 1 14.9706 1 10C1 5.02944 5.02944 1 10 1C14.9706 1 19 5.02944 19 10Z" stroke="#8b5cf6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <span>Batch processing support</span>
                            </div>
                            <div className={styles.feature}>
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <path d="M7 10L9 12L13 8M19 10C19 14.9706 14.9706 19 10 19C5.02944 19 1 14.9706 1 10C1 5.02944 5.02944 1 10 1C14.9706 1 19 5.02944 19 10Z" stroke="#8b5cf6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <span>Priority processing speed</span>
                            </div>
                        </div>

                        <Link href="/pricing" className={styles.ctaButton} onClick={onClose}>
                            Get More Credits
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
