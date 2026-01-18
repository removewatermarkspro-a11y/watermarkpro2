import { createClient } from '@supabase/supabase-js'

// Server-side Supabase client with service role key
// This bypasses RLS and should only be used in server-side code (API routes)
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://placeholder.supabase.co'
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'placeholder-key'

// Create a supabase client with service role privileges for server-side operations
export const supabaseAdmin = createClient(supabaseUrl, supabaseServiceKey, {
    auth: {
        autoRefreshToken: false,
        persistSession: false
    }
})

// Server-side function to get user credits (bypasses RLS)
export const getServerUserCredits = async (userId: string): Promise<number> => {
    console.log('[getServerUserCredits] Fetching credits for userId:', userId?.substring(0, 8) + '...')

    const { data, error } = await supabaseAdmin
        .from('credits')
        .select('balance')
        .eq('user_id', userId)
        .single()

    if (error) {
        console.error('[getServerUserCredits] Error fetching credits:', error.message, error.code)
        // Return a high number to allow processing if there's an error (fail open for better UX)
        // The actual credit deduction will happen client-side
        return 999
    }

    console.log('[getServerUserCredits] Result:', data)
    return data?.balance || 0
}

// Server-side function to consume credits (bypasses RLS)
export const consumeCreditServer = async (
    userId: string,
    operationType: string,
    fileSize?: number,
    processingTime?: number,
    creditsToConsume: number = 1
): Promise<boolean> => {
    try {
        console.log('[consumeCreditServer] Consuming credit for userId:', userId?.substring(0, 8) + '...')

        // First, get current balance
        const { data: creditsData, error: creditsError } = await supabaseAdmin
            .from('credits')
            .select('balance')
            .eq('user_id', userId)
            .single()

        if (creditsError) {
            console.error('[consumeCreditServer] Error fetching credits:', creditsError)
            // Don't fail the request, just log the error
            return true
        }

        if (!creditsData || creditsData.balance < creditsToConsume) {
            console.error('[consumeCreditServer] Insufficient credits:', creditsData?.balance, 'needed:', creditsToConsume)
            return false
        }

        // Decrement credits
        const { error: updateError } = await supabaseAdmin
            .from('credits')
            .update({
                balance: creditsData.balance - creditsToConsume,
                last_updated: new Date().toISOString()
            })
            .eq('user_id', userId)

        if (updateError) {
            console.error('[consumeCreditServer] Error updating credits:', updateError)
            // Don't fail the request, just log the error
            return true
        }

        console.log('[consumeCreditServer] Credits consumed successfully:', creditsToConsume, 'new balance:', creditsData.balance - creditsToConsume)

        // Record usage history
        await supabaseAdmin
            .from('usage_history')
            .insert({
                user_id: userId,
                operation_type: operationType,
                credits_used: creditsToConsume,
                file_size: fileSize,
                processing_time: processingTime
            })

        return true
    } catch (error) {
        console.error('[consumeCreditServer] Error:', error)
        // Don't fail the request on error
        return true
    }
}
