'use client'

import Link from 'next/link'
import { useState, useEffect, useRef } from 'react'
import styles from './Header.module.css'
import AuthPopup from './AuthPopup'

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [showAuthPopup, setShowAuthPopup] = useState(false)
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [credits, setCredits] = useState(0)
    const [userEmail, setUserEmail] = useState('')
    const [showUserMenu, setShowUserMenu] = useState(false)
    const userMenuRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        // Check authentication status on mount
        const authenticated = localStorage.getItem('userAuthenticated') === 'true'
        const userCredits = parseInt(localStorage.getItem('userCredits') || '0')
        const email = localStorage.getItem('userEmail') || 'user@example.com'
        setIsAuthenticated(authenticated)
        setCredits(userCredits)
        setUserEmail(email)
    }, [])

    useEffect(() => {
        // Listen for storage changes (when user logs in from other popups)
        const handleStorageChange = () => {
            const authenticated = localStorage.getItem('userAuthenticated') === 'true'
            const userCredits = parseInt(localStorage.getItem('userCredits') || '0')
            const email = localStorage.getItem('userEmail') || 'user@example.com'
            setIsAuthenticated(authenticated)
            setCredits(userCredits)
            setUserEmail(email)
        }

        // Listen for custom auth event
        window.addEventListener('authStateChanged', handleStorageChange)

        return () => {
            window.removeEventListener('authStateChanged', handleStorageChange)
        }
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
        { name: 'Watermark Remover', href: '/' },
        { name: 'Remove Background', href: '/remove-background' },
        { name: 'Replace Background', href: '/replace-background' },
        { name: 'Remove Object', href: '/remove-object' },
        { name: 'Remove Text', href: '/remove-text' },
        { name: 'Auto Remove People', href: '/auto-remove-people' },
        { name: 'Image Upscaler', href: '/image-upscaler' },
    ]

    const handleAuthClose = () => {
        setShowAuthPopup(false)
        // Only update auth state if user actually logged in (check localStorage)
        const authenticated = localStorage.getItem('userAuthenticated') === 'true'
        const userCredits = parseInt(localStorage.getItem('userCredits') || '0')
        const email = localStorage.getItem('userEmail') || ''

        if (authenticated) {
            setIsAuthenticated(true)
            setCredits(userCredits)
            setUserEmail(email)
        }
    }

    const handleLogout = () => {
        localStorage.removeItem('userAuthenticated')
        localStorage.removeItem('userCredits')
        localStorage.removeItem('userEmail')
        setIsAuthenticated(false)
        setCredits(0)
        setUserEmail('')
        setShowUserMenu(false)
    }

    const getUserName = () => {
        if (userEmail) {
            return userEmail.split('@')[0].charAt(0).toUpperCase() + userEmail.split('@')[0].slice(1)
        }
        return 'User'
    }

    return (
        <>
            <header className={styles.header}>
                <div className="container">
                    <nav className={styles.nav}>
                        <Link href="/" className={styles.logo}>
                            <span className={styles.logoIcon}>✨</span>
                            <span className={styles.logoText}>Remove watermark pro</span>
                        </Link>

                        <div className={styles.desktopMenu}>
                            <div className={styles.dropdown}>
                                <button className={styles.dropdownButton}>
                                    Features
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
                            <Link href="/pricing" className={styles.navLink}>Pricing</Link>
                            <Link href="/blog" className={styles.navLink}>Blog</Link>
                            <Link href="/#testimonials" className={styles.navLink}>Testimonials</Link>
                        </div>

                        <div className={styles.actions}>
                            {isAuthenticated && (
                                <div className={styles.creditsDisplay}>
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                                        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="#a855f7" stroke="#a855f7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                    <span>{credits} credit{credits !== 1 ? 's' : ''}</span>
                                </div>
                            )}
                            <button className={styles.navLink} style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9375rem' }}>
                                <span>🌍</span> English
                            </button>
                            {isAuthenticated ? (
                                <>
                                    <div className={styles.userMenuWrapper} ref={userMenuRef}>
                                        <button className={styles.userBtn} onClick={() => setShowUserMenu(!showUserMenu)}>
                                            User
                                        </button>
                                        {showUserMenu && (
                                            <div className={styles.userMenu}>
                                                <div className={styles.userMenuHeader}>
                                                    <div className={styles.userName}>{getUserName()}</div>
                                                    <div className={styles.userEmail}>{userEmail}</div>
                                                </div>
                                                <div className={styles.userMenuDivider}></div>
                                                <Link href="/account" className={styles.userMenuItem}>
                                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                                                        <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg>
                                                    My account
                                                </Link>
                                                <Link href="/support" className={styles.userMenuItem}>
                                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                                                        <path d="M9.09 9C9.3251 8.33167 9.78915 7.76811 10.4 7.40913C11.0108 7.05016 11.7289 6.91894 12.4272 7.03871C13.1255 7.15849 13.7588 7.52152 14.2151 8.06353C14.6713 8.60553 14.9211 9.29152 14.92 10C14.92 12 11.92 13 11.92 13M12 17H12.01M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg>
                                                    Support
                                                </Link>
                                                <div className={styles.userMenuDivider}></div>
                                                <button className={styles.unlockProBtn}>
                                                    Unlock Pro now
                                                </button>
                                                <div className={styles.userMenuDivider}></div>
                                                <button onClick={handleLogout} className={styles.logoutBtn}>
                                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                                                        <path d="M9 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H9M16 17L21 12M21 12L16 7M21 12H9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg>
                                                    Logout
                                                </button>
                                            </div>
                                        )}
                                    </div>
                                    <Link href="/pricing" className="btn btn-primary">Unlock Pro now</Link>
                                </>
                            ) : (
                                <>
                                    <button onClick={() => setShowAuthPopup(true)} className={styles.loginBtn}>Sign In</button>
                                    <button onClick={() => setShowAuthPopup(true)} className="btn btn-primary">Get Started Free</button>
                                </>
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
                                Pricing
                            </Link>
                            <Link href="/blog" className={styles.mobileMenuItem} onClick={() => setMobileMenuOpen(false)}>
                                Blog
                            </Link>
                            <div className={styles.mobileMenuActions}>
                                {isAuthenticated ? (
                                    <>
                                        <button className="btn btn-secondary">User</button>
                                        <button className="btn btn-primary">Unlock Pro</button>
                                    </>
                                ) : (
                                    <>
                                        <button onClick={() => { setShowAuthPopup(true); setMobileMenuOpen(false); }} className="btn btn-secondary">
                                            Sign In
                                        </button>
                                        <button onClick={() => { setShowAuthPopup(true); setMobileMenuOpen(false); }} className="btn btn-primary">
                                            Get Started Free
                                        </button>
                                    </>
                                )}
                            </div>
                        </div>
                    )}
                </div>
            </header>
            <AuthPopup isOpen={showAuthPopup} onClose={handleAuthClose} />
        </>
    )
}
