SURGE_URL=https://${CIRCLE_PROJECT_REPONAME}-${CIRCLE_BRANCH}.surge.sh

CIRCLE_PR_NUMBER=${CIRCLE_PR_NUMBER:-${CIRCLE_PULL_REQUEST##*/}}
PROJECT_NAME=${CIRCLE_PROJECT_USERNAME}/${CIRCLE_PROJECT_REPONAME}
GITHUB_ISSUES_URL=https://api.github.com/repos/${PROJECT_NAME}/issues

curl -s -H "Authorization: token ${GITHUB_TOKEN}" \
 -X POST -d '{"body":"🚀 Good job! The Storybook deploy is ready on ['${CIRCLE_BRANCH}']('${SURGE_URL}') 🚀"}' \
 "${GITHUB_ISSUES_URL}/${CIRCLE_PR_NUMBER}/comments"