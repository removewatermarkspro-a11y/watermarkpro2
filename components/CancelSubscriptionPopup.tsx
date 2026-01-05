'use client'

import { useEffect, useRef, useState } from 'react'
import styles from './CancelSubscriptionPopup.module.css'
import { useLanguage } from '@/contexts/LanguageContext'
import { translations } from '@/locales/translations'

interface CancelSubscriptionPopupProps {
    isOpen: boolean
    onClose: () => void
    onConfirm: () => void
    onAcceptPromo?: () => void
}

interface Question {
    title: string
    options: string[]
}

export default function CancelSubscriptionPopup({ isOpen, onClose, onConfirm, onAcceptPromo }: CancelSubscriptionPopupProps) {
    const popupRef = useRef<HTMLDivElement>(null)
    const [selectedAnswers, setSelectedAnswers] = useState<{ [key: number]: string[] }>({})
    const { language } = useLanguage()
    const t = (translations as any)[language] || translations.en

    const FEEDBACK_QUESTIONS: Question[] = [
        {
            title: t.cancelSubscriptionPopup.questions.why.title,
            options: t.cancelSubscriptionPopup.questions.why.options
        },
        {
            title: t.cancelSubscriptionPopup.questions.features.title,
            options: t.cancelSubscriptionPopup.questions.features.options
        },
        {
            title: t.cancelSubscriptionPopup.questions.usability.title,
            options: t.cancelSubscriptionPopup.questions.usability.options
        },
        {
            title: t.cancelSubscriptionPopup.questions.pricing.title,
            options: t.cancelSubscriptionPopup.questions.pricing.options
        },
        {
            title: t.cancelSubscriptionPopup.questions.support.title,
            options: t.cancelSubscriptionPopup.questions.support.options
        }
    ]

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
        if (!isOpen) {
            setSelectedAnswers({})
        }
    }, [isOpen])

    const toggleAnswer = (questionIndex: number, answer: string) => {
        setSelectedAnswers(prev => {
            const currentAnswers = prev[questionIndex] || []
            const newAnswers = currentAnswers.includes(answer)
                ? currentAnswers.filter(a => a !== answer)
                : [...currentAnswers, answer]

            return {
                ...prev,
                [questionIndex]: newAnswers
            }
        })
    }

    const handleAcceptPromo = () => {
        if (onAcceptPromo) {
            onAcceptPromo()
        }
        onClose()
    }

    if (!isOpen) return null

    return (
        <div className={styles.overlay} onClick={onClose}>
            <div className={styles.popup} onClick={(e) => e.stopPropagation()} ref={popupRef}>
                <div className={styles.header}>
                    <h2 className={styles.title}>{t.cancelSubscriptionPopup.title}</h2>
                    <button className={styles.closeBtn} onClick={onClose}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                </div>

                <div className={styles.content}>
                    <p className={styles.message}>
                        {t.cancelSubscriptionPopup.message}
                    </p>
                </div>

                {FEEDBACK_QUESTIONS.map((question, questionIndex) => (
                    <div key={questionIndex} className={styles.reasonsSection}>
                        <h3 className={styles.reasonsTitle}>{question.title}</h3>
                        <div className={styles.reasonsList}>
                            {question.options.map((option, optionIndex) => (
                                <label key={optionIndex} className={styles.reasonItem}>
                                    <input
                                        type="checkbox"
                                        className={styles.checkbox}
                                        checked={selectedAnswers[questionIndex]?.includes(option) || false}
                                        onChange={() => toggleAnswer(questionIndex, option)}
                                    />
                                    <span className={styles.reasonText}>{option}</span>
                                </label>
                            ))}
                        </div>
                    </div>
                ))}

                <div className={styles.promoBox}>
                    <div className={styles.promoBadge}>
                        <span className={styles.promoIcon}>🎁</span>
                        <span className={styles.promoPercentage}>{t.cancelSubscriptionPopup.promo.badge}</span>
                    </div>
                    <div className={styles.promoContent}>
                        <h4 className={styles.promoTitle}>{t.cancelSubscriptionPopup.promo.title}</h4>
                        <p className={styles.promoText} dangerouslySetInnerHTML={{ __html: t.cancelSubscriptionPopup.promo.text }} />
                        <button className={styles.promoBtn} onClick={handleAcceptPromo}>
                            {t.cancelSubscriptionPopup.promo.button}
                        </button>
                    </div>
                </div>

                <div className={styles.finalActions}>
                    <button className={styles.staySubscribedBtn} onClick={onClose}>
                        {t.cancelSubscriptionPopup.staySubscribed}
                    </button>
                    <button className={styles.finalCancelBtn} onClick={onConfirm}>
                        {t.cancelSubscriptionPopup.cancelButton}
                    </button>
                </div>
            </div>
        </div>
    )
}
