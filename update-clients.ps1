
# Script PowerShell pour mettre à jour les composants clients avec l'API Qwen
# Ce script applique les mêmes modifications à tous les composants similaires

$componentsToUpdate = @(
    @{
        Path          = "c:\Users\victo\Desktop\REMOVE WATER\app\background-remover\BackgroundRemoverClient.tsx"
        OperationType = "remove-background"
        DownloadName  = "background-removed-image.png"
    },
    @{
        Path          = "c:\Users\victo\Desktop\REMOVE WATER\app\image-upscaler-ai\ImageUpscalerClient.tsx"
        OperationType = "image-upscaler"
        DownloadName  = "upscaled-image.png"
    },
    @{
        Path          = "c:\Users\victo\Desktop\REMOVE WATER\app\people-remover-ai\PeopleRemoverClient.tsx"
        OperationType = "auto-remove-people"
        DownloadName  = "people-removed-image.png"
    }
)

foreach ($component in $componentsToUpdate) {
    Write-Host "Updating $($component.Path)..." -ForegroundColor Cyan
    
    $content = Get-Content $component.Path -Raw
    
    # 1. Update imports
    $content = $content -replace "import \{ useState, useEffect, useRef \} from 'react'", "import { useState, useRef } from 'react'"
    $content = $content -replace "import PromoPopup from '@/components/PromoPopup'", ""
    $content = $content -replace "import RelatedTools from '@/components/RelatedTools'", "import RelatedTools from '@/components/RelatedTools'`r`nimport ProcessingPopup from '@/components/ProcessingPopup'"
    $content = $content -replace "import \{ useLanguage \} from '@/contexts/LanguageContext'", "import { useAuth } from '@/contexts/AuthContext'`r`nimport { useLanguage } from '@/contexts/LanguageContext'`r`nimport { useImageEdit } from '@/hooks/useImageEdit'"
    
    # 2. Update state declarations
    $statePattern = "(?s)const \[uploadedImage.*?const \{ language \} = useLanguage\(\)"
    $newState = @"
const [uploadedImage, setUploadedImage] = useState<File | null>(null)
    const [originalPreview, setOriginalPreview] = useState<string | null>(null)
    const [showAuthPopup, setShowAuthPopup] = useState(false)
    const uploadRef = useRef<HTMLDivElement>(null)
    const { user } = useAuth()
    const { language } = useLanguage()
    const { editImage, isLoading, error, editedImageUrl, reset } = useImageEdit({
        operationType: '$($component.OperationType)',
        userId: user?.id
    })
"@
    $content = $content -replace $statePattern, $newState
    
    # 3. Remove useEffect
    $content = $content -replace "(?s)useEffect\(\(\) => \{.*?\}, \[\]\)", ""
    
    # 4. Update handleImageUpload
    $uploadPattern = "(?s)const handleImageUpload = \(file: File, preview: string\) => \{.*?setProcessedImage\(preview\).*?\}"
    $newUpload = @"
const handleImageUpload = async (file: File, preview: string) => {
        setUploadedImage(file)
        setOriginalPreview(preview)
        
        // Call Qwen API
        try {
            await editImage({ imageFile: file })
        } catch (err) {
            console.error('Error processing image:', err)
        }
    }
"@
    $content = $content -replace $uploadPattern, $newUpload
    
    # 5. Update handleAuthClose
    $content = $content -replace "(?s)const handleAuthClose = \(\) => \{.*?setIsAuthenticated\(authenticated\).*?\}", @"
const handleAuthClose = () => {
        setShowAuthPopup(false)
    }
"@
    
    # 6. Update handleDownload
    $content = $content -replace "if \(!processedImage\) return", "if (!editedImageUrl) return"
    $content = $content -replace "link\.href = processedImage", "link.href = editedImageUrl"
    $content = $content -replace "link\.download = 'processed-image\.png'", "link.download = '$($component.DownloadName)'"
    
    # 7. Update handleGenerateNew
    $content = $content -replace "setProcessedImage\(null\)", "reset()"
    
    # 8. Update handleGetStarted
    $content = $content -replace "const authenticated = localStorage\.getItem\('userAuthenticated'\) === 'true'", ""
    $content = $content -replace "if \(!authenticated\)", "if (!user)"
    
    # 9. Update ImageUploader prop
    $content = $content -replace "isAuthenticated=\{isAuthenticated\}", "isAuthenticated={!!user}"
    
    # 10. Update ResultDisplay condition and props
    $content = $content -replace "\{processedImage && originalPreview &&", "{editedImageUrl && originalPreview &&"
    $content = $content -replace "processedImage=\{processedImage\}", "processedImage={editedImageUrl}"
    
    # 11. Update footer popups
    $content = $content -replace "<PromoPopup isOpen=\{showPromoPopup\} onClose=\{\(\) => setShowPromoPopup\(false\)\} />", "<ProcessingPopup isOpen={isLoading} />"
    
    # Save the file
    Set-Content -Path $component.Path -Value $content -NoNewline
    
    Write-Host "✓ Updated $($component.Path)" -ForegroundColor Green
}

Write-Host "`nAll components updated successfully!" -ForegroundColor Green
