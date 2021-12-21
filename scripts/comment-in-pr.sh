SURGE_URL=https://${GITHUB_REPOSITORY#*/}-${GITHUB_HEAD_REF}.surge.sh

GITHUB_ISSUES_URL=https://api.github.com/repos/${GITHUB_REPOSITORY}/issues

curl -s -H "Authorization: token ${GITHUB_TOKEN}" \
 -X POST -d '{"body":"🚀 Good job! The Storybook deploy is in ['${GITHUB_HEAD_REF}']('${SURGE_URL}') 🚀"}' \
 "${GITHUB_ISSUES_URL}/${PR_NUMBER}/comments"