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
        { name: t.header.featuresMenu.watermarkRemover, href: language === 'fr' ? '/fr/enlever-filigrane' : language === 'de' ? '/de/wasserzeichen-entfernen' : language === 'es' ? '/es/eliminar-marca-agua' : language === 'pt' ? '/pt/remover-marca-dagua' : language === 'ko' ? '/ko/watermark-remover' : language === 'no' ? '/no/fjern-vannmerke' : '/watermark-remover' },
        { name: t.header.featuresMenu.videoWatermark, href: language === 'fr' ? '/fr/enlever-filigrane-video' : language === 'de' ? '/de/wasserzeichen-entfernen-video' : language === 'es' ? '/es/eliminar-marca-agua-video' : language === 'pt' ? '/pt/remover-marca-dagua-video' : language === 'ko' ? '/ko/watermark-remover-video' : language === 'no' ? '/no/fjern-vannmerke-video' : '/remove-watermark-video' },
        { name: t.header.featuresMenu.removeBackground, href: language === 'fr' ? '/fr/supprimer-arriere-plan' : language === 'de' ? '/de/hintergrund-entfernen' : language === 'es' ? '/es/eliminar-fondo-imagen' : language === 'pt' ? '/pt/remover-fundo-imagem' : language === 'ko' ? '/ko/background-remover' : language === 'no' ? '/no/fjern-bakgrunn' : '/background-remover' },
        { name: t.header.featuresMenu.replaceBackground, href: language === 'fr' ? '/fr/changer-arriere-plan' : language === 'de' ? '/de/hintergrund-wechseln' : language === 'es' ? '/es/cambiar-fondo-imagen' : language === 'pt' ? '/pt/trocar-fundo-imagem' : language === 'ko' ? '/ko/background-changer-ai' : language === 'no' ? '/no/endre-bakgrunn' : '/background-changer-ai' },
        { name: t.header.featuresMenu.removeObject, href: language === 'fr' ? '/fr/supprimer-objet-image' : language === 'de' ? '/de/objekt-entfernen' : language === 'es' ? '/es/eliminar-objeto-imagen' : language === 'pt' ? '/pt/remover-objeto-imagem' : language === 'ko' ? '/ko/object-remover-ai' : language === 'no' ? '/no/fjern-objekt-fra-bilde' : '/object-remover-ai' },
        { name: t.header.featuresMenu.removeText, href: language === 'fr' ? '/fr/supprimer-texte-image' : language === 'de' ? '/de/text-entfernen' : language === 'es' ? '/es/eliminar-texto-imagen' : language === 'pt' ? '/pt/remover-texto-imagem' : language === 'ko' ? '/ko/text-remover-ai' : language === 'no' ? '/no/fjern-tekst-fra-bilde' : '/text-remover-ai' },
        { name: t.header.featuresMenu.autoRemovePeople, href: language === 'fr' ? '/fr/effacer-personnes-photo' : language === 'de' ? '/de/personen-entfernen' : language === 'es' ? '/es/eliminar-personas-foto' : language === 'pt' ? '/pt/remover-pessoas-foto' : language === 'ko' ? '/ko/people-remover-ai' : language === 'no' ? '/no/fjern-personer-foto' : '/people-remover-ai' },
        { name: t.header.featuresMenu.imageUpscaler, href: language === 'fr' ? '/fr/agrandir-image' : language === 'de' ? '/de/bild-hochskalieren' : language === 'es' ? '/es/mejorar-calidad-imagen' : language === 'pt' ? '/pt/melhorar-qualidade-imagem' : language === 'ko' ? '/ko/image-upscaler-ai' : language === 'no' ? '/no/forbedre-bildekvalitet' : '/image-upscaler-ai' },
        { name: t.header.featuresMenu.soraRemover, href: language === 'fr' ? '/fr/enlever-filigrane-sora' : language === 'de' ? '/de/sora-wasserzeichen-entfernen' : language === 'es' ? '/es/eliminar-marca-agua-sora' : language === 'pt' ? '/pt/remover-marca-dagua-sora' : language === 'ko' ? '/ko/sora-watermark-remover' : language === 'no' ? '/no/fjern-sora-vannmerke' : '/sora-watermark-remover' },
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

    // Map current page to language-specific URLs
    const getLanguageUrl = (targetLang: string) => {
        const pathname = window.location.pathname

        // Watermark remover pages
        if (pathname === '/watermark-remover' || pathname === '/' || pathname === '/fr/enlever-filigrane' || pathname === '/de/wasserzeichen-entfernen' || pathname === '/es/eliminar-marca-agua' || pathname === '/pt/remover-marca-dagua' || pathname === '/ko/watermark-remover' || pathname === '/no/fjern-vannmerke') {
            if (targetLang === 'en') return '/watermark-remover'
            if (targetLang === 'fr') return '/fr/enlever-filigrane'
            if (targetLang === 'de') return '/de/wasserzeichen-entfernen'
            if (targetLang === 'es') return '/es/eliminar-marca-agua'
            if (targetLang === 'pt') return '/pt/remover-marca-dagua'
            if (targetLang === 'ko') return '/ko/watermark-remover'
            if (targetLang === 'no') return '/no/fjern-vannmerke'
        }

        // Video watermark remover pages
        if (pathname === '/watermark-remover-video' || pathname === '/fr/enlever-filigrane-video' || pathname === '/de/wasserzeichen-entfernen-video' || pathname === '/es/eliminar-marca-agua-video' || pathname === '/pt/remover-marca-dagua-video' || pathname === '/ko/watermark-remover-video' || pathname === '/no/fjern-vannmerke-video') {
            if (targetLang === 'en') return '/watermark-remover-video'
            if (targetLang === 'fr') return '/fr/enlever-filigrane-video'
            if (targetLang === 'de') return '/de/wasserzeichen-entfernen-video'
            if (targetLang === 'es') return '/es/eliminar-marca-agua-video'
            if (targetLang === 'pt') return '/pt/remover-marca-dagua-video'
            if (targetLang === 'ko') return '/ko/watermark-remover-video'
            if (targetLang === 'no') return '/no/fjern-vannmerke-video'
        }

        // Sora watermark remover pages
        if (pathname === '/sora-watermark-remover' || pathname === '/fr/enlever-filigrane-sora' || pathname === '/de/sora-wasserzeichen-entfernen' || pathname === '/es/eliminar-marca-agua-sora' || pathname === '/pt/remover-marca-dagua-sora' || pathname === '/ko/sora-watermark-remover' || pathname === '/no/fjern-sora-vannmerke') {
            if (targetLang === 'en') return '/sora-watermark-remover'
            if (targetLang === 'fr') return '/fr/enlever-filigrane-sora'
            if (targetLang === 'de') return '/de/sora-wasserzeichen-entfernen'
            if (targetLang === 'es') return '/es/eliminar-marca-agua-sora'
            if (targetLang === 'pt') return '/pt/remover-marca-dagua-sora'
            if (targetLang === 'ko') return '/ko/sora-watermark-remover'
            if (targetLang === 'no') return '/no/fjern-sora-vannmerke'
        }


        // Text remover AI pages
        if (pathname === '/text-remover-ai' || pathname === '/fr/supprimer-texte-image' || pathname === '/de/text-entfernen' || pathname === '/es/eliminar-texto-imagen' || pathname === '/pt/remover-texto-imagem' || pathname === '/ko/text-remover-ai' || pathname === '/no/fjern-tekst-fra-bilde') {
            if (targetLang === 'en') return '/text-remover-ai'
            if (targetLang === 'fr') return '/fr/supprimer-texte-image'
            if (targetLang === 'de') return '/de/text-entfernen'
            if (targetLang === 'es') return '/es/eliminar-texto-imagen'
            if (targetLang === 'pt') return '/pt/remover-texto-imagem'
            if (targetLang === 'ko') return '/ko/text-remover-ai'
            if (targetLang === 'no') return '/no/fjern-tekst-fra-bilde'
        }


        // Object remover AI pages
        if (pathname === '/object-remover-ai' || pathname === '/fr/supprimer-objet-image' || pathname === '/de/objekt-entfernen' || pathname === '/es/eliminar-objeto-imagen' || pathname === '/pt/remover-objeto-imagem' || pathname === '/ko/object-remover-ai' || pathname === '/no/fjern-objekt-fra-bilde') {
            if (targetLang === 'en') return '/object-remover-ai'
            if (targetLang === 'fr') return '/fr/supprimer-objet-image'
            if (targetLang === 'de') return '/de/objekt-entfernen'
            if (targetLang === 'es') return '/es/eliminar-objeto-imagen'
            if (targetLang === 'pt') return '/pt/remover-objeto-imagem'
            if (targetLang === 'ko') return '/ko/object-remover-ai'
            if (targetLang === 'no') return '/no/fjern-objekt-fra-bilde'
        }


        // Background changer AI pages
        if (pathname === '/background-changer-ai' || pathname === '/fr/changer-arriere-plan' || pathname === '/de/hintergrund-wechseln' || pathname === '/es/cambiar-fondo-imagen' || pathname === '/pt/trocar-fundo-imagem' || pathname === '/ko/background-changer-ai' || pathname === '/no/endre-bakgrunn') {
            if (targetLang === 'en') return '/background-changer-ai'
            if (targetLang === 'fr') return '/fr/changer-arriere-plan'
            if (targetLang === 'de') return '/de/hintergrund-wechseln'
            if (targetLang === 'es') return '/es/cambiar-fondo-imagen'
            if (targetLang === 'pt') return '/pt/trocar-fundo-imagem'
            if (targetLang === 'ko') return '/ko/background-changer-ai'
            if (targetLang === 'no') return '/no/endre-bakgrunn'
        }


        // Background remover pages
        if (pathname === '/background-remover' || pathname === '/fr/supprimer-arriere-plan' || pathname === '/de/hintergrund-entfernen' || pathname === '/es/eliminar-fondo-imagen' || pathname === '/pt/remover-fundo-imagem' || pathname === '/ko/background-remover' || pathname === '/no/fjern-bakgrunn') {
            if (targetLang === 'en') return '/background-remover'
            if (targetLang === 'fr') return '/fr/supprimer-arriere-plan'
            if (targetLang === 'de') return '/de/hintergrund-entfernen'
            if (targetLang === 'es') return '/es/eliminar-fondo-imagen'
            if (targetLang === 'pt') return '/pt/remover-fundo-imagem'
            if (targetLang === 'ko') return '/ko/background-remover'
            if (targetLang === 'no') return '/no/fjern-bakgrunn'
        }

        // People remover AI pages
        if (pathname === '/people-remover-ai' || pathname === '/fr/effacer-personnes-photo' || pathname === '/de/personen-entfernen' || pathname === '/es/eliminar-personas-foto' || pathname === '/pt/remover-pessoas-foto' || pathname === '/ko/people-remover-ai' || pathname === '/no/fjern-personer-foto') {
            if (targetLang === 'en') return '/people-remover-ai'
            if (targetLang === 'fr') return '/fr/effacer-personnes-photo'
            if (targetLang === 'de') return '/de/personen-entfernen'
            if (targetLang === 'es') return '/es/eliminar-personas-foto'
            if (targetLang === 'pt') return '/pt/remover-pessoas-foto'
            if (targetLang === 'ko') return '/ko/people-remover-ai'
            if (targetLang === 'no') return '/no/fjern-personer-foto'
        }

        // Image upscaler AI pages
        if (pathname === '/image-upscaler-ai' || pathname === '/fr/agrandir-image' || pathname === '/de/bild-hochskalieren' || pathname === '/es/mejorar-calidad-imagen' || pathname === '/pt/melhorar-qualidade-imagem' || pathname === '/ko/image-upscaler-ai' || pathname === '/no/forbedre-bildekvalitet') {
            if (targetLang === 'en') return '/image-upscaler-ai'
            if (targetLang === 'fr') return '/fr/agrandir-image'
            if (targetLang === 'de') return '/de/bild-hochskalieren'
            if (targetLang === 'es') return '/es/mejorar-calidad-imagen'
            if (targetLang === 'pt') return '/pt/melhorar-qualidade-imagem'
            if (targetLang === 'ko') return '/ko/image-upscaler-ai'
            if (targetLang === 'no') return '/no/forbedre-bildekvalitet'
        }

        // Pricing pages
        if (pathname === '/pricing' || pathname === '/fr/tarifs' || pathname === '/de/preise' || pathname === '/es/precios' || pathname === '/pt/precos' || pathname === '/ko/pricing' || pathname === '/no/priser') {
            if (targetLang === 'en') return '/pricing'
            if (targetLang === 'fr') return '/fr/tarifs'
            if (targetLang === 'de') return '/de/preise'
            if (targetLang === 'es') return '/es/precios'
            if (targetLang === 'pt') return '/pt/precos'
            if (targetLang === 'ko') return '/ko/pricing'
            if (targetLang === 'no') return '/no/priser'
        }

        // Account pages
        if (pathname === '/account' || pathname === '/fr/compte' || pathname === '/de/konto' || pathname === '/es/cuenta' || pathname === '/pt/conta' || pathname === '/ko/account' || pathname === '/no/konto') {
            if (targetLang === 'en') return '/account'
            if (targetLang === 'fr') return '/fr/compte'
            if (targetLang === 'de') return '/de/konto'
            if (targetLang === 'es') return '/es/cuenta'
            if (targetLang === 'pt') return '/pt/conta'
            if (targetLang === 'ko') return '/ko/account'
            if (targetLang === 'no') return '/no/konto'
        }

        // Support pages
        if (pathname === '/support' || pathname === '/fr/support' || pathname === '/de/support' || pathname === '/es/soporte' || pathname === '/pt/suporte' || pathname === '/ko/support' || pathname === '/no/support') {
            if (targetLang === 'en') return '/support'
            if (targetLang === 'fr') return '/fr/support'
            if (targetLang === 'de') return '/de/support'
            if (targetLang === 'es') return '/es/soporte'
            if (targetLang === 'pt') return '/pt/suporte'
            if (targetLang === 'ko') return '/ko/support'
            if (targetLang === 'no') return '/no/support'
        }

        // For other pages, just return current path (will be updated when those pages are migrated)
        return pathname
    }

    const handleLanguageChange = (newLang: string) => {
        setLanguage(newLang as any)
        const newUrl = getLanguageUrl(newLang)
        if (newUrl !== window.location.pathname) {
            window.location.href = newUrl
        }
    }

    return (
        <>
            <header className={styles.header}>
                <div className="container">
                    <nav className={styles.nav}>
                        <Link href={language === 'fr' ? '/fr/enlever-filigrane' : language === 'de' ? '/de/wasserzeichen-entfernen' : language === 'es' ? '/es/eliminar-marca-agua' : language === 'pt' ? '/pt/remover-marca-dagua' : language === 'ko' ? '/ko/watermark-remover' : language === 'no' ? '/no/fjern-vannmerke' : '/watermark-remover'} className={styles.logo}>
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
                            <Link href={language === 'fr' ? '/fr/tarifs' : language === 'de' ? '/de/preise' : language === 'es' ? '/es/precios' : language === 'pt' ? '/pt/precos' : language === 'ko' ? '/ko/pricing' : language === 'no' ? '/no/priser' : '/pricing'} className={styles.navLink}>{t.header.pricing}</Link>
                            <Link href="/blog" className={styles.navLink}>{t.header.blog}</Link>
                            <Link href="#testimonials" className={styles.navLink}>{t.header.testimonials}</Link>
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
                                        style={{ display: 'block' }} loading="lazy" decoding="async" />
                                    {language === 'en' ? 'English' : language === 'fr' ? 'Français' : language === 'de' ? 'Deutsch' : language === 'es' ? 'Español' : language === 'pt' ? 'Português' : language === 'ko' ? '한국어' : 'Norsk'}
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                        <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                    </svg>
                                </button>
                                <div className={styles.dropdownContent}>
                                    <button onClick={() => handleLanguageChange('en')} className={styles.languageItem}>
                                        <img src="https://flagcdn.com/us.svg" alt="US Flag" width={20} height={15} />
                                        English
                                    </button>
                                    <button onClick={() => handleLanguageChange('fr')} className={styles.languageItem}>
                                        <img src="https://flagcdn.com/fr.svg" alt="French Flag" width={20} height={15} />
                                        Français
                                    </button>
                                    <button onClick={() => handleLanguageChange('de')} className={styles.languageItem}>
                                        <img src="https://flagcdn.com/de.svg" alt="German Flag" width={20} height={15} />
                                        Deutsch
                                    </button>
                                    <button onClick={() => handleLanguageChange('es')} className={styles.languageItem}>
                                        <img src="https://flagcdn.com/es.svg" alt="Spanish Flag" width={20} height={15} />
                                        Español
                                    </button>
                                    <button onClick={() => handleLanguageChange('pt')} className={styles.languageItem}>
                                        <img src="https://flagcdn.com/pt.svg" alt="Portuguese Flag" width={20} height={15} />
                                        Português
                                    </button>
                                    <button onClick={() => handleLanguageChange('ko')} className={styles.languageItem}>
                                        <img src="https://flagcdn.com/kr.svg" alt="Korean Flag" width={20} height={15} />
                                        한국어
                                    </button>
                                    <button onClick={() => handleLanguageChange('no')} className={styles.languageItem}>
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
                                                <Link href={language === 'fr' ? '/fr/compte' : language === 'de' ? '/de/konto' : language === 'es' ? '/es/cuenta' : language === 'pt' ? '/pt/conta' : language === 'ko' ? '/ko/account' : language === 'no' ? '/no/konto' : '/account'} className={styles.userMenuItem} onClick={() => setShowUserMenu(false)}>
                                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                                                        <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg>
                                                    {t.header.account}
                                                </Link>
                                                <Link href={language === 'fr' ? '/fr/support' : language === 'de' ? '/de/support' : language === 'es' ? '/es/soporte' : language === 'pt' ? '/pt/suporte' : language === 'ko' ? '/ko/support' : language === 'no' ? '/no/support' : '/support'} className={styles.userMenuItem} onClick={() => setShowUserMenu(false)}>
                                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                                                        <path d="M9.09 9C9.3251 8.33167 9.78915 7.76811 10.4 7.40913C11.0108 7.05016 11.7289 6.91894 12.4272 7.03871C13.1255 7.15849 13.7588 7.52152 14.2151 8.06353C14.6713 8.60553 14.9211 9.29152 14.92 10C14.92 12 11.92 13 11.92 13M12 17H12.01M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg>
                                                    Support
                                                </Link>
                                                <div className={styles.userMenuDivider}></div>
                                                <Link href={language === 'fr' ? '/fr/tarifs' : language === 'de' ? '/de/preise' : language === 'es' ? '/es/precios' : language === 'pt' ? '/pt/precos' : language === 'ko' ? '/ko/pricing' : language === 'no' ? '/no/priser' : '/pricing'} className={styles.unlockProBtn} style={{ boxShadow: 'var(--shadow-glow)' }} onClick={() => setShowUserMenu(false)}>
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
                                    <Link href={language === 'fr' ? '/fr/tarifs' : language === 'de' ? '/de/preise' : language === 'es' ? '/es/precios' : language === 'pt' ? '/pt/precos' : language === 'ko' ? '/ko/pricing' : language === 'no' ? '/no/priser' : '/pricing'} className="btn btn-primary" style={{ boxShadow: 'var(--shadow-glow)' }}>{t.header.unlockPro}</Link>
                                </>
                            ) : mounted ? (
                                <button onClick={() => setShowAuthPopup(true)} className="btn btn-primary">{t.header.signIn}</button>
                            ) : (
                                <div style={{ width: '100px', height: '40px' }}></div>
                            )}
                        </div >

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
                    </nav >

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
                            <Link href={language === 'fr' ? '/fr/tarifs' : language === 'de' ? '/de/preise' : language === 'es' ? '/es/precios' : language === 'pt' ? '/pt/precos' : language === 'ko' ? '/ko/pricing' : language === 'no' ? '/no/priser' : '/pricing'} className={styles.mobileMenuItem} onClick={() => setMobileMenuOpen(false)}>
                                {t.header.pricing}
                            </Link>
                            <Link href="/blog" className={styles.mobileMenuItem} onClick={() => setMobileMenuOpen(false)}>
                                {t.header.blog}
                            </Link>

                            <div className={styles.mobileMenuSection}>
                                <p className={styles.mobileMenuTitle}>{t.header.language || 'Language'}</p>
                                <button onClick={() => handleLanguageChange('en')} className={styles.mobileMenuItem} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', textAlign: 'left' }}>
                                    <img src="https://flagcdn.com/us.svg" alt="US Flag" width={20} height={15} />
                                    English
                                </button>
                                <button onClick={() => handleLanguageChange('fr')} className={styles.mobileMenuItem} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', textAlign: 'left' }}>
                                    <img src="https://flagcdn.com/fr.svg" alt="French Flag" width={20} height={15} />
                                    Français
                                </button>
                                <button onClick={() => handleLanguageChange('de')} className={styles.mobileMenuItem} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', textAlign: 'left' }}>
                                    <img src="https://flagcdn.com/de.svg" alt="German Flag" width={20} height={15} />
                                    Deutsch
                                </button>
                                <button onClick={() => handleLanguageChange('es')} className={styles.mobileMenuItem} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', textAlign: 'left' }}>
                                    <img src="https://flagcdn.com/es.svg" alt="Spanish Flag" width={20} height={15} />
                                    Español
                                </button>
                                <button onClick={() => handleLanguageChange('pt')} className={styles.mobileMenuItem} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', textAlign: 'left' }}>
                                    <img src="https://flagcdn.com/pt.svg" alt="Portuguese Flag" width={20} height={15} />
                                    Português
                                </button>
                                <button onClick={() => handleLanguageChange('ko')} className={styles.mobileMenuItem} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', textAlign: 'left' }}>
                                    <img src="https://flagcdn.com/kr.svg" alt="Korean Flag" width={20} height={15} />
                                    한국어
                                </button>
                                <button onClick={() => handleLanguageChange('no')} className={styles.mobileMenuItem} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', textAlign: 'left' }}>
                                    <img src="https://flagcdn.com/no.svg" alt="Norwegian Flag" width={20} height={15} />
                                    Norsk
                                </button>
                            </div>

                            <div className={styles.mobileMenuActions}>
                                {mounted && user ? (
                                    <>
                                        <Link href="/account" className="btn btn-secondary" onClick={() => setMobileMenuOpen(false)}>
                                            {getUserInitial()}
                                        </Link>
                                        <Link href={language === 'fr' ? '/fr/tarifs' : language === 'de' ? '/de/preise' : language === 'es' ? '/es/precios' : language === 'pt' ? '/pt/precos' : language === 'ko' ? '/ko/pricing' : language === 'no' ? '/no/priser' : '/pricing'} className="btn btn-primary" onClick={() => setMobileMenuOpen(false)}>
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
                </div >
            </header >
            <AuthPopup isOpen={showAuthPopup} onClose={handleAuthClose} />
        </>
    )
}
