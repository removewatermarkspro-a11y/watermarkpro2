import re
from pathlib import Path

# Read the file
file_path = Path(r"C:\Users\victo\Desktop\REMOVE WATER\locales\translations.ts")
with open(file_path, 'r', encoding='utf-8') as f:
    lines = f.readlines()

# Track language sections and find duplicates
current_lang = None
lang_properties = {}
brace_count = 0
duplicates_to_remove = []

for i, line in enumerate(lines):
    # Detect language section start
    lang_match = re.match(r'^\s+(en|fr|de|pt|ko|no):\s*\{', line)
    if lang_match:
        current_lang = lang_match.group(1)
        lang_properties[current_lang] = {}
        brace_count = 1
        continue
    
    if current_lang and brace_count > 0:
        # Count braces
        brace_count += line.count('{') - line.count('}')
        
        # Detect property definitions
        prop_match = re.match(r'^(\s+)(\w+):\s*\{', line)
        if prop_match:
            indent = prop_match.group(1)
            prop_name = prop_match.group(2)
            
            # Track this property
            if prop_name not in lang_properties[current_lang]:
                lang_properties[current_lang][prop_name] = []
            lang_properties[current_lang][prop_name].append(i)
        
        # Exit language section when braces close
        if brace_count == 0:
            current_lang = None

# Find duplicates
print("Searching for duplicate properties...\n")
for lang, props in lang_properties.items():
    for prop, line_nums in props.items():
        if len(line_nums) > 1:
            print(f"Found duplicate '{prop}' in {lang} section:")
            for ln in line_nums:
                print(f"  Line {ln + 1}: {lines[ln].strip()}")
            
            # Mark all but the LAST occurrence for removal
            for ln in line_nums[:-1]:
                # Find the end of this property block
                start_line = ln
                prop_brace_count = 0
                end_line = ln
                
                for j in range(ln, len(lines)):
                    prop_brace_count += lines[j].count('{') - lines[j].count('}')
                    if prop_brace_count == 0 and j > ln:
                        end_line = j
                        break
                
                # Also remove the comment line before if it exists
                comment_line = ln - 1
                if comment_line >= 0 and re.match(r'^\s*//.*CTA', lines[comment_line]):
                    duplicates_to_remove.append((comment_line, end_line + 1))
                    print(f"  -> Will remove lines {comment_line + 1}-{end_line + 1}")
                else:
                    duplicates_to_remove.append((start_line, end_line + 1))
                    print(f"  -> Will remove lines {start_line + 1}-{end_line + 1}")

if duplicates_to_remove:
    print(f"\nRemoving {len(duplicates_to_remove)} duplicate blocks...")
    
    # Remove from end to start to preserve line numbers
    for start, end in sorted(duplicates_to_remove, reverse=True):
        del lines[start:end]
    
    # Write back
    with open(file_path, 'w', encoding='utf-8') as f:
        f.writelines(lines)
    
    print(f"✓ Removed {len(duplicates_to_remove)} duplicate property blocks")
else:
    print("No duplicates found!")
