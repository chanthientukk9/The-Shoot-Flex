#!/usr/bin/env bash

set -e

SECONDS=0

# Copy production .env.prod to .env
cp .env.staging .env

export TAG_NAME=${TAG:-'latest'}

echo "::::will deploy with tag >>${TAG_NAME}<<::::"

export REPO_URL="931208737691.dkr.ecr.eu-west-2.amazonaws.com/the-shoot-dev:${TAG_NAME}"

docker build -t ${REPO_URL} .

echo "::::login aws::::"
$(aws ecr get-login --no-include-email --region eu-west-2 --profile=theshoot)

echo "::::pushing to aws repo::::"
docker push ${REPO_URL}

AWS_PRIVATE_KEY_PATH='~/projects/keys/the-shoot-dev.pem'

echo "::::ssh and deploy::::"
ssh -i "${AWS_PRIVATE_KEY_PATH}" ubuntu@35.178.226.148 "IMAGE_URL=${REPO_URL} ./deploy.sh"

duration=$SECONDS
echo "$(($duration / 60)) minutes and $(($duration % 60)) seconds deployment time."

# Copy back .env.staging to .env
#cp .env.staging .env
