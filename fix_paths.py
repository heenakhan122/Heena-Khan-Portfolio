import os
import re

BASE_PATH = "/Heena-Khan-Portfolio"

# Image extensions to fix
image_extensions = r'\.(png|jpg|jpeg|webp|svg|pdf)'

def fix_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    original = content
    
    # Fix src="/image.png" -> src="/Heena-Khan-Portfolio/image.png"
    content = re.sub(
        r'src="/([\w\-\.]+' + image_extensions + r')"',
        rf'src="{BASE_PATH}/\1"',
        content
    )
    
    # Fix url(/image.png) -> url(/Heena-Khan-Portfolio/image.png)
    content = re.sub(
        r'url\(/([\w\-\.]+' + image_extensions + r')\)',
        rf'url({BASE_PATH}/\1)',
        content
    )
    
    if content != original:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        return True
    return False

# Find and fix all .tsx and .ts files
fixed_count = 0
for root, dirs, files in os.walk('client/src'):
    for file in files:
        if file.endswith(('.tsx', '.ts')):
            filepath = os.path.join(root, file)
            if fix_file(filepath):
                print(f"✅ Fixed: {filepath}")
                fixed_count += 1

print(f"\n🎉 Done! Fixed {fixed_count} files.")
