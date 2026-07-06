#!/bin/bash
# Deploy dist/ to cPanel via SSH tarball upload.
# Usage: SSH_PRIVATE_KEY=~/.ssh/solid_solutions_deploy ./scripts/deploy.sh

set -euo pipefail

HOST="${DEPLOY_HOST:-zacp111.webway.host}"
USER="${DEPLOY_USER:-solidsol}"
REMOTE="${DEPLOY_PATH:-public_html}"
KEY="${SSH_PRIVATE_KEY:-$HOME/.ssh/solid_solutions_deploy}"

if [ ! -d dist ] || [ ! -f dist/index.html ]; then
  echo "Building..."
  npm run build
fi

if [ ! -f "$KEY" ]; then
  echo "Error: SSH key not found at $KEY"
  echo "Set SSH_PRIVATE_KEY or place key at ~/.ssh/solid_solutions_deploy"
  exit 1
fi

echo "Deploying dist/ to ${USER}@${HOST}:${REMOTE}/"

SSH="ssh -i '$KEY' -o StrictHostKeyChecking=no -o ConnectTimeout=30"
eval "$SSH" "${USER}@${HOST}" "mkdir -p ${REMOTE} && rm -rf ${REMOTE}/*"
tar -C dist -czf - . | eval "$SSH" "${USER}@${HOST}" "tar -C ${REMOTE} -xzf -"

echo "Done — verify https://solidsolutions.africa"