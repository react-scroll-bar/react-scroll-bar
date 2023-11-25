import { defineConfig } from 'cypress';
import defaultWebpackConfig from './webpack.dev';

export default defineConfig({
  component: {
    devServer: {
      framework: 'react',
      bundler: 'webpack',
      webpackConfig: defaultWebpackConfig,
    },
    video: false,
  },
});