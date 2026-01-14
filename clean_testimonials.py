import re

# Read the file
with open(r"C:\Users\victo\Desktop\REMOVE WATER\locales\translations.ts", 'r', encoding='utf-8') as f:
    content = f.read()

# Find all testimonialsCta blocks with their positions
pattern = r'(\s+)//\s*Testimonials\s*CTA\s*\n\s+testimonialsCta:\s*\{[^\}]+\},'
matches = list(re.finditer(pattern, content, re.MULTILINE | re.DOTALL))

print(f"Found {len(matches)} testimonialsCta blocks")

# We expect 6 (one per language: en, fr, de, pt, ko, no)
# Keep only the last 6 occurrences
if len(matches) > 6:
    duplicates_to_remove = matches[:-6]
    
    print(f"\nRemoving {len(duplicates_to_remove)} duplicate blocks...")
    
    # Remove from end to start to preserve positions
    for match in reversed(duplicates_to_remove):
        start, end = match.span()
        content = content[:start] + content[end:]
        print(f"  Removed duplicate at position {start}-{end}")
    
    # Write back
    with open(r"C:\Users\victo\Desktop\REMOVE WATER\locales\translations.ts", 'w', encoding='utf-8') as f:
        f.write(content)
    
    print(f"\n✓ Successfully removed {len(duplicates_to_remove)} duplicates")
    print(f"✓ Kept 6 testimonialsCta blocks (one per language)")
else:
    print(f"Only {len(matches)} blocks found - no duplicates to remove")
