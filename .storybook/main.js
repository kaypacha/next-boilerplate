const path = require('path')

const config = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],

  framework: {
    name: '@storybook/nextjs',
    options: {},
  },
  // webpackFinal: async config => {
  //   config.resolve.modules = [...(config.resolve.modules || []), path.resolve(__dirname, '../src')]

  //   return config
  // },
  docs: {
    autodocs: true,
  },
}

export default config
