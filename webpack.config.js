// require imports a package to the file. 
// path is used to normalize paths, similar to os.path.join in python
var path = require('path');
// we'll obviously need webpack
var webpack = require('webpack');
// We'll use this to handle the copying of our index.html file
var HtmlWebpackPlugin = require('html-webpack-plugin');

// define the build and source directory.
var BUILD_DIR = path.join(__dirname, 'dist');
var SRC_DIR = path.join(__dirname, 'src');

// these values get made public to anything importing this file
module.exports = {
    // defines the entry point so the bundler knows where to start
    entry: './src/main.js',
    // designates where the JS bundle is saved
    output: { path: BUILD_DIR, filename: 'bundle.js' },
    // handles the copying of the Index.html file to the build dir
    plugins: [
    new HtmlWebpackPlugin({
      hash: true,
      filename: 'index.html',
      template: SRC_DIR + '/index.html'
    }),
  ],
  module: {
    loaders: [
      {
        test: /.js?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      },
    ]
  },
    // tells the webpack-dev-server to serve content from the build directory
    devServer: {
        contentBase: BUILD_DIR,
      },
  };