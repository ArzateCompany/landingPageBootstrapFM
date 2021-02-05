const PATH = require('path');
const HtmlwebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: PATH.resolve(__dirname, './src/index.jsx'),
  mode: 'development',
  output: {
    path: PATH.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js|jsx$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
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
      },
      {
        test: /\.svg|png|jpeg$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 9000,
          }
        }
      }
    ]
  },
  plugins: [
    new HtmlwebpackPlugin({
      template: PATH.resolve(__dirname, './public/index.html')
    })
  ],
};