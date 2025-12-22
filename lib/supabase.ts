import { createClient } from '@supabase/supabase-js'

// Supabase client configuration
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://placeholder.supabase.co'
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'placeholder-key'

// Create a single supabase client for interacting with your database
export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Database Types
export interface User {
    id: string
    email: string
    full_name?: string
    avatar_url?: string
    created_at: string
    updated_at: string
}

export interface Credits {
    id: string
    user_id: string
    balance: number
    lifetime_credits: number
    last_updated: string
}

export interface Subscription {
    id: string
    user_id: string
    plan_type: 'free' | 'pro'
    status: 'active' | 'cancelled' | 'expired'
    price: number
    billing_cycle_start: string
    billing_cycle_end: string
    created_at: string
    updated_at: string
}

export interface UsageHistory {
    id: string
    user_id: string
    operation_type: 'watermark_removal' | 'video_watermark_removal' | 'remove_text' | 'remove_object' | 'replace_background' | 'remove_background' | 'auto_remove_people' | 'image_upscaler'
    credits_used: number
    file_size?: number
    processing_time?: number
    created_at: string
}

export interface Favorite {
    id: string
    user_id: string
    operation_type: string
    original_image_url?: string
    processed_image_url: string
    title?: string
    notes?: string
    created_at: string
}

export interface DownloadHistory {
    id: string
    user_id: string
    operation_type: string
    file_url: string
    file_name: string
    file_size?: number
    downloaded_at: string
}

// Helper functions
export const getUserCredits = async (userId: string): Promise<number> => {
    const { data, error } = await supabase
        .from('credits')
        .select('balance')
        .eq('user_id', userId)
        .single()

    if (error) {
        console.error('Error fetching credits:', error)
        return 0
    }

    return data?.balance || 0
}

export const consumeCredit = async (
    userId: string,
    operationType: string,
    fileSize?: number,
    processingTime?: number
): Promise<boolean> => {
    try {
        // First, check if user has credits
        const { data: creditsData, error: creditsError } = await supabase
            .from('credits')
            .select('balance')
            .eq('user_id', userId)
            .single()

        if (creditsError || !creditsData || creditsData.balance < 1) {
            console.error('Insufficient credits or error:', creditsError)
            return false
        }

        // Decrement credit
        const { error: updateError } = await supabase
            .from('credits')
            .update({
                balance: creditsData.balance - 1,
                last_updated: new Date().toISOString()
            })
            .eq('user_id', userId)

        if (updateError) {
            console.error('Error updating credits:', updateError)
            return false
        }

        // Record usage history
        await supabase
            .from('usage_history')
            .insert({
                user_id: userId,
                operation_type: operationType,
                credits_used: 1,
                file_size: fileSize,
                processing_time: processingTime
            })

        return true
    } catch (error) {
        console.error('Error consuming credit:', error)
        return false
    }
}

export const addCredits = async (userId: string, amount: number): Promise<boolean> => {
    const { data, error } = await supabase
        .rpc('add_credits', {
            p_user_id: userId,
            p_amount: amount
        })

    if (error) {
        console.error('Error adding credits:', error)
        return false
    }

    return data
}

export const updateSubscription = async (
    userId: string,
    planType: 'free' | 'pro',
    price: number = 0
): Promise<boolean> => {
    const { data, error } = await supabase
        .rpc('update_subscription', {
            p_user_id: userId,
            p_plan_type: planType,
            p_price: price
        })

    if (error) {
        console.error('Error updating subscription:', error)
        return false
    }

    return data
}

export const addToFavorites = async (
    userId: string,
    operationType: string,
    processedImageUrl: string,
    originalImageUrl?: string,
    title?: string,
    notes?: string
): Promise<boolean> => {
    const { error } = await supabase
        .from('favorites')
        .insert({
            user_id: userId,
            operation_type: operationType,
            processed_image_url: processedImageUrl,
            original_image_url: originalImageUrl,
            title,
            notes
        })

    if (error) {
        console.error('Error adding to favorites:', error)
        return false
    }

    return true
}

export const getFavorites = async (userId: string): Promise<Favorite[]> => {
    const { data, error } = await supabase
        .from('favorites')
        .select('*')
        .eq('user_id', userId)
        .order('created_at', { ascending: false })

    if (error) {
        console.error('Error fetching favorites:', error)
        return []
    }

    return data || []
}

export const recordDownload = async (
    userId: string,
    operationType: string,
    fileUrl: string,
    fileName: string,
    fileSize?: number
): Promise<boolean> => {
    const { error } = await supabase
        .from('download_history')
        .insert({
            user_id: userId,
            operation_type: operationType,
            file_url: fileUrl,
            file_name: fileName,
            file_size: fileSize
        })

    if (error) {
        console.error('Error recording download:', error)
        return false
    }

    return true
}

export const getDownloadHistory = async (userId: string): Promise<DownloadHistory[]> => {
    const { data, error } = await supabase
        .from('download_history')
        .select('*')
        .eq('user_id', userId)
        .order('downloaded_at', { ascending: false })

    if (error) {
        console.error('Error fetching download history:', error)
        return []
    }

    return data || []
}

export const getUsageHistory = async (userId: string): Promise<UsageHistory[]> => {
    const { data, error } = await supabase
        .from('usage_history')
        .select('*')
        .eq('user_id', userId)
        .order('created_at', { ascending: false })
        .limit(50)

    if (error) {
        console.error('Error fetching usage history:', error)
        return []
    }

    return data || []
}
