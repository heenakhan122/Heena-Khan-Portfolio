import os
import re

def fix_image_paths(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    original = content
    
    # Pattern 1: src="/Heena-Khan-Portfolio/image.ext"
    content = re.sub(
        r'src="/Heena-Khan-Portfolio/([\w\-\.]+\.(png|jpg|jpeg|webp|svg|pdf))"',
        r'src={`${import.meta.env.BASE_URL}\1`}',
        content
    )
    
    # Pattern 2: const image = "/Heena-Khan-Portfolio/file.ext"
    content = re.sub(
        r'= "/Heena-Khan-Portfolio/([\w\-\.]+\.(png|jpg|jpeg|webp|svg|pdf))"',
        r'= `${import.meta.env.BASE_URL}\1`',
        content
    )
    
    # Pattern 3: image: "/Heena-Khan-Portfolio/file.ext"
    content = re.sub(
        r': "/Heena-Khan-Portfolio/([\w\-\.]+\.(png|jpg|jpeg|webp|svg|pdf))"',
        r': `${import.meta.env.BASE_URL}\1`',
        content
    )
    
    if content != original:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        return True
    return False

# Find and fix all .tsx and .ts files
fixed_files = []
for root, dirs, files in os.walk('client/src'):
    for file in files:
        if file.endswith(('.tsx', '.ts')):
            filepath = os.path.join(root, file)
            if fix_image_paths(filepath):
                fixed_files.append(filepath)
                print(f"✅ Fixed: {filepath}")

print(f"\n🎉 Fixed {len(fixed_files)} files total!")
