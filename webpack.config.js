var ExtractTextPlugin = require('extract-text-webpack-plugin')
var OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
var path = require('path')
var webpack = require('webpack')

module.exports = {
  entry: path.resolve(__dirname, 'src', './index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: './bundle.min.js'
  },
  devtool: '#inline-source-map',
  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015']
          }
        }
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract({
          use: 'css-loader?importLoaders=1!sass-loader'
        })
      }
    ]
  },
  resolve: {
    extensions: ['.js']
  },
  plugins: [
    new ExtractTextPlugin('bundle.min.css'),
    new OptimizeCssAssetsPlugin({
      assetNameRegExp: /\.min\.css$/,
      cssProcessorOptions: { discardComments: { removeAll: true } }
    }),
    new webpack.optimize.UglifyJsPlugin(),
  ]
}