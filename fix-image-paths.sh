
#!/bin/bash
# fix-image-paths.sh

BASE_PATH="/Heena-Khan-Portfolio"

cd ~/work/Heena-Khan-Portfolio

echo "🔧 Fixing image paths for GitHub Pages..."

find client/src -type f \( -name "*.tsx" -o -name "*.ts" \) | while read -r file; do
  echo "Processing: $file"
  
  sed -i.bak -E 's|src="/(([^"]*)\.(png|jpg|jpeg|webp|svg|pdf))"|src="'"$BASE_PATH"'/\1"|g' "$file"
  
  sed -i.bak -E 's|url\(/(([^)]*)\.(png|jpg|jpeg|webp|svg|pdf))\)|url('"$BASE_PATH"'/\1)|g' "$file"
  
  if diff "$file" "$file.bak" > /dev/null 2>&1; then
    rm "$file.bak"
  else
    echo "  ✅ Updated $file"
  fi
done

echo ""
echo "🎉 Done! Image paths have been updated."
echo ""
echo "Next steps:"
echo "1. Review changes: git diff"
echo "2. Test locally: npm run dev"
echo "3. Commit: git add . && git commit -m 'Fix image paths for GitHub Pages'"
echo "4. Push: git push origin main"
