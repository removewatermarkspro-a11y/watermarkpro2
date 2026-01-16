import { NextRequest, NextResponse } from 'next/server'
import { removeSoraWatermark } from '@/lib/replicate'
import { consumeCreditServer } from '@/lib/supabase-server'
import { put } from '@vercel/blob'

// Increase max duration for video processing (Next.js 14 syntax)
export const maxDuration = 300 // 5 minutes

export async function POST(request: NextRequest) {
    try {
        const contentType = request.headers.get('content-type') || ''
        let videoUrl: string
        let userId: string | undefined

        // Handle both FormData (file upload) and JSON (URL)
        if (contentType.includes('multipart/form-data')) {
            console.log('[remove-sora-watermark API] Received file upload')

            const formData = await request.formData()
            const file = formData.get('file') as File
            userId = formData.get('userId') as string | undefined

            if (!file) {
                return NextResponse.json(
                    { error: 'No file provided' },
                    { status: 400 }
                )
            }

            console.log('[remove-sora-watermark API] Uploading file to Vercel Blob:', file.name, 'Size:', file.size)

            // Try to upload to Vercel Blob
            try {
                const blob = await put(file.name, file, {
                    access: 'public',
                    addRandomSuffix: true,
                })
                videoUrl = blob.url
                console.log('[remove-sora-watermark API] Upload successful:', videoUrl)
            } catch (blobError) {
                console.error('[remove-sora-watermark API] Vercel Blob upload failed:', blobError)
                return NextResponse.json(
                    {
                        error: 'Failed to upload video. Please check Vercel Blob configuration.',
                        details: blobError instanceof Error ? blobError.message : 'Unknown error'
                    },
                    { status: 500 }
                )
            }
        } else {
            // Handle JSON request with URL
            const body = await request.json()
            videoUrl = body.videoUrl
            userId = body.userId

            console.log('[remove-sora-watermark API] Request received:', {
                userId: userId?.substring(0, 8) + '...',
                videoUrl: videoUrl?.substring(0, 50) + '...'
            })
        }

        // Validate required fields
        if (!videoUrl) {
            return NextResponse.json(
                { error: 'Missing required field: videoUrl or file' },
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
            {
                error: 'Internal server error',
                details: error instanceof Error ? error.message : 'Unknown error'
            },
            { status: 500 }
        )
    }
}
