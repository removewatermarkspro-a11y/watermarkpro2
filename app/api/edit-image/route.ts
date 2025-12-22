import { NextRequest, NextResponse } from 'next/server'
import { editImage, OperationType } from '@/lib/replicate'
import { consumeCredit, getUserCredits } from '@/lib/supabase'

export async function POST(request: NextRequest) {
    try {
        const body = await request.json()
        const { imageBase64, operationType, userPrompt, userId } = body

        // Validate required fields
        if (!imageBase64 || !operationType) {
            return NextResponse.json(
                { error: 'Missing required fields: imageBase64 and operationType' },
                { status: 400 }
            )
        }

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

        // Consume credit if userId provided
        if (userId) {
            await consumeCredit(userId, operationType)
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
