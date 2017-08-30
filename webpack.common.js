const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'index.js',
    library: 'xrange-generator',
    libraryTarget: 'umd'
  },
  plugins: [
    new CleanWebpackPlugin(['build'])
  ],
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
