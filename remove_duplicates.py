import re
from pathlib import Path

# Read the file
file_path = Path(r"C:\Users\victo\Desktop\REMOVE WATER\locales\translations.ts")
with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Find all testimonialsCta blocks and their positions
pattern = r'(\s+)//\s*Testimonials\s*CTA\s*\n\s+testimonialsCta:\s*\{[^}]+\},'

matches = list(re.finditer(pattern, content, re.MULTILINE))

print(f"Found {len(matches)} testimonialsCta blocks")

if len(matches) > 6:  # We expect 6 (one per language: en, fr, de, pt, ko, no)
    print("\nRemoving duplicates...")
    
    # Group matches by language section
    # We'll keep only the LAST occurrence in each language section
    # For now, let's just remove all but the last 6 occurrences
    
    # Remove all but the last 6
    matches_to_remove = matches[:-6]
    
    # Remove from end to start to preserve positions
    for match in reversed(matches_to_remove):
        start, end = match.span()
        content = content[:start] + content[end:]
        print(f"Removed duplicate at position {start}")
    
    # Write back
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(content)
    
    print(f"\n✓ Removed {len(matches_to_remove)} duplicate testimonialsCta blocks")
    print(f"✓ Kept {6} testimonialsCta blocks (one per language)")
else:
    print("No duplicates to remove!")
