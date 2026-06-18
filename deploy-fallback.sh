#!/bin/bash
# Deploy fallback copy to cPanel subdirectory
# This creates solidsolutions.africa/backup as immediate fallback

echo "Creating fallback deployment..."

# Build if needed
if [ ! -d "dist" ] || [ ! -f "dist/index.html" ]; then
    echo "Building project..."
    npm run build
fi

# Create backup directory structure
mkdir -p dist-backup
cp -r dist/* dist-backup/

# Create simple redirect HTML for fallback
cat > dist-backup/backup-index.html << 'HTMLEOF'
<!DOCTYPE html>
<html>
<head>
    <meta http-equiv="refresh" content="0;url=/backup/">
    <title>Redirecting to fallback...</title>
</head>
<body>
    <p>If not redirected, <a href="/backup/">click here</a>.</p>
</body>
</html>
HTMLEOF

echo "✅ Fallback files ready in dist-backup/"
echo "Next: Upload to cPanel as /backup/ subdirectory"
