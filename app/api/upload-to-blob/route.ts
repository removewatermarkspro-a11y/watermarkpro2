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

        console.log('[upload-to-blob] Uploading file:', file.name, 'Size:', file.size)

        // Upload to Vercel Blob with automatic deletion after 1 hour
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
        console.error('Error uploading to blob:', error)
        return NextResponse.json(
            { error: 'Failed to upload file' },
            { status: 500 }
        )
    }
}
