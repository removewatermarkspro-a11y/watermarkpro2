'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import styles from './PromoPopup.module.css'
import { useLanguage } from '@/contexts/LanguageContext'

interface PromoPopupProps {
    isOpen: boolean
    onClose: () => void
}

export default function PromoPopup({ isOpen, onClose }: PromoPopupProps) {
    const router = useRouter()
    const [timeLeft, setTimeLeft] = useState<number>(0)

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden'

            // Check if timer already exists in localStorage
            const savedEndTime = localStorage.getItem('promoEndTime')
            const now = Date.now()

            if (savedEndTime) {
                const endTime = parseInt(savedEndTime)
                const remaining = Math.max(0, endTime - now)
                setTimeLeft(Math.floor(remaining / 1000))
            } else {
                // Set new timer for 15 minutes
                const endTime = now + (15 * 60 * 1000)
                localStorage.setItem('promoEndTime', endTime.toString())
                setTimeLeft(15 * 60)
            }
        } else {
            document.body.style.overflow = 'unset'
        }

        return () => {
            document.body.style.overflow = 'unset'
        }
    }, [isOpen])

    useEffect(() => {
        if (!isOpen || timeLeft <= 0) return

        const interval = setInterval(() => {
            setTimeLeft(prev => {
                if (prev <= 1) {
                    clearInterval(interval)
                    return 0
                }
                return prev - 1
            })
        }, 1000)

        return () => clearInterval(interval)
    }, [isOpen, timeLeft])

    const formatTime = (seconds: number) => {
        const mins = Math.floor(seconds / 60)
        const secs = seconds % 60
        return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`
    }

    const handleGoToPricing = () => {
        const pricingUrl = language === 'fr' ? '/fr/tarifs' : language === 'de' ? '/de/preise' : language === 'es' ? '/es/precios' : language === 'pt' ? '/pt/precos' : language === 'ko' ? '/ko/pricing' : language === 'no' ? '/no/priser' : '/pricing'
        router.push(pricingUrl)
        onClose()
    }

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
                    <div className={styles.iconWrapper}>
                        <div className={styles.icon}>⚠️</div>
                    </div>

                    <h2 className={styles.title}>No more credits available</h2>
                    <p className={styles.subtitle}>
                        You have used all your free credits
                    </p>

                    <div className={styles.promoBox}>
                        <div className={styles.promoBadge}>SPECIAL OFFER</div>
                        <div className={styles.promoTitle}>-50% on yearly pack</div>
                        <div className={styles.promoSubtitle}>Limited time offer</div>

                        <div className={styles.timer}>
                            <div className={styles.timerIcon}>⏰</div>
                            <div className={styles.timerDisplay}>{formatTime(timeLeft)}</div>
                        </div>
                    </div>

                    <button className={styles.ctaButton} onClick={handleGoToPricing}>
                        View offers
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                    </button>

                    <button className={styles.laterButton} onClick={onClose}>
                        Maybe later
                    </button>
                </div>
            </div>
        </div>
    )
}
