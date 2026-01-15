import { NextRequest, NextResponse } from 'next/server'
import { removeSoraWatermark } from '@/lib/replicate'
import { consumeCreditServer } from '@/lib/supabase-server'

export async function POST(request: NextRequest) {
    try {
        const formData = await request.formData()
        const videoFile = formData.get('video') as File
        const userId = formData.get('userId') as string

        console.log('[remove-sora-watermark API] Request received:', {
            userId: userId?.substring(0, 8) + '...',
            fileName: videoFile?.name,
            fileSize: videoFile?.size
        })

        // Validate required fields
        if (!videoFile) {
            return NextResponse.json(
                { error: 'Missing required field: video file' },
                { status: 400 }
            )
        }

        // Convert File to base64 data URL for Replicate
        const arrayBuffer = await videoFile.arrayBuffer()
        const buffer = Buffer.from(arrayBuffer)
        const base64 = buffer.toString('base64')
        const mimeType = videoFile.type || 'video/mp4'
        const dataUrl = `data:${mimeType};base64,${base64}`

        console.log('[remove-sora-watermark API] Video converted to data URL, size:', dataUrl.length)

        // Remove Sora watermark using Replicate
        const result = await removeSoraWatermark(dataUrl)

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
