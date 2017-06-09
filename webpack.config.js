var ExtractTextPlugin = require('extract-text-webpack-plugin')
var path = require('path')

module.exports = {
  entry: path.resolve(__dirname, 'src', './index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: './bundle.js'
  },
  devtool: '#inline-source-map',
  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader'
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
    new ExtractTextPlugin('bundle.css')
  ]
}