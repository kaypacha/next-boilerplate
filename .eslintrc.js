const modules = ['tests', 'hooks', 'components', 'static', 'utils', 'pages', 'theme', 'views']
const assets = ['^.+\\.css$', '^assets', '^static', '^public']

const dependencies = [
  // React package - types
  '^react\\u0000$',
  // Dependencies - types
  `^(?!${modules.join('|')})@?\\w.*\\u0000$`,
  // Side effect
  '^\\u0000',
  // React package
  '^react$',
  // Dependencies
  `^(?!${modules.join('|')})@?\\w`,
]

const internalModules = [...modules.slice(1)].map(module => `^${module}`)

const internalModulesTypes = [...internalModules].map(
  internalModule => `${internalModule}.*\\u0000$`
)

const internal = [
  // First category
  ...internalModulesTypes,
  // Second category
  ...internalModules,
]

const relatives = [
  // Parent imports. Put `..` last.
  '^\\.\\.(?!/?$).*\\u0000$',
  '^\\.\\./?$.*\\u0000$',
  '^\\.\\.(?!/?$)',
  '^\\.\\./?$',
  // Other relative imports. Put same-folder imports and `.` last.
  '^\\./(?=.*/)(?!/?$).*\\u0000$',
  '^\\.(?!/?$).*\\u0000$',
  '^\\./?$.*\\u0000$',
  '^\\./(?=.*/)(?!/?$)',
  '^\\.(?!/?$)',
  '^\\./?$',
]

const groups = [
  // First group
  assets,
  // Second group
  dependencies,
  // Third group
  internal,
  // Fourth group
  relatives,
]

module.exports = {
  plugins: ['filename-rules', 'simple-import-sort'],
  extends: [
    'plugin:storybook/recommended',
    'eslint:recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
    'next',
  ],
  overrides: [
    {
      files: ['*.js', '*.jsx'],
      parserOptions: {
        project: ['./jsconfig.json'],
      },
    },
  ],
  env: {
    node: true,
    browser: true,
    jest: true,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    // storybook
    'storybook/default-exports': 'off',
    // eslint
    'object-curly-spacing': ['warn', 'always'],
    'max-len': [
      'warn',
      {
        code: 100,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreComments: true,
      },
    ],
    'max-params': ['error', 3],
    'no-use-before-define': [
      'error',
      {
        functions: false,
        classes: true,
        variables: true,
      },
    ],
    'no-restricted-exports': 'off',
    'no-unused-vars': 'warn',
    'import/prefer-default-export': 'off',
    // Filename rules
    'filename-rules/match': [2, 'kebab-case', '^(?!_app|_document)'],
    // React eslint
    'react/jsx-filename-extension': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-boolean-value': 'off',
    'react/prop-no-use-before-define': 'off',
    'react/no-unescaped-entities': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'react/jsx-wrap-multilines': 'off',
    'react/destructuring-assignment': 'off',
    // https://reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html#eslint
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-no-constructed-context-values': 'off',
    // import
    'simple-import-sort/imports': ['error', { groups }],
  },
}
