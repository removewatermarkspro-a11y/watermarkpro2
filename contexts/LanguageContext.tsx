'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'

export type Language = 'en' | 'fr' | 'de' | 'es' | 'pt' | 'ko' | 'no'

interface LanguageContextType {
    language: Language
    setLanguage: (lang: Language) => void
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
    const [language, setLanguageState] = useState<Language>('en')
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)

        // Function to detect browser language and map to supported languages
        const detectBrowserLanguage = (): Language => {
            const browserLang = navigator.language.toLowerCase()

            // Map browser language codes to our supported languages
            if (browserLang.startsWith('fr')) return 'fr'
            if (browserLang.startsWith('de')) return 'de'
            if (browserLang.startsWith('es')) return 'es'
            if (browserLang.startsWith('pt')) return 'pt'
            if (browserLang.startsWith('ko')) return 'ko'
            if (browserLang.startsWith('no') || browserLang.startsWith('nb') || browserLang.startsWith('nn')) return 'no'

            // Default to English
            return 'en'
        }

        // Load language preference from localStorage, or use browser language
        const savedLanguage = localStorage.getItem('language') as Language
        if (savedLanguage && ['en', 'fr', 'de', 'es', 'pt', 'ko', 'no'].includes(savedLanguage)) {
            setLanguageState(savedLanguage)
        } else {
            // No saved preference, use browser language
            const detectedLanguage = detectBrowserLanguage()
            setLanguageState(detectedLanguage)
            // Save the detected language
            localStorage.setItem('language', detectedLanguage)
        }
    }, [])

    const setLanguage = (lang: Language) => {
        setLanguageState(lang)
        localStorage.setItem('language', lang)
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
