import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''

/**
 * Verifies the user's authentication token from the request headers
 * Returns the user object if authenticated, null otherwise
 */
export async function verifyAuth(request: NextRequest): Promise<{ userId: string; email?: string } | null> {
    try {
        // Get the authorization header
        const authHeader = request.headers.get('authorization')

        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            console.log('[verifyAuth] No valid authorization header found')
            return null
        }

        const token = authHeader.replace('Bearer ', '')

        if (!token) {
            console.log('[verifyAuth] No token in authorization header')
            return null
        }

        // Create a Supabase client and verify the token
        const supabase = createClient(supabaseUrl, supabaseAnonKey, {
            auth: {
                autoRefreshToken: false,
                persistSession: false
            }
        })

        const { data: { user }, error } = await supabase.auth.getUser(token)

        if (error || !user) {
            console.log('[verifyAuth] Token verification failed:', error?.message)
            return null
        }

        console.log('[verifyAuth] User authenticated:', user.id.substring(0, 8) + '...')
        return { userId: user.id, email: user.email }
    } catch (error) {
        console.error('[verifyAuth] Error:', error)
        return null
    }
}

/**
 * Creates a 401 Unauthorized response
 */
export function unauthorizedResponse(message: string = 'Unauthorized - Please log in') {
    return NextResponse.json(
        { error: message },
        { status: 401 }
    )
}
