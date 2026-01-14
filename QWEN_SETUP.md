# Qwen Image Edit API - Setup Instructions

## ✅ What's Been Done

1. **Installed Replicate SDK** (`npm install replicate`)
2. **Created Replicate Service** (`lib/replicate.ts`)
   - Prompt mapping for all operations
   - Image editing with Qwen Image Edit Plus
   - Base64 conversion utilities

3. **Created API Route** (`app/api/edit-image/route.ts`)
   - Credit checking before processing
   - Credit consumption after success
   - Error handling

4. **Created React Hook** (`hooks/useImageEdit.ts`)
   - Easy integration in components
   - Loading states
   - Error handling

## 🔧 What YOU Need to Do

### 1. Create `.env.local` File

Create a file named `.env.local` in the project root with:

```
REPLICATE_API_TOKEN=your_replicate_token_here
NEXT_PUBLIC_SUPABASE_URL=https://placeholder.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=placeholder-key
```

### 2. Add to Vercel Environment Variables

Go to your Vercel project → Settings → Environment Variables

Add:
- **Name**: `REPLICATE_API_TOKEN`
- **Value**: `your_replicate_token_here`
- **Environments**: Production, Preview, Development

## 📝 How to Use in Components

```typescript
import { useImageEdit } from '@/hooks/useImageEdit'

function MyComponent() {
    const { editImage, isLoading, error, editedImageUrl } = useImageEdit({
        operationType: 'watermark-remover', // or 'remove-object', etc.
        userId: 'user-id-here' // optional
    })

    const handleEdit = async (file: File, prompt?: string) => {
        try {
            const url = await editImage({ 
                imageFile: file,
                userPrompt: prompt // only for remove-object, replace-background, auto-remove-people
            })
            console.log('Edited image:', url)
        } catch (err) {
            console.error('Error:', err)
        }
    }

    return (
        <div>
            {isLoading && <p>Processing...</p>}
            {error && <p>Error: {error}</p>}
            {editedImageUrl && <img src={editedImageUrl} alt="Edited" />}
        </div>
    )
}
```

## 🎯 Operation Types

**Automatic prompts** (no user input needed):
- `watermark-remover` → "enleve le filigrane"
- `remove-text` → "enleve le texte"
- `remove-background` → "enleve le fond"
- `image-upscaler` → "améliore la qualité de l'image"

**User prompts required**:
- `remove-object` → User types what to remove
- `replace-background` → User types new background
- `auto-remove-people` → User types instructions

## 💰 Credits

- Each API call consumes **1 credit**
- Credits are checked before processing
- Credits are consumed after successful edit
- Returns error if insufficient credits

## 🚀 Next Steps

1. Create `.env.local` file (see above)
2. Restart dev server: `npm run dev`
3. Update UI components to use the hook
4. Add text input fields for user prompts
5. Add loading spinners
6. Test with sample images
