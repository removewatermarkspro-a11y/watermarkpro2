'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from '@/lib/supabase'

export default function AuthCallback() {
    const router = useRouter()

    useEffect(() => {
        // Handle the OAuth callback
        supabase.auth.getSession().then(({ data: { session } }) => {
            if (session) {
                // Redirect to home page after successful auth
                router.push('/')
            } else {
                // If no session, redirect to home anyway
                router.push('/')
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
