// @ts-nocheck

import tsPath from 'tsconfig-paths-webpack-plugin';
import type { StorybookConfig } from '@storybook/nextjs';

const TsconfigPathsPlugin = tsPath;

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-onboarding',
    '@storybook/addon-interactions',
    '@storybook/addon-styling',
  ],
  framework: {
    name: '@storybook/nextjs',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
  webpackFinal: async (config) => {
    return {
      ...config,
      resolve: {
        ...config.resolve,
        plugins: [
          ...(config.resolve.plugins || []),
          new TsconfigPathsPlugin({
            extensions: config.resolve.extensions,
          }),
        ],
      },
    };
  },
};
export default config;
