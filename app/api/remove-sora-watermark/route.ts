import { NextRequest, NextResponse } from 'next/server'
import { removeSoraWatermark } from '@/lib/replicate'
import { consumeCreditServer } from '@/lib/supabase-server'

export async function POST(request: NextRequest) {
    try {
        const body = await request.json()
        const { videoUrl, userId } = body

        console.log('[remove-sora-watermark API] Request received:', {
            userId: userId?.substring(0, 8) + '...',
            videoUrl: videoUrl?.substring(0, 50) + '...'
        })

        // Validate required fields
        if (!videoUrl) {
            return NextResponse.json(
                { error: 'Missing required field: videoUrl' },
                { status: 400 }
            )
        }

        // Remove Sora watermark using Replicate
        const result = await removeSoraWatermark(videoUrl)

        if (!result.success) {
            return NextResponse.json(
                { error: result.error || 'Failed to remove watermark' },
                { status: 500 }
            )
        }

        // Try to consume credit (don't fail if it doesn't work)
        if (userId) {
            try {
                await consumeCreditServer(userId, 'sora-watermark-remover')
            } catch (creditError) {
                console.error('[remove-sora-watermark API] Credit consumption failed, continuing anyway:', creditError)
            }
        }

        return NextResponse.json({
            success: true,
            videoUrl: result.videoUrl
        })
    } catch (error) {
        console.error('Error in remove-sora-watermark API:', error)
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        )
    }
}
