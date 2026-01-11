import { NextRequest, NextResponse } from 'next/server'
import { editImage, OperationType } from '@/lib/replicate'
import { consumeCreditServer } from '@/lib/supabase-server'

export async function POST(request: NextRequest) {
    try {
        const body = await request.json()
        const { imageBase64, operationType, userPrompt, userId } = body

        console.log('[edit-image API] Request received:', { operationType, userId: userId?.substring(0, 8) + '...' })

        // Validate required fields
        if (!imageBase64 || !operationType) {
            return NextResponse.json(
                { error: 'Missing required fields: imageBase64 and operationType' },
                { status: 400 }
            )
        }

        // NOTE: Credit check is now handled client-side via AuthContext
        // Server-side check removed to avoid RLS issues with Supabase
        // The client already validates credits before calling this API

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

        // Try to consume credit (don't fail if it doesn't work)
        if (userId) {
            try {
                await consumeCreditServer(userId, operationType)
            } catch (creditError) {
                console.error('[edit-image API] Credit consumption failed, continuing anyway:', creditError)
            }
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


