module.exports = {
  '**/*.+(js|ts|tsx)': ['eslint "**/*.{js,ts,tsx}"', 'prettier --write "**/*.{js,ts,tsx}"'],
  '**/*.+(js|jsx)': () =>
    'jest --watchAll=false --coverage --forceExit --detectOpenHandles --env=jsdom --colors',
}
