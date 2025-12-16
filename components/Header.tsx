'use client'

import Link from 'next/link'
import { useState, useEffect, useRef } from 'react'
import styles from './Header.module.css'
import AuthPopup from './AuthPopup'
import { useAuth } from '@/contexts/AuthContext'
import { useLanguage } from '@/contexts/LanguageContext'
import { translations } from '@/locales/translations'

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [showAuthPopup, setShowAuthPopup] = useState(false)
    const [mounted, setMounted] = useState(false)
    const { language, setLanguage } = useLanguage()
    const t = (translations as any)[language]
    const { user, credits, signOut } = useAuth()
    const [showUserMenu, setShowUserMenu] = useState(false)
    const userMenuRef = useRef<HTMLDivElement>(null)

    const getUserInitial = () => {
        if (user?.email) {
            return user.email.charAt(0).toUpperCase()
        }
        return 'U'
    }

    // Prevent hydration mismatch by waiting for client-side mount
    useEffect(() => {
        setMounted(true)
    }, [])

    useEffect(() => {
        // Close user menu when clicking outside
        const handleClickOutside = (event: MouseEvent) => {
            if (userMenuRef.current && !userMenuRef.current.contains(event.target as Node)) {
                setShowUserMenu(false)
            }
        }

        if (showUserMenu) {
            document.addEventListener('mousedown', handleClickOutside)
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [showUserMenu])

    const features = [
        { name: t.header.featuresMenu.watermarkRemover, href: '/' },
        { name: t.header.featuresMenu.videoWatermark, href: '/remove-watermark-video' },
        { name: t.header.featuresMenu.removeBackground, href: '/remove-background' },
        { name: t.header.featuresMenu.replaceBackground, href: '/replace-background' },
        { name: t.header.featuresMenu.removeObject, href: '/remove-object' },
        { name: t.header.featuresMenu.removeText, href: '/remove-text' },
        { name: t.header.featuresMenu.autoRemovePeople, href: '/auto-remove-people' },
        { name: t.header.featuresMenu.imageUpscaler, href: '/image-upscaler' },
    ]

    const handleAuthClose = () => {
        setShowAuthPopup(false)
    }

    const handleLogout = async () => {
        await signOut()
        setShowUserMenu(false)
    }

    const getUserName = () => {
        if (user?.email) {
            return user.email.split('@')[0].charAt(0).toUpperCase() + user.email.split('@')[0].slice(1)
        }
        return 'User'
    }

    return (
        <>
            <header className={styles.header}>
                <div className="container">
                    <nav className={styles.nav}>
                        <Link href="/" className={styles.logo}>
                            <img src="/logo.png" alt="Remove Watermark Pro" className={styles.logoIcon} />
                            <span className={styles.logoText}>Remove watermark pro</span>
                        </Link>

                        <div className={styles.desktopMenu}>
                            <div className={styles.dropdown}>
                                <button className={styles.dropdownButton}>
                                    {t.header.features}
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                        <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                    </svg>
                                </button>
                                <div className={styles.dropdownContent}>
                                    {features.map((feature) => (
                                        <Link key={feature.href} href={feature.href} className={styles.dropdownItem}>
                                            {feature.name}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                            <Link href="/pricing" className={styles.navLink}>{t.header.pricing}</Link>
                            <Link href="/blog" className={styles.navLink}>{t.header.blog}</Link>
                            <Link href="/#testimonials" className={styles.navLink}>{t.header.testimonials}</Link>
                        </div>

                        <div className={styles.actions}>
                            {user && (
                                <div className={styles.creditsDisplay}>
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                                        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="#a855f7" stroke="#a855f7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                    <span>{credits} {t.header.credits}</span>
                                </div>
                            )}
                            <div className={styles.dropdown}>
                                <button className={styles.languageButton}>
                                    <img
                                        src={language === 'en' ? "https://flagcdn.com/us.svg" : language === 'fr' ? "https://flagcdn.com/fr.svg" : language === 'de' ? "https://flagcdn.com/de.svg" : language === 'es' ? "https://flagcdn.com/es.svg" : language === 'pt' ? "https://flagcdn.com/pt.svg" : language === 'ko' ? "https://flagcdn.com/kr.svg" : "https://flagcdn.com/no.svg"}
                                        alt={language === 'en' ? "US Flag" : language === 'fr' ? "French Flag" : language === 'de' ? "German Flag" : language === 'es' ? "Spanish Flag" : language === 'pt' ? "Portuguese Flag" : language === 'ko' ? "Korean Flag" : "Norwegian Flag"}
                                        width={20}
                                        height={15}
                                        style={{ display: 'block' }}
                                    />
                                    {language === 'en' ? 'English' : language === 'fr' ? 'Français' : language === 'de' ? 'Deutsch' : language === 'es' ? 'Español' : language === 'pt' ? 'Português' : language === 'ko' ? '한국어' : 'Norsk'}
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                        <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                    </svg>
                                </button>
                                <div className={styles.dropdownContent}>
                                    <button onClick={() => setLanguage('en')} className={styles.languageItem}>
                                        <img src="https://flagcdn.com/us.svg" alt="US Flag" width={20} height={15} />
                                        English
                                    </button>
                                    <button onClick={() => setLanguage('fr')} className={styles.languageItem}>
                                        <img src="https://flagcdn.com/fr.svg" alt="French Flag" width={20} height={15} />
                                        Français
                                    </button>
                                    <button onClick={() => setLanguage('de')} className={styles.languageItem}>
                                        <img src="https://flagcdn.com/de.svg" alt="German Flag" width={20} height={15} />
                                        Deutsch
                                    </button>
                                    <button onClick={() => setLanguage('es')} className={styles.languageItem}>
                                        <img src="https://flagcdn.com/es.svg" alt="Spanish Flag" width={20} height={15} />
                                        Español
                                    </button>
                                    <button onClick={() => setLanguage('pt')} className={styles.languageItem}>
                                        <img src="https://flagcdn.com/pt.svg" alt="Portuguese Flag" width={20} height={15} />
                                        Português
                                    </button>
                                    <button onClick={() => setLanguage('ko')} className={styles.languageItem}>
                                        <img src="https://flagcdn.com/kr.svg" alt="Korean Flag" width={20} height={15} />
                                        한국어
                                    </button>
                                    <button onClick={() => setLanguage('no')} className={styles.languageItem}>
                                        <img src="https://flagcdn.com/no.svg" alt="Norwegian Flag" width={20} height={15} />
                                        Norsk
                                    </button>
                                </div>
                            </div>
                            {mounted && user ? (
                                <>
                                    <div className={styles.userMenuWrapper} ref={userMenuRef}>
                                        <button className={styles.userBtn} onClick={() => setShowUserMenu(!showUserMenu)}>
                                            {getUserInitial()}
                                        </button>
                                        {showUserMenu && (
                                            <div className={styles.userMenu}>
                                                <div className={styles.userMenuHeader}>
                                                    <div className={styles.userName}>{getUserName()}</div>
                                                    <div className={styles.userEmail}>{user.email}</div>
                                                </div>
                                                <div className={styles.userMenuDivider}></div>
                                                <Link href="/account" className={styles.userMenuItem}>
                                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                                                        <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg>
                                                    {t.header.account}
                                                </Link>
                                                <Link href="/support" className={styles.userMenuItem}>
                                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                                                        <path d="M9.09 9C9.3251 8.33167 9.78915 7.76811 10.4 7.40913C11.0108 7.05016 11.7289 6.91894 12.4272 7.03871C13.1255 7.15849 13.7588 7.52152 14.2151 8.06353C14.6713 8.60553 14.9211 9.29152 14.92 10C14.92 12 11.92 13 11.92 13M12 17H12.01M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg>
                                                    Support
                                                </Link>
                                                <div className={styles.userMenuDivider}></div>
                                                <Link href="/pricing" className={styles.unlockProBtn} style={{ boxShadow: 'var(--shadow-glow)' }} onClick={() => setShowUserMenu(false)}>
                                                    {t.header.unlockPro}
                                                </Link>
                                                <div className={styles.userMenuDivider}></div>
                                                <button onClick={handleLogout} className={styles.logoutBtn}>
                                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                                                        <path d="M9 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H9M16 17L21 12M21 12L16 7M21 12H9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg>
                                                    {t.header.logout}
                                                </button>
                                            </div>
                                        )}
                                    </div>
                                    <Link href="/pricing" className="btn btn-primary" style={{ boxShadow: 'var(--shadow-glow)' }}>{t.header.unlockPro}</Link>
                                </>
                            ) : mounted ? (
                                <button onClick={() => setShowAuthPopup(true)} className="btn btn-primary">{t.header.signIn}</button>
                            ) : (
                                <div style={{ width: '100px', height: '40px' }}></div>
                            )}
                        </div>

                        <button
                            className={styles.mobileMenuBtn}
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            aria-label="Toggle menu"
                        >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                {mobileMenuOpen ? (
                                    <path d="M6 18L18 6M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                ) : (
                                    <path d="M3 12H21M3 6H21M3 18H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                )}
                            </svg>
                        </button>
                    </nav>

                    {mobileMenuOpen && (
                        <div className={styles.mobileMenu}>
                            {user && (
                                <div className={styles.mobileCreditsDisplay}>
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                                        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="#a855f7" stroke="#a855f7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                    <span>{credits} {t.header.credits}</span>
                                </div>
                            )}
                            <div className={styles.mobileMenuSection}>
                                <p className={styles.mobileMenuTitle}>Features</p>
                                {features.map((feature) => (
                                    <Link
                                        key={feature.href}
                                        href={feature.href}
                                        className={styles.mobileMenuItem}
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        {feature.name}
                                    </Link>
                                ))}
                            </div>
                            <Link href="/pricing" className={styles.mobileMenuItem} onClick={() => setMobileMenuOpen(false)}>
                                {t.header.pricing}
                            </Link>
                            <Link href="/blog" className={styles.mobileMenuItem} onClick={() => setMobileMenuOpen(false)}>
                                {t.header.blog}
                            </Link>
                            <div className={styles.mobileMenuActions}>
                                {mounted && user ? (
                                    <>
                                        <Link href="/account" className="btn btn-secondary" onClick={() => setMobileMenuOpen(false)}>
                                            {getUserInitial()}
                                        </Link>
                                        <Link href="/pricing" className="btn btn-primary" onClick={() => setMobileMenuOpen(false)}>
                                            {t.header.unlockPro}
                                        </Link>
                                    </>
                                ) : mounted ? (
                                    <button onClick={() => { setShowAuthPopup(true); setMobileMenuOpen(false); }} className="btn btn-primary">
                                        {t.header.signIn}
                                    </button>
                                ) : null}
                            </div>
                        </div>
                    )}
                </div>
            </header>
            <AuthPopup isOpen={showAuthPopup} onClose={handleAuthClose} />
        </>
    )
}
