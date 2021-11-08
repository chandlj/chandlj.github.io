const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const rules = require('./rules');

module.exports = {
  entry: { main: './frontend/js/main.js' },
  mode: 'production',
  output: {
    path: path.join(process.cwd(), 'build'),
    filename: '[name].js',
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
  ],
};
