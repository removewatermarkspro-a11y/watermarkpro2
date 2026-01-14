'use client'

import { useState } from 'react'
import styles from './AuthPopup.module.css'
import { useAuth } from '@/contexts/AuthContext'
import { useLanguage } from '@/contexts/LanguageContext'
import { translations } from '@/locales/translations'

interface AuthPopupProps {
    isOpen: boolean
    onClose: () => void
}

export default function AuthPopup({ isOpen, onClose }: AuthPopupProps) {
    const [email, setEmail] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const [emailSent, setEmailSent] = useState(false)
    const [error, setError] = useState('')
    const { signInWithGoogle, signInWithEmail } = useAuth()
    const { language } = useLanguage()
    const t = (translations as any)[language] || translations.en

    if (!isOpen) return null

    const handleEmailSubmit = async () => {
        if (!email) return

        setIsLoading(true)
        setError('')

        const result = await signInWithEmail(email)

        if (result.error) {
            setError(result.error)
            setIsLoading(false)
        } else {
            setEmailSent(true)
            setIsLoading(false)
        }
    }

    const handleGoogleLogin = async () => {
        setIsLoading(true)
        await signInWithGoogle()
        // The redirect will happen automatically
    }

    const handleClose = () => {
        setEmail('')
        setEmailSent(false)
        setError('')
        onClose()
    }

    // Show "Check your email" message after sending magic link
    if (emailSent) {
        return (
            <div className={styles.overlay} onClick={handleClose}>
                <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
                    <button className={styles.closeButton} onClick={handleClose}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                    </button>

                    <div className={styles.modalContent}>
                        <div className={styles.formSection}>
                            <div style={{ textAlign: 'center', padding: '40px 20px' }}>
                                <svg width="64" height="64" viewBox="0 0 24 24" fill="none" style={{ margin: '0 auto 20px' }}>
                                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="#a855f7" strokeWidth="2" fill="none" />
                                    <path d="m22 6-10 7L2 6" stroke="#a855f7" strokeWidth="2" strokeLinecap="round" />
                                </svg>
                                <h2 className={styles.title}>{t.authPopup.checkEmailTitle}</h2>
                                <p className={styles.subtitle} style={{ marginTop: '16px' }}>
                                    {t.authPopup.magicLinkSent} <strong>{email}</strong>
                                </p>
                                <p style={{ color: '#888', marginTop: '12px', fontSize: '14px' }}>
                                    {t.authPopup.clickLinkToSignIn}
                                </p>
                                <button
                                    className={styles.emailButton}
                                    onClick={handleClose}
                                    style={{ marginTop: '24px' }}
                                >
                                    {t.authPopup.gotIt}
                                </button>
                            </div>
                        </div>
                        <div className={styles.imageSection}>
                            <img src="/images-optimized/ai-watermark-remover-signup.webp" alt="" className={styles.authImage} loading="lazy" decoding="async" />
                            <div className={styles.imageOverlay}></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className={styles.overlay} onClick={handleClose}>
            <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
                <button className={styles.closeButton} onClick={handleClose}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                </button>

                <div className={styles.modalContent}>
                    <div className={styles.formSection}>
                        <h2 className={styles.title}>{t.authPopup.title}</h2>
                        <p className={styles.subtitle}>{t.authPopup.subtitle}</p>

                        {error && (
                            <div style={{
                                background: '#fee',
                                color: '#c33',
                                padding: '12px',
                                borderRadius: '8px',
                                marginBottom: '16px',
                                fontSize: '14px'
                            }}>
                                {error}
                            </div>
                        )}

                        <div className={styles.buttons}>
                            <button
                                className={styles.googleButton}
                                onClick={handleGoogleLogin}
                                disabled={isLoading}
                            >
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                                </svg>
                                {t.authPopup.googleButton}
                            </button>

                            <div className={styles.divider}>
                                <span>{t.authPopup.divider}</span>
                            </div>

                            <input
                                type="email"
                                placeholder={t.authPopup.emailPlaceholder}
                                className={styles.emailInput}
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                onKeyPress={(e) => e.key === 'Enter' && handleEmailSubmit()}
                                disabled={isLoading}
                            />

                            <button
                                className={styles.emailButton}
                                onClick={handleEmailSubmit}
                                disabled={isLoading || !email}
                            >
                                {isLoading ? t.authPopup.sending : t.authPopup.emailButton}
                            </button>
                        </div>

                        <p className={styles.terms}>
                            {t.authPopup.termsText} <a href="/terms">{t.authPopup.termsLink}</a> {t.authPopup.and} <a href="/privacy">{t.authPopup.privacyLink}</a>.
                        </p>
                    </div>

                    <div className={styles.imageSection}>
                        <img src="/images-optimized/ai-watermark-remover-signup.webp" alt="" className={styles.authImage} loading="lazy" decoding="async" />
                        <div className={styles.imageOverlay}></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
