# -*- coding: utf-8 -*-
import os
import re

# ObjectRemover files
files_to_fix = [
    r"C:\Users\victo\Desktop\REMOVE WATER\app\fr\supprimer-objet-image\ObjectRemoverClientFr.tsx",
    r"C:\Users\victo\Desktop\REMOVE WATER\app\es\eliminar-objeto-imagen\ObjectRemoverClientEs.tsx",
    r"C:\Users\victo\Desktop\REMOVE WATER\app\de\objekt-entfernen\ObjectRemoverClientDe.tsx",
]

for filepath in files_to_fix:
    if not os.path.exists(filepath):
        print(f"File not found: {filepath}")
        continue
    
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    original_content = content
    
    # 1. Remove useEffect with localStorage
    content = re.sub(
        r'\s+useEffect\(\(\) => \{\s+const authenticated = localStorage\.getItem\(\'userAuthenticated\'\) === \'true\'\s+setIsAuthenticated\(authenticated\)\s+\}, \[\]\)',
        '',
        content,
        flags=re.MULTILINE
    )
    
    # 2. Fix handleAuthClose
    content = re.sub(
        r'const handleAuthClose = \(\) => \{\s+setShowAuthPopup\(false\)\s+const authenticated = localStorage\.getItem\(\'userAuthenticated\'\) === \'true\'\s+setIsAuthenticated\(authenticated\)\s+\}',
        'const handleAuthClose = () => {\n        setShowAuthPopup(false)\n    }',
        content,
        flags=re.MULTILINE
    )
    
    # 3. Fix handleGetStarted
    content = re.sub(
        r'const handleGetStarted = \(\) => \{\s+const authenticated = localStorage\.getItem\(\'userAuthenticated\'\) === \'true\'\s+if \(!authenticated\) \{',
        'const handleGetStarted = () => {\n        if (!user) {',
        content,
        flags=re.MULTILINE
    )
    
    # 4. Fix missing newline between state declarations
    content = re.sub(
        r'setShowPromoPopup\] = useState\(false\)\s+const uploadRef',
        'setShowPromoPopup] = useState(false)\n    const uploadRef',
        content
    )
    
    if content != original_content:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"Fixed: {os.path.basename(filepath)}")
    else:
        print(f"No changes needed: {os.path.basename(filepath)}")

print("\nDone!")
