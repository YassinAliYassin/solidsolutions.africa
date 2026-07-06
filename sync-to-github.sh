#!/bin/bash
# sync-to-github.sh — Pull rebase and push to origin/main
# Run from the repo root.

set -euo pipefail

echo "Solid Solutions — GitHub sync"
echo "=============================="

if [ ! -d ".git" ]; then
    echo "Error: not a git repository. cd to the repo first."
    exit 1
fi

echo ""
echo "1. Pulling latest from origin/main..."
git pull --rebase origin main

echo ""
echo "2. Status:"
git status

echo ""
echo "3. Pushing to origin/main..."
git push origin main

echo ""
echo "Done. GitHub Actions will deploy to https://solidsolutions.africa"