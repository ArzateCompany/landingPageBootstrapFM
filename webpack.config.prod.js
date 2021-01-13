const PATH = require('path');
const HtmlwebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: PATH.resolve(__dirname, './src/index.js'),
  mode: 'development',
  output: {
    path: PATH.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  },
  plugins: [
    new HtmlwebpackPlugin({
      template: PATH.resolve(__dirname, './src/index.html')
    })
  ],
};