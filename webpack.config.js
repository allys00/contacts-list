const path = require('path');
// eslint-disable-next-line import/no-unresolved
const slsw = require('serverless-webpack');
const webpack = require('webpack');

module.exports = {
  entry: slsw.lib.entries,
  output: {
    libraryTarget: 'commonjs',
    filename: '[name].js',
    path: path.join(__dirname, '.webpack'),
  },
  mode: 'development',
  target: 'async-node',
  module: {
    rules: [
      {
        test: /\.js$/, // include .js files
        enforce: 'pre', // preload the jshint loader
        include: __dirname,
        use: [
          {
            loader: 'babel-loader',
          },
        ],
      },
    ],
  },
};