import { NextRequest, NextResponse } from 'next/server'
import { editImage, OperationType } from '@/lib/replicate'
<<<<<<< HEAD
import { consumeCredit, getUserCredits } from '@/lib/supabase'
=======
import { consumeCreditServer } from '@/lib/supabase-server'
>>>>>>> feature/qwen-api-integration

export async function POST(request: NextRequest) {
    try {
        const body = await request.json()
        const { imageBase64, operationType, userPrompt, userId } = body

<<<<<<< HEAD
=======
        console.log('[edit-image API] Request received:', { operationType, userId: userId?.substring(0, 8) + '...' })

>>>>>>> feature/qwen-api-integration
        // Validate required fields
        if (!imageBase64 || !operationType) {
            return NextResponse.json(
                { error: 'Missing required fields: imageBase64 and operationType' },
                { status: 400 }
            )
        }

<<<<<<< HEAD
        // Check if user has credits (if userId provided)
        if (userId) {
            const credits = await getUserCredits(userId)
            if (credits < 1) {
                return NextResponse.json(
                    { error: 'Insufficient credits' },
                    { status: 402 }
                )
            }
        }
=======
        // NOTE: Credit check is now handled client-side via AuthContext
        // Server-side check removed to avoid RLS issues with Supabase
        // The client already validates credits before calling this API
>>>>>>> feature/qwen-api-integration

        // Edit the image using Replicate
        const result = await editImage({
            imageBase64,
            operationType: operationType as OperationType,
            userPrompt
        })

        if (!result.success) {
            return NextResponse.json(
                { error: result.error || 'Failed to edit image' },
                { status: 500 }
            )
        }

<<<<<<< HEAD
        // Consume credit if userId provided
        if (userId) {
            await consumeCredit(userId, operationType)
=======
        // Try to consume credit (don't fail if it doesn't work)
        if (userId) {
            try {
                await consumeCreditServer(userId, operationType)
            } catch (creditError) {
                console.error('[edit-image API] Credit consumption failed, continuing anyway:', creditError)
            }
>>>>>>> feature/qwen-api-integration
        }

        return NextResponse.json({
            success: true,
            imageUrl: result.imageUrl
        })
    } catch (error) {
        console.error('Error in edit-image API:', error)
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        )
    }
}
<<<<<<< HEAD
=======


>>>>>>> feature/qwen-api-integration
