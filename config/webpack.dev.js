const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const path = require('path');
const commonConfig = require('./webpack.common');

const devConfig = {
  mode: 'development',
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: 'http://localhost:3002/',
    filename: 'bundle.js',
  },
  devtool: 'inline-source-map',
  devServer: {
    port: 3002,
    historyApiFallback: true,
    static: {
      directory: path.join(__dirname, '../public'),
    },
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'communication',
      filename: 'remoteEntry.js',
      exposes: {
        './CommunicationApp': './src/bootstrap',
      },
      shared: ['react', 'react-dom'],
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
      publicPath: 'auto',
    }),
  ],
};

module.exports = merge(commonConfig, devConfig);
