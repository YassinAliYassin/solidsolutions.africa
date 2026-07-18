#!/bin/bash
# Deploy dist/ to Vercel (primary). Optional cPanel path when host is up.
# Usage: ./scripts/deploy.sh

set -euo pipefail

if [ ! -d dist ] || [ ! -f dist/index.html ]; then
  echo "Building..."
  npm run build
fi

# vercel deploy only uploads dist/, so SPA rewrites + project link must be inside it
cp vercel.json dist/vercel.json
if [ -f .vercel/project.json ]; then
  mkdir -p dist/.vercel
  cp .vercel/project.json dist/.vercel/project.json
fi

if command -v vercel >/dev/null 2>&1; then
  echo "Deploying dist/ to Vercel production (solidsolutions-africa)..."
  vercel deploy dist --prod --yes
  echo "Done — https://solidsolutions.africa"
  # Smoke-check SPA routes after deploy
  sleep 3
  for path in / /solid-llm /beta /gallery; do
    code=$(curl -sS -o /dev/null -w "%{http_code}" "https://solidsolutions.africa$path")
    echo "  $code $path"
  done
else
  echo "vercel CLI not found; install with: npm i -g vercel"
  exit 1
fi

# Optional legacy cPanel upload if SSH key + host are available
KEY="${SSH_PRIVATE_KEY:-$HOME/.ssh/solid_solutions_deploy}"
HOST="${DEPLOY_HOST:-102.208.231.11}"
USER="${DEPLOY_USER:-solidsol}"
REMOTE="${DEPLOY_PATH:-public_html}"

if [ -f "$KEY" ] && timeout 5 bash -c "echo >/dev/tcp/${HOST}/22" 2>/dev/null; then
  echo "Also deploying to cPanel ${USER}@${HOST}:${REMOTE}/"
  SSH=(ssh -i "$KEY" -o StrictHostKeyChecking=no -o ConnectTimeout=15)
  tar -C dist -czf - . | "${SSH[@]}" "${USER}@${HOST}" "mkdir -p ${REMOTE} && tar -C ${REMOTE} -xzf -" \
    && echo "cPanel upload ok" \
    || echo "cPanel upload failed (non-fatal)"
else
  echo "Skipping cPanel (host down or key missing)"
fi
