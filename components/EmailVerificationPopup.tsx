'use client'

import { useEffect } from 'react'
import styles from './EmailVerificationPopup.module.css'
import { useLanguage } from '@/contexts/LanguageContext'
import { translations } from '@/locales/translations'

interface EmailVerificationPopupProps {
    isOpen: boolean
    onClose: () => void
    onBack: () => void
    email: string
}

export default function EmailVerificationPopup({ isOpen, onClose, onBack, email }: EmailVerificationPopupProps) {
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

    const maskEmail = (email: string) => {
        const [username, domain] = email.split('@')
        if (!username || !domain) return email
        const maskedUsername = username.slice(0, 2) + '*'.repeat(username.length - 2)
        return `${maskedUsername}@${domain}`
    }

    const handleResendEmail = () => {
        // Logic to resend email
        console.log('Resending email to:', email)
    }

    return (
        <div className={styles.overlay} onClick={onClose}>
            <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
                <button className={styles.closeButton} onClick={onClose}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                </button>

                <div className={styles.modalContent}>
                    <div className={styles.formSection}>
                        <button className={styles.backButton} onClick={onBack}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>

                        <h2 className={styles.title}>{t.emailVerificationPopup.title}</h2>
                        <p className={styles.description}>
                            {t.emailVerificationPopup.subtitle} <strong>{maskEmail(email)}</strong>. Click the link to access your account
                        </p>

                        <div className={styles.emailDisplay}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                                <path d="M3 8L10.89 13.26C11.23 13.47 11.61 13.59 12 13.59C12.39 13.59 12.77 13.47 13.11 13.26L21 8M5 19H19C19.5304 19 20.0391 18.7893 20.4142 18.4142C20.7893 18.0391 21 17.5304 21 17V7C21 6.46957 20.7893 5.96086 20.4142 5.58579C20.0391 5.21071 19.5304 5 19 5H5C4.46957 5 3.96086 5.21071 3.58579 5.58579C3.21071 5.96086 3 6.46957 3 7V17C3 17.5304 3.21071 18.0391 3.58579 18.4142C3.96086 18.7893 4.46957 19 5 19Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <span>{maskEmail(email)}</span>
                        </div>

                        <button className={styles.resendButton} onClick={handleResendEmail}>
                            {t.emailVerificationPopup.resendLink}
                        </button>
                    </div>

                    <div className={styles.imageSection}>
                        <div className={styles.imageOverlay}></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
