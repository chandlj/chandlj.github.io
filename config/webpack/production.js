const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const rules = require('./rules');

module.exports = {
  entry: path.join(process.cwd(), 'frontend', 'js', 'main.js'),
  mode: 'production',
  output: {
    path: path.resolve(process.cwd(), 'build'),
    filename: '[name].js',
    clean: true,
  },
  optimization: {
    minimize: true,
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      js: path.join(process.cwd(), 'frontend', 'js'),
    },
  },
  module: { rules },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(process.cwd(), 'frontend', 'index.html'),
      files: {
        js: ['[name].js'],
      },
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
      __DEVELOPMENT__: false,
    }),
  ],
};
