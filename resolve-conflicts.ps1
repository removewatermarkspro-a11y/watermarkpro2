#!/usr/bin/env pwsh

# Script to resolve merge conflicts by choosing HEAD version
# This script finds all files with merge conflict markers and resolves them

$rootDir = "C:\Users\victo\Desktop\REMOVE WATER"

Write-Host "Searching for files with merge conflicts..." -ForegroundColor Yellow

# Find all files with conflict markers
$filesWithConflicts = Get-ChildItem -Path $rootDir -Recurse -File -Include *.tsx, *.ts, *.jsx, *.js, *.css | 
Where-Object { 
    $_.FullName -notmatch '\\node_modules\\' -and 
    $_.FullName -notmatch '\\.next\\' -and
    (Select-String -Path $_.FullName -Pattern '^<<<<<<<' -Quiet)
}

Write-Host "Found $($filesWithConflicts.Count) files with conflicts" -ForegroundColor Cyan

foreach ($file in $filesWithConflicts) {
    Write-Host "`nProcessing: $($file.FullName)" -ForegroundColor Green
    
    $content = Get-Content -Path $file.FullName -Raw
    
    # Remove conflict markers and keep HEAD version
    # Pattern: <<<<<<< HEAD\n(content)\n=======\n(content)\n>>>>>>> branch
    $resolved = $content -replace '(?ms)<<<<<<<\s+HEAD\r?\n(.*?)\r?\n=======\r?\n.*?\r?\n>>>>>>>\s+[^\r\n]+\r?\n', '$1'
    
    # Write back the resolved content
    Set-Content -Path $file.FullName -Value $resolved -NoNewline
    
    Write-Host "  ✓ Resolved" -ForegroundColor Green
}

Write-Host "`n✓ All conflicts resolved!" -ForegroundColor Green
Write-Host "Total files processed: $($filesWithConflicts.Count)" -ForegroundColor Cyan
