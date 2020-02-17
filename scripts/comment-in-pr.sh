SURGE_URL=https://${CIRCLE_PROJECT_REPONAME}-${CIRCLE_BRANCH}.surge.sh

CIRCLE_PR_NUMBER=${CIRCLE_PR_NUMBER:-${CIRCLE_PULL_REQUEST##*/}}
PROJECT_NAME=${CIRCLE_PROJECT_USERNAME}/${CIRCLE_PROJECT_REPONAME}
GITHUB_ISSUES_URL=https://api.github.com/repos/${PROJECT_NAME}/issues

curl \
-H "Authorization: token ${GITHUB_TOKEN}" \
--request POST ${GITHUB_ISSUES_URL}/${CIRCLE_PR_NUMBER}/comments \
--data '{
  "body":"🚀 🎉 Storybook for ['${CIRCLE_BRANCH}']('${SURGE_URL}') 🚀"
}'