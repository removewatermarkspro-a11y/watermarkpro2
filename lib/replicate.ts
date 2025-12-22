import Replicate from 'replicate'

// Initialize Replicate client
const replicate = new Replicate({
    auth: process.env.REPLICATE_API_TOKEN || '',
})

// Prompt mapping for different operations
export const PROMPT_MAPPING = {
    'watermark-remover': 'enleve le filigrane',
    'remove-text': 'enleve le texte',
    'remove-background': 'enleve le fond',
    'image-upscaler': 'améliore la qualité de l\'image',
    // User input prompts for these:
    'remove-object': '', // User provides
    'replace-background': '', // User provides
    'auto-remove-people': '', // User provides
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
        let prompt = PROMPT_MAPPING[operationType]

        // Use user prompt for operations that require it
        if (['remove-object', 'replace-background', 'auto-remove-people'].includes(operationType)) {
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
            "qwen/qwen-image-edit-plus:latest",
            {
                input: {
                    image: [imageBase64],
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

        return {
            success: true,
            imageUrl: output[0]
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
