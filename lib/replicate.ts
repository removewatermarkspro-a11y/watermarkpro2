import Replicate from 'replicate'

// Initialize Replicate client
const replicate = new Replicate({
    auth: process.env.REPLICATE_API_TOKEN || '',
})

// Prompt mapping for different operations (French prompts for Qwen API)
// Note: sora-remover and video-watermark will use a different API
export const PROMPT_MAPPING = {
    'watermark-remover': 'Supprime complètement le filigrane et la marque d\'eau de cette image tout en préservant la qualité originale',
    'remove-text': 'Efface tout le texte visible de cette image en reconstruisant naturellement l\'arrière-plan',
    'remove-background': 'Supprime l\'arrière-plan de cette image et rends-le transparent, garde uniquement le sujet principal',
    'image-upscaler': 'Améliore la qualité, la netteté et la résolution de cette image en 4K avec des détails plus fins',
    'auto-remove-people': 'Détecte et supprime toutes les personnes visibles de cette image en reconstruisant l\'arrière-plan naturellement',
    // User input prompts for these (prefix will be added):
    'remove-object': '', // User provides what object to remove
    'replace-background': '', // User provides what background to add
} as const

// Prefix for user-provided prompts
const USER_PROMPT_PREFIX = {
    'remove-object': 'Supprime de cette image: ',
    'replace-background': 'Remplace l\'arrière-plan de cette image par: ',
}

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
            // Add French prefix to user prompt for better results
            const prefix = USER_PROMPT_PREFIX[operationType as keyof typeof USER_PROMPT_PREFIX]
            prompt = prefix + userPrompt
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
