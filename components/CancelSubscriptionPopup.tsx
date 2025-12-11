'use client'

import { useEffect, useRef, useState } from 'react'
import styles from './CancelSubscriptionPopup.module.css'

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

const FEEDBACK_QUESTIONS: Question[] = [
    {
        title: "Why do you want to cancel?",
        options: [
            "Too expensive for me",
            "I don't use the service enough",
            "Technical issues or bugs",
            "Missing features",
            "Switching to another service",
            "Other"
        ]
    },
    {
        title: "How satisfied are you with our features?",
        options: [
            "Watermark removal quality is poor",
            "Background removal doesn't work well",
            "Limited editing options",
            "Processing is too slow",
            "Features are too complicated",
            "Features meet my expectations"
        ]
    },
    {
        title: "How easy is our platform to use?",
        options: [
            "Interface is confusing",
            "Hard to find features",
            "Upload process is complicated",
            "Results are difficult to download",
            "Not enough tutorials or guides",
            "Easy and intuitive to use"
        ]
    },
    {
        title: "How do you feel about the pricing?",
        options: [
            "Too expensive compared to competitors",
            "Not enough credits per month",
            "Would prefer a different payment model",
            "Pricing is unclear",
            "Good value for money",
            "Fair pricing overall"
        ]
    },
    {
        title: "How was your experience with support?",
        options: [
            "Never received help when needed",
            "Support response was too slow",
            "Support couldn't solve my problem",
            "No issues, didn't need support",
            "Support was helpful",
            "Haven't contacted support yet"
        ]
    }
]

export default function CancelSubscriptionPopup({ isOpen, onClose, onConfirm, onAcceptPromo }: CancelSubscriptionPopupProps) {
    const popupRef = useRef<HTMLDivElement>(null)
    const [selectedAnswers, setSelectedAnswers] = useState<{ [key: number]: string[] }>({})

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
                    <h2 className={styles.title}>Are you sure?</h2>
                    <button className={styles.closeBtn} onClick={onClose}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                </div>

                <div className={styles.content}>
                    <p className={styles.message}>
                        Do you really want to cancel your subscription? You will lose access to all premium features.
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
                        <span className={styles.promoPercentage}>20% OFF</span>
                    </div>
                    <div className={styles.promoContent}>
                        <h4 className={styles.promoTitle}>Special Offer!</h4>
                        <p className={styles.promoText}>
                            Stay with us and enjoy <strong>20% off</strong> your next month!
                        </p>
                        <button className={styles.promoBtn} onClick={handleAcceptPromo}>
                            Claim 20% Discount
                        </button>
                    </div>
                </div>

                <div className={styles.finalActions}>
                    <button className={styles.staySubscribedBtn} onClick={onClose}>
                        Stay Subscribed
                    </button>
                    <button className={styles.finalCancelBtn} onClick={onConfirm}>
                        Cancel Subscription
                    </button>
                </div>
            </div>
        </div>
    )
}
