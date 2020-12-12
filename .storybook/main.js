module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials']
}
module.exports = {
  webpackFinal: async (baseConfig) => {
    const nextConfig = require('/path/to/next.config.js')

    // merge whatever from nextConfig into the webpack config storybook will use
    return { ...baseConfig }
  }
}
