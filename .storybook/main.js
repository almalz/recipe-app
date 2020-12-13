module.exports = {
  // stories: ['../src/components/**/*.stories.@(js|jsx|ts|tsx)'],
  stories: ['../src/components/button/Button.stories.tsx'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials']
}
// module.exports = {
//   webpackFinal: async (baseConfig) => {
//     const nextConfig = require('../../next.config.js')

//     // merge whatever from nextConfig into the webpack config storybook will use
//     return { ...baseConfig }
//   }
// }
