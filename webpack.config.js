var path = require("path");
var webpack = require('webpack');

module.exports = {
  context: __dirname,
  entry: './frontend/instashare.js.jsx',
  output: {
    path: path.join(__dirname, 'app', 'assets', 'javascripts'),
    filename: "bundle.js",
  },
  module: {
    loaders: [
      {
        loader: 'style!css',
        test: /\.css$/
      },
      {
        test: [/\.jsx?$/, /\.js?$/],
        exclude: /(node_modules)/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
  devtool: 'source-map',
  resolve: {
    extensions: ["", ".js", ".jsx" ]
  }
};
