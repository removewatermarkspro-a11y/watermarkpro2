'use client'

import Link from 'next/link'
import { useState } from 'react'
import styles from './Header.module.css'

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    const features = [
        { name: 'Watermark Remover', href: '/watermark-remover' },
        { name: 'Remove Background', href: '/remove-background' },
        { name: 'Replace Background', href: '/replace-background' },
        { name: 'Remove Object', href: '/remove-object' },
        { name: 'Remove Text', href: '/remove-text' },
        { name: 'Auto Remove People', href: '/auto-remove-people' },
        { name: 'Image Upscaler', href: '/image-upscaler' },
    ]

    return (
        <header className={styles.header}>
            <div className="container">
                <nav className={styles.nav}>
                    <Link href="/" className={styles.logo}>
                        <span className={styles.logoIcon}>✨</span>
                        <span className={styles.logoText}>AI Image Editor</span>
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
                    </div>

                    <div className={styles.actions}>
                        <Link href="/login" className={styles.loginBtn}>Sign In</Link>
                        <Link href="/signup" className="btn btn-primary">Get Started Free</Link>
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
                            <Link href="/login" className="btn btn-secondary" onClick={() => setMobileMenuOpen(false)}>
                                Sign In
                            </Link>
                            <Link href="/signup" className="btn btn-primary" onClick={() => setMobileMenuOpen(false)}>
                                Get Started Free
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </header>
    )
}
