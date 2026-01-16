'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from '@/lib/supabase'

export default function AuthCallback() {
    const router = useRouter()

    useEffect(() => {
        // Handle the OAuth callback
        supabase.auth.getSession().then(({ data: { session } }) => {
            // Try to get the stored redirect URL
            const storedRedirectUrl = localStorage.getItem('auth_redirect_url')

            // Clean up the stored URL
            if (storedRedirectUrl) {
                localStorage.removeItem('auth_redirect_url')
            }

            // Determine redirect URL
            let redirectUrl = storedRedirectUrl

            // If no stored URL, fall back to language-based default
            if (!redirectUrl) {
                const userLanguage = localStorage.getItem('language') || 'en'

                redirectUrl = '/watermark-remover' // default English
                if (userLanguage === 'fr') redirectUrl = '/fr/enlever-filigrane'
                else if (userLanguage === 'de') redirectUrl = '/de/wasserzeichen-entfernen'
                else if (userLanguage === 'es') redirectUrl = '/es/eliminar-marca-agua'
                else if (userLanguage === 'pt') redirectUrl = '/pt/remover-marca-dagua'
                else if (userLanguage === 'ko') redirectUrl = '/ko/watermark-remover'
                else if (userLanguage === 'no') redirectUrl = '/no/fjern-vannmerke'
            }

            if (session) {
                // Redirect to the determined page after successful auth
                router.push(redirectUrl)
            } else {
                // If no session, redirect anyway
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
