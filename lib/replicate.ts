import Replicate from 'replicate'

// Initialize Replicate client
const replicate = new Replicate({
    auth: process.env.REPLICATE_API_TOKEN || '',
})

// Prompt mapping for different operations
export const PROMPT_MAPPING = {
    'watermark-remover': 'Enlève le filigrane de cette image',
    'remove-text': 'Enlève tout le texte de cette image',
    'remove-background': 'Enlève l\'arrière-plan de cette image',
    'image-upscaler': 'Améliore la qualité et la résolution de cette image',
    'auto-remove-people': '', // User provides specific instructions
    // User input prompts for these:
    'remove-object': '', // User provides
    'replace-background': '', // User provides
} as const

export type OperationType = keyof typeof PROMPT_MAPPING

interface EditImageParams {
    imageBase64: string
    operationType: OperationType
    userPrompt?: string
}

interface EditImageResult {
    success: boolean
    imageUrl?: string
    error?: string
}

/**
 * Edit an image using Qwen Image Edit Plus model via Replicate
 * Includes automatic retry logic for rate limiting (429 errors)
 */
export async function editImage(
    { imageBase64, operationType, userPrompt }: EditImageParams,
    retryCount = 0,
    maxRetries = 3
): Promise<EditImageResult> {
    try {
        // Get the prompt based on operation type
        let prompt: string = PROMPT_MAPPING[operationType]

        // Handle auto-remove-people: use user prompt if provided, otherwise use default
        if (operationType === 'auto-remove-people') {
            if (userPrompt && userPrompt.trim() !== '') {
                prompt = userPrompt
            } else {
                // Default: remove all people
                prompt = 'Enlève toutes les personnes de cette image'
            }
        }
        // Use user prompt for operations that require it
        else if (['remove-object', 'replace-background'].includes(operationType)) {
            if (!userPrompt || userPrompt.trim() === '') {
                return {
                    success: false,
                    error: 'User prompt is required for this operation'
                }
            }
            prompt = userPrompt
        }

        // Call Qwen Image Edit Plus model using predictions API
        const prediction = await replicate.predictions.create({
            model: "qwen/qwen-image-edit-plus",
            input: {
                image: [imageBase64], // Qwen expects an array of images
                prompt: prompt,
                go_fast: true,
                aspect_ratio: "match_input_image",
                output_format: "webp",
                output_quality: 95,
                disable_safety_checker: false
            }
        })

        // Wait for the prediction to complete
        const finalPrediction = await replicate.wait(prediction)

        console.log('[Replicate] Prediction completed:', finalPrediction.status)
        console.log('[Replicate] Output:', finalPrediction.output)

        // Check if we got a result
        if (!finalPrediction.output || finalPrediction.output.length === 0) {
            return {
                success: false,
                error: 'No image was generated'
            }
        }

        // The output should now be an array of URLs
        const imageUrl = finalPrediction.output[0]
        console.log('[Replicate] Final imageUrl:', imageUrl)

        if (typeof imageUrl !== 'string') {
            console.error('[Replicate] Unexpected output type:', typeof imageUrl)
            return {
                success: false,
                error: 'Unexpected output format from Replicate'
            }
        }

        return {
            success: true,
            imageUrl: imageUrl
        }
    } catch (error: any) {
        console.error('Error editing image with Replicate:', error)

        // Handle rate limiting (429 errors)
        // Replicate throws ApiError with status 429 in the error message
        const is429Error = error?.message?.includes('429') ||
            error?.message?.includes('Too Many Requests') ||
            error?.message?.includes('throttled')

        if (is429Error && retryCount < maxRetries) {
            // Try to extract retry_after from error message
            let retryAfter = 4 // Default to 4 seconds
            const retryMatch = error?.message?.match(/retry_after[\":]?\s*(\d+)/)
            if (retryMatch) {
                retryAfter = parseInt(retryMatch[1])
            }

            const waitTime = retryAfter * 1000 // Convert to milliseconds

            console.log(`[Replicate] Rate limited. Retrying in ${retryAfter}s... (Attempt ${retryCount + 1}/${maxRetries})`)

            // Wait before retrying
            await new Promise(resolve => setTimeout(resolve, waitTime))

            // Retry the request
            return editImage({ imageBase64, operationType, userPrompt }, retryCount + 1, maxRetries)
        }

        return {
            success: false,
            error: error instanceof Error ? error.message : 'Unknown error occurred'
        }
    }
}

/**
 * Convert File to base64 data URL
 */
export async function fileToBase64(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
        const reader = new FileReader()
        reader.onload = () => resolve(reader.result as string)
        reader.onerror = reject
        reader.readAsDataURL(file)
    })
}

