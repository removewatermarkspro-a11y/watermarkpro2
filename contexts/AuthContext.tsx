'use client'

import { createContext, useContext, useEffect, useState } from 'react'
import { supabase, getUserCredits } from '@/lib/supabase'
import type { User } from '@supabase/supabase-js'

interface AuthContextType {
    user: User | null
    credits: number
    loading: boolean
    signInWithGoogle: () => Promise<void>
    signInWithEmail: (email: string) => Promise<{ error?: string }>
    signOut: () => Promise<void>
    refreshCredits: () => Promise<void>
    getAccessToken: () => Promise<string | null>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const [user, setUser] = useState<User | null>(null)
    const [credits, setCredits] = useState(0)
    const [loading, setLoading] = useState(true)

    // Fetch credits when user changes
    const fetchCredits = async (userId: string) => {
        const userCredits = await getUserCredits(userId)
        setCredits(userCredits)
    }

    // Initialize auth state
    useEffect(() => {
        // Check active session
        supabase.auth.getSession().then(({ data: { session } }) => {
            setUser(session?.user ?? null)
            if (session?.user) {
                fetchCredits(session.user.id)
            }
            setLoading(false)
        })

        // Listen for auth changes
        const {
            data: { subscription },
        } = supabase.auth.onAuthStateChange((_event, session) => {
            setUser(session?.user ?? null)
            if (session?.user) {
                fetchCredits(session.user.id)
            } else {
                setCredits(0)
            }
        })

        return () => subscription.unsubscribe()
    }, [])

    // Sign in with Google OAuth
    const signInWithGoogle = async () => {
        // Store current page URL for post-auth redirect
        localStorage.setItem('auth_redirect_url', window.location.pathname)

        await supabase.auth.signInWithOAuth({
            provider: 'google',
            options: {
                redirectTo: `${window.location.origin}/auth/callback`,
            },
        })
    }

    // Sign in with Magic Link (email)
    const signInWithEmail = async (email: string) => {
        // Store current page URL for post-auth redirect
        localStorage.setItem('auth_redirect_url', window.location.pathname)

        const { error } = await supabase.auth.signInWithOtp({
            email,
            options: {
                emailRedirectTo: `${window.location.origin}/auth/callback`,
            },
        })

        if (error) {
            return { error: error.message }
        }

        return {}
    }

    // Sign out
    const signOut = async () => {
        await supabase.auth.signOut()
        setUser(null)
        setCredits(0)
    }

    // Refresh credits
    const refreshCredits = async () => {
        if (user) {
            await fetchCredits(user.id)
        }
    }

    // Get access token for API calls
    const getAccessToken = async (): Promise<string | null> => {
        const { data: { session } } = await supabase.auth.getSession()
        return session?.access_token ?? null
    }

    const value = {
        user,
        credits,
        loading,
        signInWithGoogle,
        signInWithEmail,
        signOut,
        refreshCredits,
        getAccessToken,
    }

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

// Hook to use auth context
export function useAuth() {
    const context = useContext(AuthContext)
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider')
    }
    return context
}
