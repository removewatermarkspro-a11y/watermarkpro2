import { useState } from 'react'

export function useSoraWatermarkRemoval(userId?: string) {
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)
    const [cleanedVideoUrl, setCleanedVideoUrl] = useState<string | null>(null)

    const removeWatermark = async (videoFile: File) => {
        setIsLoading(true)
        setError(null)
        setCleanedVideoUrl(null)

        try {
            console.log('[useSoraWatermarkRemoval] Starting watermark removal for:', videoFile.name)

            // Step 1: Upload video to Vercel Blob Storage
            console.log('[useSoraWatermarkRemoval] Uploading to Vercel Blob Storage...')
            const uploadFormData = new FormData()
            uploadFormData.append('file', videoFile)

            const uploadResponse = await fetch('/api/upload-to-blob', {
                method: 'POST',
                body: uploadFormData,
            })

            const uploadData = await uploadResponse.json()

            if (!uploadResponse.ok || !uploadData.success) {
                throw new Error(uploadData.error || 'Failed to upload video')
            }

            const videoUrl = uploadData.url
            console.log('[useSoraWatermarkRemoval] Video uploaded to:', videoUrl)

            // Step 2: Call Sora watermark removal API with the video URL
            console.log('[useSoraWatermarkRemoval] Removing watermark...')
            const response = await fetch('/api/remove-sora-watermark', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    videoUrl,
                    userId
                }),
            })

            const data = await response.json()

            if (!response.ok) {
                throw new Error(data.error || 'Failed to remove watermark')
            }

            console.log('[useSoraWatermarkRemoval] Watermark removed successfully:', data.videoUrl)
            setCleanedVideoUrl(data.videoUrl)
            return data.videoUrl
        } catch (err) {
            const errorMessage = err instanceof Error ? err.message : 'An error occurred'
            console.error('[useSoraWatermarkRemoval] Error:', errorMessage)
            setError(errorMessage)
            throw err
        } finally {
            setIsLoading(false)
        }
    }

    const reset = () => {
        setCleanedVideoUrl(null)
        setError(null)
    }

    return {
        removeWatermark,
        isLoading,
        error,
        cleanedVideoUrl,
        reset
    }
}
