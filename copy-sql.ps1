# Script PowerShell pour copier le SQL dans le presse-papier

# Lire le fichier SQL
$sqlContent = Get-Content -Path ".\supabase-schema.sql" -Raw

# Copier dans le presse-papier
Set-Clipboard -Value $sqlContent

# Message de confirmation
Write-Host "Le script SQL a ete copie dans le presse-papier!" -ForegroundColor Green
Write-Host ""
Write-Host "Prochaines etapes:" -ForegroundColor Cyan
Write-Host "1. Connectez-vous a Supabase: https://supabase.com/dashboard/sign-in" -ForegroundColor White
Write-Host "2. Allez dans l'editeur SQL: https://supabase.com/dashboard/project/reaknipmijhiquyupyid/editor" -ForegroundColor White
Write-Host "3. Cliquez sur 'New query'" -ForegroundColor White
Write-Host "4. Collez le script (Ctrl+V)" -ForegroundColor White
Write-Host "5. Cliquez sur 'Run' pour executer" -ForegroundColor White
Write-Host ""
Write-Host "Le script est pret a etre colle!" -ForegroundColor Yellow

Write-Host ""
Write-Host "Le script est prêt à être collé! 🚀" -ForegroundColor Yellow
