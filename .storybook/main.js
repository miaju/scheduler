module.exports = {
  stories: ['../src/stories/*.js'],
  addons: [
    "@storybook/addon-actions/register",
    "@storybook/addon-backgrounds",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/preset-create-react-app",
  ],
  framework: "@storybook/react",
  core: {
    builder: "@storybook/builder-webpack5"
  }
};

