import os
import re

app_dir = r"c:\Users\victo\Desktop\RemoveWater X\watermarkpro2\app"
pattern = re.compile(r'(<PromptInput[^>]*/>)', re.DOTALL)

for root, dirs, files in os.walk(app_dir):
    for file in files:
        if file.endswith('.tsx'):
            filepath = os.path.join(root, file)
            with open(filepath, 'r', encoding='utf-8') as f:
                content = f.read()
            
            if '<PromptInput' in content and 'className={styles.orderPrompt}' not in content:
                new_content = pattern.sub(r'<div className={styles.orderPrompt}>\1</div>', content)
                with open(filepath, 'w', encoding='utf-8') as f:
                    f.write(new_content)
                print(f"Updated {filepath}")
