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
    'auto-remove-people': 'Enlève toutes les personnes de cette image',
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
 */
export async function editImage({
    imageBase64,
    operationType,
    userPrompt
}: EditImageParams): Promise<EditImageResult> {
    try {
        // Get the prompt based on operation type
        let prompt: string = PROMPT_MAPPING[operationType]

        // Use user prompt for operations that require it
        if (['remove-object', 'replace-background'].includes(operationType)) {
            if (!userPrompt || userPrompt.trim() === '') {
                return {
                    success: false,
                    error: 'User prompt is required for this operation'
                }
            }
            prompt = userPrompt
        }

        // Call Qwen Image Edit Plus model
        const output = await replicate.run(
            "qwen/qwen-image-edit-plus",
            {
                input: {
                    image: [imageBase64], // Qwen expects an array of images
                    prompt: prompt,
                    go_fast: true,
                    aspect_ratio: "match_input_image",
                    output_format: "webp",
                    output_quality: 95,
                    disable_safety_checker: false
                }
            }
        ) as string[]

        // Check if we got a result
        if (!output || output.length === 0) {
            return {
                success: false,
                error: 'No image was generated'
            }
        }

        console.log('[Replicate] Raw output:', JSON.stringify(output, null, 2))
        console.log('[Replicate] Output type:', typeof output)
        console.log('[Replicate] Output[0]:', output[0])
        console.log('[Replicate] Output[0] type:', typeof output[0])

        // Extract the URL - Replicate might return an object with a url property
        let imageUrl: string
        if (typeof output[0] === 'string') {
            imageUrl = output[0]
        } else if (output[0] && typeof output[0] === 'object' && 'url' in output[0]) {
            imageUrl = (output[0] as any).url
        } else {
            console.error('[Replicate] Unexpected output format:', output[0])
            return {
                success: false,
                error: 'Unexpected output format from Replicate'
            }
        }

        console.log('[Replicate] Final imageUrl:', imageUrl)

        return {
            success: true,
            imageUrl: imageUrl
        }
    } catch (error) {
        console.error('Error editing image with Replicate:', error)
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