/**
 * Remove Sora watermark from video using uglyrobot/sora2-watermark-remover model
 * Uses direct REST API instead of SDK to avoid endpoint issues
 */
export async function removeSoraWatermark(
    videoUrl: string,
    retryCount = 0,
    maxRetries = 3
): Promise<{ success: boolean; videoUrl?: string; error?: string }> {
    try {
        console.log('[Replicate] Starting Sora watermark removal for video:', videoUrl)
        console.log('[Replicate] Using direct REST API')

        const apiToken = process.env.REPLICATE_API_TOKEN
        if (!apiToken) {
            return {
                success: false,
                error: 'REPLICATE_API_TOKEN is not set'
            }
        }

        // Step 1: Create prediction using direct REST API with model identifier
        const createResponse = await fetch('https://api.replicate.com/v1/predictions', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${apiToken}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                model: "uglyrobot/sora2-watermark-remover",
                input: {
                    video: videoUrl
                }
            })
        })

        if (!createResponse.ok) {
            const errorData = await createResponse.json()
            console.error('[Replicate] API error:', errorData)
            throw new Error(`Replicate API error: ${JSON.stringify(errorData)}`)
        }

        const prediction = await createResponse.json()
        console.log('[Replicate] Prediction created:', prediction.id)

        // Poll for completion
        let finalPrediction = prediction
        while (finalPrediction.status !== 'succeeded' && finalPrediction.status !== 'failed' && finalPrediction.status !== 'canceled') {
            await new Promise(resolve => setTimeout(resolve, 2000))

            const pollResponse = await fetch(`https://api.replicate.com/v1/predictions/${prediction.id}`, {
                headers: {
                    'Authorization': `Bearer ${apiToken}`,
                }
            })

            finalPrediction = await pollResponse.json()
            console.log('[Replicate] Prediction status:', finalPrediction.status)
        }

        if (finalPrediction.status === 'failed') {
            return {
                success: false,
                error: finalPrediction.error || 'Prediction failed'
            }
        }

        const cleanedVideoUrl = typeof finalPrediction.output === 'string'
            ? finalPrediction.output
            : JSON.stringify(finalPrediction.output)

        console.log('[Replicate] Cleaned video URL:', cleanedVideoUrl)

        return {
            success: true,
            videoUrl: cleanedVideoUrl
        }
    } catch (error: any) {
        console.error('Error removing Sora watermark with Replicate:', error)

        // Handle rate limiting (429 errors)
        const is429Error = error?.message?.includes('429') ||
            error?.message?.includes('Too Many Requests') ||
            error?.message?.includes('throttled')

        if (is429Error && retryCount < maxRetries) {
            let retryAfter = 4
            const retryMatch = error?.message?.match(/retry_after[\":]?\s*(\d+)/)
            if (retryMatch) {
                retryAfter = parseInt(retryMatch[1])
            }

            const waitTime = retryAfter * 1000

            console.log(`[Replicate] Rate limited. Retrying in ${retryAfter}s... (Attempt ${retryCount + 1}/${maxRetries})`)

            await new Promise(resolve => setTimeout(resolve, waitTime))

            return removeSoraWatermark(videoUrl, retryCount + 1, maxRetries)
        }

        return {
            success: false,
            error: error instanceof Error ? error.message : 'Unknown error occurred'
        }
    }
}
