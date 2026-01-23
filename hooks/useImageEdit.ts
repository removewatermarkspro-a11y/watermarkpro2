import { useState } from 'react'
import { OperationType } from '@/lib/replicate'

interface UseImageEditParams {
    operationType: OperationType
    getAccessToken?: () => Promise<string | null>
}

interface EditImageOptions {
    imageFile: File
    userPrompt?: string
}

export function useImageEdit({ operationType, getAccessToken }: UseImageEditParams) {
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)
    const [editedImageUrl, setEditedImageUrl] = useState<string | null>(null)

    const editImage = async ({ imageFile, userPrompt }: EditImageOptions) => {
        setIsLoading(true)
        setError(null)
        setEditedImageUrl(null)

        try {
            // Get access token for authentication
            const token = getAccessToken ? await getAccessToken() : null
            if (!token) {
                throw new Error('Please log in to use this feature')
            }

            // Convert image to base64
            const base64 = await fileToBase64(imageFile)

            // Call API with Authorization header
            const response = await fetch('/api/edit-image', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
                body: JSON.stringify({
                    imageBase64: base64,
                    operationType,
                    userPrompt,
                }),
            })

            const data = await response.json()

            if (!response.ok) {
                throw new Error(data.error || 'Failed to edit image')
            }

            setEditedImageUrl(data.imageUrl)
            return data.imageUrl
        } catch (err) {
            const errorMessage = err instanceof Error ? err.message : 'An error occurred'
            setError(errorMessage)
            throw err
        } finally {
            setIsLoading(false)
        }
    }

    const reset = () => {
        setEditedImageUrl(null)
        setError(null)
    }

    return {
        editImage,
        isLoading,
        error,
        editedImageUrl,
        reset
    }
}

// Helper function to convert File to base64
function fileToBase64(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
        const reader = new FileReader()
        reader.onload = () => resolve(reader.result as string)
        reader.onerror = reject
        reader.readAsDataURL(file)
    })
}
