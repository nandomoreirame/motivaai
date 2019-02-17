/* global __dirname, require, module */
'use strict'

const webpack = require('webpack')
const { join, resolve } = require('path')
const env = require('yargs').argv.env
const BrowserSyncPlugin = require('browser-sync-webpack-plugin')
const { name, description, version, author, license } = require('./package.json')

let libraryName = 'MotivaAi'
let outputFile = 'motivaai'
let plugins = []

plugins.push(new webpack.DefinePlugin({
  VERSION: JSON.stringify(version)
}))

if (env === 'build') {
  outputFile = `${outputFile}.min.js`
} else {
  outputFile = `${outputFile}.js`
  plugins.push(new BrowserSyncPlugin({
    ui: false,
    host: 'localhost',
    port: 3000,
    server: {
      baseDir: ['./'],
      index: './demo/index.html'
    }
  }))
}

plugins.push(new webpack.BannerPlugin({
  banner: `@package: ${name}
@description: ${description}
@version: ${version}
@author: ${author}
@license: Licensed under the ${license}`
}))

const config = {
  entry: join(__dirname, '/index.js'),
  mode: env === 'build' ? 'production' : 'development',
  devtool: 'source-map',
  output: {
    path: join(__dirname, '/lib'),
    filename: outputFile,
    library: libraryName,
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  module: {
    rules: [
      {
        // standard-loader as a preloader
        enforce: 'pre',
        test: /\.js?$/,
        loader: 'standard-loader',
        exclude: /(node_modules|bower_components)/,
        options: {
          error: false,
          snazzy: true,
          parser: 'babel-eslint'
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /(node_modules|bower_components)/
      }
    ]
  },
  resolve: {
    modules: [resolve('./'), resolve('./node_modules')],
    extensions: ['.js', '.scss']
  },
  plugins
}

module.exports = config
