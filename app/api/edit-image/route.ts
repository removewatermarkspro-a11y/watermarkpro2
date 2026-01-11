import { NextRequest, NextResponse } from 'next/server'
import { editImage, OperationType } from '@/lib/replicate'
import { getServerUserCredits, consumeCreditServer } from '@/lib/supabase-server'

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

        // Check credits using server-side client (bypasses RLS)
        if (userId) {
            const credits = await getServerUserCredits(userId)
            console.log('[edit-image API] User credits:', credits, 'for userId:', userId?.substring(0, 8) + '...')

            if (credits < 1) {
                console.log('[edit-image API] Insufficient credits, returning 402')
                return NextResponse.json(
                    { error: 'Insufficient credits' },
                    { status: 402 }
                )
            }
        }

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

        // Consume credit using server-side client (bypasses RLS)
        if (userId) {
            await consumeCreditServer(userId, operationType)
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

