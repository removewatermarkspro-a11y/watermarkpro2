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

        console.log('[remove-sora-watermark API] Content-Type:', contentType)
        console.log('[remove-sora-watermark API] BLOB_READ_WRITE_TOKEN exists:', !!process.env.BLOB_READ_WRITE_TOKEN)

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

            console.log('[remove-sora-watermark API] File details:', {
                name: file.name,
                size: file.size,
                type: file.type
            })

            // Try to upload to Vercel Blob
            try {
                console.log('[remove-sora-watermark API] Attempting Vercel Blob upload...')
                console.log('[remove-sora-watermark API] Token length:', process.env.BLOB_READ_WRITE_TOKEN?.length || 0)

                const blob = await put(file.name, file, {
                    access: 'public',
                    addRandomSuffix: true,
                })

                videoUrl = blob.url
                console.log('[remove-sora-watermark API] Upload successful:', videoUrl)
            } catch (blobError: any) {
                console.error('[remove-sora-watermark API] Vercel Blob upload failed')
                console.error('[remove-sora-watermark API] Error type:', blobError?.constructor?.name)
                console.error('[remove-sora-watermark API] Error message:', blobError?.message)
                console.error('[remove-sora-watermark API] Error status:', blobError?.status)

                return NextResponse.json(
                    {
                        error: 'Failed to upload video to Vercel Blob',
                        details: blobError instanceof Error ? blobError.message : 'Unknown error',
                        debugInfo: {
                            hasToken: !!process.env.BLOB_READ_WRITE_TOKEN,
                            errorType: blobError?.constructor?.name,
                            errorStatus: blobError?.status
                        }
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

        // Consume 8 credits for video processing
        if (userId) {
            try {
                await consumeCreditServer(userId, 'sora-watermark-remover', undefined, undefined, 8)
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
