var path = require('path');
var webpack = require('webpack');

var plugins = [
  new webpack.DefinePlugin({
    'process.env': {
      'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    }
  })
];

module.exports = {
  entry: "./src/index.jsx",
  resolve: {
    extensions: ["", ".ts", ".tsx", ".js", ".jsx"]
  },
  output: {
    path: path.resolve(__dirname, 'lib'),
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
        test: /\.tsx?$/,
        loader: 'ts-loader'
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
  },
  plugins: plugins
};
