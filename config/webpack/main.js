const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const rules = require('./rules');

const HOST = process.env.HOST || '0.0.0.0';
const PORT = process.env.PORT || '8080';

module.exports = {
  entry: path.join(process.cwd(), 'frontend', 'js', 'main.js'),
  mode: 'development',
  devtool: process.env.WEBPACK_DEVTOOL || 'eval-source-map',
  output: {
    path: path.resolve(process.cwd(), 'dist'),
    filename: '[name].js',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      js: path.join(process.cwd(), 'frontend', 'js'),
    },
  },
  module: { rules },
  devServer: {
    hot: true,
    // embed the webpack-dev-server runtime into the bundle
    historyApiFallback: true,
    port: PORT,
    host: HOST,
  },
  optimization: {
    removeAvailableModules: false,
    removeEmptyChunks: false,
    splitChunks: false,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(process.cwd(), 'frontend', 'index.html'),
      files: {
        js: ['[name].js'],
      },
    }),
  ],
};
