import os
import re
from pathlib import Path

# Root directory
root_dir = Path(r"C:\Users\victo\Desktop\REMOVE WATER\app")

# Pattern to find the buggy code
buggy_pattern = re.compile(
    r'([ \t]*)reader\.readAsDataURL\(file\)\r?\n\r?\n'
    r'([ \t]*)// Set the processed image URL.*?\r?\n'
    r'([ \t]*).*?__lastProcessedUrl.*?\r?\n',
    re.DOTALL
)

# Pattern to find code that needs the fix (missing setProcessedImageUrl)
missing_set_pattern = re.compile(
    r'const handleImageUpload = async \(file: File, processedImageUrl: string\).*?'
    r'reader\.readAsDataURL\(file\)\r?\n\r?\n'
    r'(?![ \t]*setProcessedImageUrl)',
    re.DOTALL
)

def fix_client_file(file_path):
    """Fix the handleImageUpload function to properly set processedImageUrl"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Check if file has the handleImageUpload function
        if 'handleImageUpload' not in content:
            return False, "No handleImageUpload function"
        
        # Check if already fixed
        if 'setProcessedImageUrl(processedImageUrl)' in content:
            return False, "Already fixed"
        
        # Pattern to match the entire handleImageUpload function
        pattern = re.compile(
            r'(const handleImageUpload = async \(file: File, processedImageUrl: string\) => \{\r?\n'
            r'.*?'
            r'reader\.readAsDataURL\(file\)\r?\n)'
            r'(\r?\n)'
            r'([ \t]*)(.*?\r?\n)'  # The line after readAsDataURL
            r'([ \t]*\})',  # Closing brace
            re.DOTALL
        )
        
        def replace_func(match):
            before_read = match.group(1)
            newline = match.group(2)
            indent = match.group(3)
            next_line = match.group(4)
            closing = match.group(5)
            
            # Add the setProcessedImageUrl call
            fixed = (
                f"{before_read}{newline}"
                f"{indent}// Set the processed image URL from Replicate API\r\n"
                f"{indent}setProcessedImageUrl(processedImageUrl)\r\n"
                f"{closing}"
            )
            return fixed
        
        # Try to apply the fix
        new_content = pattern.sub(replace_func, content)
        
        if new_content == content:
            return False, "Pattern not matched"
        
        # Write back
        with open(file_path, 'w', encoding='utf-8', newline='') as f:
            f.write(new_content)
        
        return True, "Fixed"
    except Exception as e:
        return False, f"Error: {e}"

# Find all Client files
files_processed = 0
files_fixed = 0
files_already_ok = 0
files_no_function = 0

print("Searching for Client files with handleImageUpload...")

for file_path in root_dir.rglob('*Client*.tsx'):
    # Skip node_modules and .next
    if 'node_modules' in str(file_path) or '.next' in str(file_path):
        continue
    
    files_processed += 1
    fixed, message = fix_client_file(file_path)
    
    if fixed:
        files_fixed += 1
        print(f"✓ Fixed: {file_path.relative_to(root_dir.parent)}")
    elif "Already fixed" in message:
        files_already_ok += 1
        print(f"  OK: {file_path.relative_to(root_dir.parent)}")
    elif "No handleImageUpload" in message:
        files_no_function += 1
        # Don't print these, they don't need the fix
    else:
        print(f"  Skip: {file_path.relative_to(root_dir.parent)} - {message}")

print(f"\n✓ Complete!")
print(f"Files scanned: {files_processed}")
print(f"Files fixed: {files_fixed}")
print(f"Files already OK: {files_already_ok}")
print(f"Files without handleImageUpload: {files_no_function}")
