import os
import re
from pathlib import Path

# Root directory
root_dir = Path(r"C:\Users\victo\Desktop\REMOVE WATER")

# Pattern to match merge conflict blocks
conflict_pattern = re.compile(
    r'<<<<<<< HEAD\r?\n(.*?)\r?\n=======\r?\n(.*?)\r?\n>>>>>>> feature/qwen-api-integration\r?\n',
    re.DOTALL
)

def resolve_conflicts_in_file(file_path):
    """Resolve merge conflicts in a file by choosing HEAD version"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Check if file has conflicts
        if '<<<<<<< HEAD' not in content:
            return False
        
        # Replace conflict blocks with HEAD version
        def replace_conflict(match):
            head_version = match.group(1)
            return head_version + '\n'
        
        resolved_content = conflict_pattern.sub(replace_conflict, content)
        
        # Write back
        with open(file_path, 'w', encoding='utf-8', newline='') as f:
            f.write(resolved_content)
        
        return True
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False

# Find all TypeScript/JavaScript files
extensions = ['.tsx', '.ts', '.jsx', '.js']
files_processed = 0
files_with_conflicts = 0

print("Searching for files with merge conflicts...")

for ext in extensions:
    for file_path in root_dir.rglob(f'*{ext}'):
        # Skip node_modules and .next
        if 'node_modules' in str(file_path) or '.next' in str(file_path):
            continue
        
        files_processed += 1
        if resolve_conflicts_in_file(file_path):
            files_with_conflicts += 1
            print(f"✓ Resolved: {file_path.relative_to(root_dir)}")

print(f"\n✓ Complete!")
print(f"Files scanned: {files_processed}")
print(f"Files with conflicts resolved: {files_with_conflicts}")
