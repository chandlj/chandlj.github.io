const path = require('path');
// This file tells webpack how to load each file type
module.exports = [
  {
    test: /\.jsx?$/,
    include: [
      path.resolve('./frontend/js'),
    ],
    exclude: /(node_modules|bower_components|public\/)/,
    loader: 'babel-loader',
  },
  {
    test: /\.js?$/,
    include: [
      path.resolve('./frontend/js'),
    ],
    exclude: /(node_modules|bower_components|public\/)/,
    loader: 'babel-loader',
  },
  {
    test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
    exclude: /(node_modules|bower_components)/,
    loader: 'file-loader',
  },
  {
    test: /\.(pdf|jpe?g|png|gif|svg)$/i,
    loader: 'file-loader',
    options: {
      name: 'frontend/assets/[name].[ext]',
    },
  },
  {
    test: /\.css$/i,
    use: ['css-loader'],
  },
];
