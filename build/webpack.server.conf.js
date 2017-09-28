var baseWebpackConfig = require('./webpack.base.conf')
var merge = require('webpack-merge')
var config = require('../config')
var webpack = require('webpack')

var webpackConfig = merge(baseWebpackConfig, {
  target: 'node',
  entry: {
    app: './src/main-server.js'
  },
  output: {
    libraryTarget: 'commonjs2',
    filename: 'bundle.server.js',
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': config.server.env
    })
  ]
})

module.exports = webpackConfig
