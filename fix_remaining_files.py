# -*- coding: utf-8 -*-
import os
import re

# SoraWatermarkRemover files (all languages)
files_to_fix = [
    r"C:\Users\victo\Desktop\REMOVE WATER\app\sora-watermark-remover\SoraWatermarkRemoverClient.tsx",
    r"C:\Users\victo\Desktop\REMOVE WATER\app\fr\enlever-filigrane-sora\SoraWatermarkRemoverClientFr.tsx",
    r"C:\Users\victo\Desktop\REMOVE WATER\app\es\eliminar-marca-agua-sora\SoraWatermarkRemoverClientEs.tsx",
    r"C:\Users\victo\Desktop\REMOVE WATER\app\pt\remover-marca-dagua-sora\SoraWatermarkRemoverClientPt.tsx",
    r"C:\Users\victo\Desktop\REMOVE WATER\app\de\sora-wasserzeichen-entfernen\SoraWatermarkRemoverClientDe.tsx",
    r"C:\Users\victo\Desktop\REMOVE WATER\app\ko\sora-watermark-remover\SoraWatermarkRemoverClientKo.tsx",
    r"C:\Users\victo\Desktop\REMOVE WATER\app\no\fjern-sora-vannmerke\SoraWatermarkRemoverClientNo.tsx",
    # VideoWatermarkRemover
    r"C:\Users\victo\Desktop\REMOVE WATER\app\watermark-remover-video\VideoWatermarkRemoverClient.tsx",
    # BackgroundReplacer
    r"C:\Users\victo\Desktop\REMOVE WATER\app\background-changer-ai\BackgroundReplacerClient.tsx",
    # ObjectRemover EN
    r"C:\Users\victo\Desktop\REMOVE WATER\app\object-remover-ai\ObjectRemoverClient.tsx",
]

for filepath in files_to_fix:
    if not os.path.exists(filepath):
        print(f"File not found: {filepath}")
        continue
    
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    original_content = content
    changes = []
    
    # 1. Replace localStorage checks in handleGetStarted
    if "const isAuthenticated = localStorage.getItem('userAuthenticated')" in content:
        content = content.replace(
            "const isAuthenticated = localStorage.getItem('userAuthenticated')",
            "const isAuthenticated = user"
        )
        changes.append("Fixed handleGetStarted")
    
    # 2. Replace localStorage checks in other functions
    content = re.sub(
        r"const authenticated = localStorage\.getItem\('userAuthenticated'\) === 'true'",
        "const authenticated = !!user",
        content
    )
    if "const authenticated = localStorage.getItem('userAuthenticated') === 'true'" in original_content:
        changes.append("Fixed authenticated checks")
    
    # 3. Add useAuth import if not present
    if 'useAuth' not in content and 'import { useLanguage }' in content:
        content = content.replace(
            "import { useLanguage } from '@/contexts/LanguageContext'",
            "import { useAuth } from '@/contexts/AuthContext'\nimport { useLanguage } from '@/contexts/LanguageContext'"
        )
        changes.append("Added useAuth import")
    
    # 4. Add user from useAuth if not present
    if '{ user } = useAuth()' not in content and 'const { language } = useLanguage()' in content:
        content = content.replace(
            "const { language } = useLanguage()",
            "const { user } = useAuth()\n    const { language } = useLanguage()"
        )
        changes.append("Added useAuth() hook")
    
    if content != original_content:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"Fixed: {os.path.basename(filepath)}")
        for change in changes:
            print(f"  - {change}")
    else:
        print(f"No changes needed: {os.path.basename(filepath)}")

print("\nDone!")
