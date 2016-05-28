module.exports = {
  devtool : 'source-map',
  output : {
    filename : 'example.js'
  },
  module : {
    loaders : [{
      test : /.js?$/,
      exclude : /node_modules/,
      loader : 'babel-loader',
      query : {
        presets : ['es2015', 'react']
      }
    }],
  }
}