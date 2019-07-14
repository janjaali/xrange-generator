const path = require('path');

module.exports = {
  mode: 'none',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'index.js',
    library: 'xrange-generator',
    libraryTarget: 'umd',
    globalObject: 'this',
  },
  module: {
    rules: [
      {
        test: /.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  }
}
