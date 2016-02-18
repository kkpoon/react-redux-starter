var path = require('path');
var webpack = require('webpack');
var nodeExternals = require('webpack-node-externals');

var plugins = [
  new webpack.DefinePlugin({
    'process.env': {
      'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    }
  })
];

module.exports = [
  {
    name: "web",
    entry: "./src/web/index.jsx",
    resolve: {
      extensions: ["", ".ts", ".tsx", ".coffee", ".js", ".jsx", ".less"]
    },
    output: {
      path: path.resolve(__dirname, 'public/lib'),
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
          test: /\.coffee$/,
          loader: "coffee-loader"
        },
        {
          test: /\.less$/,
          loader: "style!css!less"
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
  },
  {
    name: "bin",
    target: "node",
    externals: [nodeExternals()],
    entry: {
      app: "./src/servers/app.js"
    },
    resolve: {
      extensions: ["", ".js"]
    },
    output: {
      path: path.resolve(__dirname, 'lib/servers'),
      filename: "[name]",
      libraryTarget: "commonjs2",
    },
    module: {
      loaders: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: "babel-loader"
        }
      ]
    },
    plugins: plugins
  }
];
