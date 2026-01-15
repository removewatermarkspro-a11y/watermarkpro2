import Replicate from 'replicate'
import { NextRequest, NextResponse } from 'next/server'

// Initialize Replicate client
const replicate = new Replicate({
    auth: process.env.REPLICATE_API_TOKEN || '',
})

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

        console.log('[upload-to-blob] Uploading file to Replicate:', file.name, 'Size:', file.size)

        // Upload to Replicate using their file API
        const uploadedFile = await replicate.files.create(file)

        console.log('[upload-to-blob] Upload successful:', uploadedFile.urls.get)

        return NextResponse.json({
            success: true,
            url: uploadedFile.urls.get
        })
    } catch (error) {
        console.error('Error uploading to Replicate:', error)
        return NextResponse.json(
            { error: 'Failed to upload file' },
            { status: 500 }
        )
    }
}
