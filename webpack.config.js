var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: "./src/index.jsx",
  resolve: {
    extensions: ["", ".js", ".jsx"],
  },
  output: {
    path: __dirname + '/public/lib',
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.css$/,
        loader: "style!css"
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)(\?.*)?$/,
        loader: 'url-loader?limit=100000'
      }
    ]
  }
};
