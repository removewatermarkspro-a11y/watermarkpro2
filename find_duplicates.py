import re
from pathlib import Path
from collections import defaultdict

# Read the file
file_path = Path(r"C:\Users\victo\Desktop\REMOVE WATER\locales\translations.ts")
with open(file_path, 'r', encoding='utf-8') as f:
    lines = f.readlines()

# Track which language section we're in and property occurrences
current_lang = None
lang_start = {}
properties_by_lang = defaultdict(lambda: defaultdict(list))
brace_count = 0
lang_brace_start = {}

for i, line in enumerate(lines, 1):
    # Detect language section start (e.g., "en: {", "fr: {")
    lang_match = re.match(r'^\s+(en|fr|de|pt|ko|no):\s*\{', line)
    if lang_match:
        current_lang = lang_match.group(1)
        lang_start[current_lang] = i
        lang_brace_start[current_lang] = 1
        brace_count = 1
        continue
    
    if current_lang:
        # Count braces to know when we exit the language section
        brace_count += line.count('{') - line.count('}')
        
        # Detect property definitions (e.g., "testimonialsCta: {")
        prop_match = re.match(r'^\s+(\w+):\s*\{', line)
        if prop_match:
            prop_name = prop_match.group(1)
            properties_by_lang[current_lang][prop_name].append(i)
        
        # If we've closed all braces, we've exited the language section
        if brace_count == 0:
            current_lang = None

# Find duplicates
print("Duplicate properties found:\n")
duplicates_found = False
for lang, props in properties_by_lang.items():
    for prop, line_numbers in props.items():
        if len(line_numbers) > 1:
            duplicates_found = True
            print(f"{lang}.{prop}: lines {line_numbers}")

if not duplicates_found:
    print("No duplicates found!")
else:
    print("\nNote: You'll need to manually review and remove the duplicates.")
    print("Keep the LAST occurrence of each duplicate property.")
