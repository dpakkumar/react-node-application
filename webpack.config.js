const webpack = require('webpack');
const path = require('path')
const clientPath = path.resolve(__dirname, 'client')
const WebPackAssetManifest = require('webpack-assets-manifest');
const { StatsWriterPlugin } = require("webpack-stats-plugin"); 
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const modifyAssetScript = () => {
    return new StatsWriterPlugin({
      filename: 'assets.js',
      transform(data) {
        return `window.assets=${JSON.stringify(data.assetsByChunkName)}`;
      }
    });
};

module.exports = [{
  entry: {
    home: [path.resolve(__dirname, 'client', 'javascripts', 'index.jsx')]
  },
  mode: 'development',
  output: {
    filename: '[name].[hash].js',
    chunkFilename: 'js/[name].[chunkhash].js',
    publicPath: '/pages',
    path: path.resolve(__dirname, 'public', 'pages'),
  },
  resolve: {
    extensions: ['.js', '.jsx', '.scss', '.css', '.sass']
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        include: [clientPath]
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  },
  plugins: [
    // new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].[hash:10].css'
    }),
    new WebPackAssetManifest({ output: 'assets.js' }),
    modifyAssetScript(),
    new CopyWebpackPlugin({
      patterns: [
        { from: path.resolve(__dirname, 'client', 'images'), to: path.resolve(__dirname, 'public', 'pages', 'assets', 'images') },
      ]
    }),
  ]
}, 
]