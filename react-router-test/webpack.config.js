/*eslint-disable no-var */
var fs = require('fs')
var path = require('path')
var webpack = require('webpack')

module.exports = {

  devtool: 'inline-source-map',

  entry: fs.readdirSync(__dirname).reduce(function (entries, dir) {
    if (fs.statSync(path.join(__dirname, dir)).isDirectory())
        if(dir != '.git' && dir != 'node_modules') {
            entries[dir] = path.join(__dirname, dir, 'app.js')      
        }
      

    return entries
  }, {}),

  output: {
    path: __dirname + '/__build__',
    filename: '[name].js',
    chunkFilename: '[id].chunk.js',
    publicPath: '/__build__/'
  },

  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel', query : {
          presets : ['es2015', 'react']
      } },
      { test: /\.css$/, loader: 'style!css' }
    ]
  }

}