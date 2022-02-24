const path = require('path')
const clientPath = path.resolve(__dirname, 'client')
const WebPackAssetManifest = require('webpack-assets-manifest');
const { StatsWriterPlugin } = require("webpack-stats-plugin"); 
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
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
    home: [path.resolve(__dirname, 'client', 'javascripts', 'index.jsx')],
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
        use: [{
          loader: "style-loader"
        }, {
          loader: "css-loader" 
        }, {
          loader: "sass-loader"
        }],
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
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