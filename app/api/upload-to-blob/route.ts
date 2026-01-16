import { put } from '@vercel/blob'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
    try {
        const formData = await request.formData()
        const file = formData.get('file') as File

        if (!file) {
            return NextResponse.json(
                { error: 'No file provided' },
                { status: 400 }
            )
        }

        console.log('[upload-to-blob] Uploading file to Vercel Blob:', file.name, 'Size:', file.size)

        // Upload to Vercel Blob Storage
        // Files are automatically cleaned up after a period of inactivity
        const blob = await put(file.name, file, {
            access: 'public',
            addRandomSuffix: true,
        })

        console.log('[upload-to-blob] Upload successful:', blob.url)

        return NextResponse.json({
            success: true,
            url: blob.url
        })
    } catch (error) {
        console.error('[upload-to-blob] Error uploading to Vercel Blob:', error)
        console.error('[upload-to-blob] Error details:', {
            message: error instanceof Error ? error.message : 'Unknown error',
            stack: error instanceof Error ? error.stack : undefined,
            env: process.env.BLOB_READ_WRITE_TOKEN ? 'Token is set' : 'Token is NOT set'
        })
        return NextResponse.json(
            { error: 'Failed to upload file', details: error instanceof Error ? error.message : 'Unknown error' },
            { status: 500 }
        )
    }
}
