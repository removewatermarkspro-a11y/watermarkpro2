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

            // Send file directly to remove-sora-watermark API
            const formData = new FormData()
            formData.append('file', videoFile)
            if (userId) {
                formData.append('userId', userId)
            }

            console.log('[useSoraWatermarkRemoval] Uploading and processing video...')
            const response = await fetch('/api/remove-sora-watermark', {
                method: 'POST',
                body: formData,
            })

            const data = await response.json()

            if (!response.ok) {
                throw new Error(data.error || data.details || 'Failed to remove watermark')
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
