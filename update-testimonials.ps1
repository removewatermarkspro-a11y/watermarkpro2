# Script to update all pages with pageId for Testimonials component

$pages = @(
    @{file = "app\image-upscaler\page.tsx"; pageId = "'image-upscaler'" },
    @{file = "app\remove-background\page.tsx"; pageId = "'remove-background'" },
    @{file = "app\remove-object\page.tsx"; pageId = "'remove-object'" },
    @{file = "app\remove-text\page.tsx"; pageId = "'remove-text'" },
    @{file = "app\remove-watermark-video\page.tsx"; pageId = "'remove-watermark-video'" },
    @{file = "app\replace-background\page.tsx"; pageId = "'replace-background'" }
)

foreach ($page in $pages) {
    $filePath = $page.file
    $pageId = $page.pageId
    
    Write-Host "Updating $filePath with pageId=$pageId..." -ForegroundColor Yellow
    
    $content = Get-Content $filePath -Raw
    
    # Replace <Testimonials onCtaClick with <Testimonials pageId=X onCtaClick
    $newContent = $content -replace '<Testimonials onCtaClick', "<Testimonials `r`n                        pageId=$pageId`r`n                        onCtaClick"
    
    Set-Content -Path $filePath -Value $newContent -NoNewline
    
    Write-Host "  ✓ Updated successfully" -ForegroundColor Green
}

Write-Host "`nAll pages updated!" -ForegroundColor Cyan
