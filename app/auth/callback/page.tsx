'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from '@/lib/supabase'

export default function AuthCallback() {
    const router = useRouter()

    useEffect(() => {
        // Handle the OAuth callback
        supabase.auth.getSession().then(({ data: { session } }) => {
            // Get user's language preference from localStorage
            const userLanguage = localStorage.getItem('language') || 'en'

            // Determine redirect URL based on language
            let redirectUrl = '/watermark-remover' // default English
            if (userLanguage === 'fr') redirectUrl = '/fr/enlever-filigrane'
            else if (userLanguage === 'de') redirectUrl = '/de/wasserzeichen-entfernen'
            else if (userLanguage === 'es') redirectUrl = '/es/eliminar-marca-agua'
            else if (userLanguage === 'pt') redirectUrl = '/pt/remover-marca-dagua'
            else if (userLanguage === 'ko') redirectUrl = '/ko/watermark-remover'
            else if (userLanguage === 'no') redirectUrl = '/no/fjern-vannmerke'

            if (session) {
                // Redirect to language-appropriate page after successful auth
                router.push(redirectUrl)
            } else {
                // If no session, redirect to language-appropriate page anyway
                router.push(redirectUrl)
            }
        })
    }, [router])

    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '100vh',
            fontSize: '18px'
        }}>
            <p>Authenticating...</p>
        </div>
    )
}
