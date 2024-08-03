import type { StorybookConfig } from '@storybook/nextjs';

const config: StorybookConfig = {
  stories: ['./stories/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-onboarding',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@chromatic-com/storybook',
    '@storybook/addon-interactions',
    '@storybook/addon-themes'
  ],
  webpackFinal: async ( config ) => {
    if ( config.resolve ) {
      config.resolve.alias = {
        ...config.resolve.alias,
        '@': '../src',
      };
    } else {
      config.resolve = {
        alias: {
          '@': '../src',
        },
      };
    }
    return config;
  },
  framework: {
    name: '@storybook/nextjs',
    options: {},
  },
  staticDirs: ['../public'],
};
export default config;
