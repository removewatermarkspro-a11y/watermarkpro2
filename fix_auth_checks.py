import os
import re

# Base directory
base_dir = r"C:\Users\victo\Desktop\REMOVE WATER\app"

# Pattern to find Client files in language folders
language_folders = ['fr', 'es', 'pt', 'de', 'ko', 'no']

def fix_auth_in_file(filepath):
    """Fix authentication logic in a client file"""
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    original_content = content
    changes_made = []
    
    # 1. Add useAuth import if not present
    if 'useAuth' not in content:
        # Find the line with useLanguage import
        content = re.sub(
            r"(import { useLanguage } from '@/contexts/LanguageContext')",
            r"import { useAuth } from '@/contexts/AuthContext'\n\1",
            content
        )
        changes_made.append("Added useAuth import")
    
    # 2. Replace isAuthenticated state with user from useAuth
    if '[isAuthenticated, setIsAuthenticated] = useState(false)' in content or '[isAuthenticated, setIsAuthenticated] = useState<boolean>(false)' in content:
        # Remove the useState for isAuthenticated
        content = re.sub(
            r'\s+const \[isAuthenticated, setIsAuthenticated\] = useState(?:<boolean>)?\(false\)\n',
            '',
            content
        )
        changes_made.append("Removed isAuthenticated useState")
    
    # 3. Add useAuth hook call
    if 'const { user } = useAuth()' not in content:
        # Find where to insert it (after uploadRef or other refs)
        content = re.sub(
            r"(const uploadRef = useRef<HTMLDivElement>\(null\))",
            r"\1\n    const { user } = useAuth()",
            content
        )
        changes_made.append("Added useAuth() hook call")
    
    # 4. Remove useEffect that sets isAuthenticated from localStorage
    content = re.sub(
        r"\s+useEffect\(\(\) => \{ setIsAuthenticated\(localStorage\.getItem\('userAuthenticated'\) === 'true'\) \}, \[\]\)\n",
        '',
        content
    )
    if 'useEffect(() => { setIsAuthenticated' in original_content:
        changes_made.append("Removed localStorage useEffect")
    
    # 5. Replace localStorage checks in onClick handlers with user checks
    content = re.sub(
        r"if \(!localStorage\.getItem\('userAuthenticated'\)\)",
        r"if (!user)",
        content
    )
    if "if (!localStorage.getItem('userAuthenticated'))" in original_content:
        changes_made.append("Replaced localStorage check with user check in onClick")
    
    # 6. Fix AuthPopup onClose to not use localStorage
    content = re.sub(
        r"onClose=\{\(\) => \{ setShowAuthPopup\(false\); setIsAuthenticated\(localStorage\.getItem\('userAuthenticated'\) === 'true'\); \}\}",
        r"onClose={() => setShowAuthPopup(false)}",
        content
        )
    if "setIsAuthenticated(localStorage.getItem('userAuthenticated')" in original_content:
        changes_made.append("Fixed AuthPopup onClose")
    
    # 7. Replace isAuthenticated={isAuthenticated} with isAuthenticated={!!user}
    content = re.sub(
        r"isAuthenticated=\{isAuthenticated\}",
        r"isAuthenticated={!!user}",
        content
    )
    if 'isAuthenticated={isAuthenticated}' in original_content:
        changes_made.append("Replaced isAuthenticated prop with !!user")
    
    # Only write if changes were made
    if content != original_content:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        return True, changes_made
    return False, []

# Process all language client files
total_fixed = 0
total_found = 0

for lang in language_folders:
    lang_dir = os.path.join(base_dir, lang)
    if not os.path.exists(lang_dir):
        print(f"Directory not found: {lang_dir}")
        continue
    
    print(f"\nProcessing {lang} folder...")
    
    # Walk through all subdirectories
    for root, dirs, files in os.walk(lang_dir):
        for file in files:
            # Match any file containing "Client" and ending with .tsx
            if 'Client' in file and file.endswith('.tsx'):
                total_found += 1
                filepath = os.path.join(root, file)
                print(f"  Found: {file}")
                fixed, changes = fix_auth_in_file(filepath)
                if fixed:
                    total_fixed += 1
                    print(f"  FIXED: {file}")
                    for change in changes:
                        print(f"    - {change}")
                else:
                    print(f"    (no changes needed)")

print(f"\nSummary:")
print(f"  Files found: {total_found}")
print(f"  Files fixed: {total_fixed}")
