const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./webpack.common');

const prodConfig = {
  mode: 'production',
  output: {
    filename: '[name].[contenthash].js',
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'communication',
      filename: 'remoteEntry.js',
      exposes: {
        './CommunicationApp': './src/bootstrap',
      },
      shared: [
        'axios',
        'history',
        'react',
        'react-dom',
        'react-router',
        'react-router-dom',
      ],
    }),
  ],
};

module.exports = merge(commonConfig, prodConfig);
