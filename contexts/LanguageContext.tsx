'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import { usePathname } from 'next/navigation'

export type Language = 'en' | 'fr' | 'de' | 'es' | 'pt' | 'ko' | 'no'

interface LanguageContextType {
    language: Language
    setLanguage: (lang: Language) => void
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
    const pathname = usePathname()
    // Default to 'en' during SSR to prevent hydration mismatch
    const [language, setLanguageState] = useState<Language>('en')
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
        // Derive language from URL on client side
        if (pathname) {
            if (pathname.startsWith('/fr/')) setLanguageState('fr')
            else if (pathname.startsWith('/de/')) setLanguageState('de')
            else if (pathname.startsWith('/es/')) setLanguageState('es')
            else if (pathname.startsWith('/pt/')) setLanguageState('pt')
            else if (pathname.startsWith('/ko/')) setLanguageState('ko')
            else if (pathname.startsWith('/no/')) setLanguageState('no')
            else setLanguageState('en')
        }
    }, [pathname])

    const setLanguage = (lang: Language) => {
        setLanguageState(lang)
    }

    return (
        <LanguageContext.Provider value={{ language, setLanguage }}>
            {children}
        </LanguageContext.Provider>
    )
}

export function useLanguage() {
    const context = useContext(LanguageContext)
    if (context === undefined) {
        throw new Error('useLanguage must be used within a LanguageProvider')
    }
    return context
}
