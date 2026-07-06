#!/bin/bash
# Deploy dist/ to cPanel via rsync over SSH.
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

lftp -c "
set sftp:connect-program 'ssh -i ${KEY} -o StrictHostKeyChecking=no -o ConnectTimeout=30';
set net:max-retries 3;
set net:timeout 30;
open sftp://${USER}@${HOST};
cd ${REMOTE};
mirror -R dist/ . --delete --verbose --exclude .git/;
bye
"

echo "Done — verify https://solidsolutions.africa"