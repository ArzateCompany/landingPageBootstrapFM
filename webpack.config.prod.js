const PATH = require('path');
const HtmlwebpackPlugin = require('html-webpack-plugin');
const Webpack = require('webpack');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin');

module.exports = {
  entry: PATH.resolve(__dirname, './src/index.jsx'),
  mode: 'production',
  output: {
    path: PATH.resolve(__dirname, 'dist'),
    publicPath: 'https://arzatecompany.github.io/landingPageBootstrapFM/',
    filename: 'js/[name].js',
    chunkFilename: 'js/[id].[chunkhash].js'
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
          {
            loader: MiniCSSExtractPlugin.loader,
          },
          'css-loader'
        ]
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: MiniCSSExtractPlugin.loader
          },
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.svg|png|jpeg$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 1000,
          }
        }
      }
    ]
  },
  optimization: {
    splitChunks: {
      name: 'commons',
      minSize: 0,
      chunks: 'all',
    },
  },
  plugins: [
    new HtmlwebpackPlugin({
      template: PATH.resolve(__dirname, './public/index.html')
    }),
    new Webpack.DllReferencePlugin({
      manifest: require('./modules-manifest.json'),
    }),
    new MiniCSSExtractPlugin({
      filename: 'css/[name].[hash].css'
    }),
    new AddAssetHtmlPlugin({
      filepath: PATH.resolve(__dirname, 'dist/js/*.dll.js'),
      outputPath: 'js',
      publicPath: 'https://arzatecompany.github.io/landingPageBootstrapFM/js'
    })
  ],
};
