var path = require("path");
var webpack = require("webpack");

module.exports = {
  devtool: "cheap-module-eval-source-map",
  name: "web",
  entry: ["babel-polyfill", "./src/index.jsx"],
  resolve: {
    extensions: ["", ".js", ".jsx", ".ts", ".tsx"]
  },
  output: {
    path: path.resolve(__dirname, "lib"),
    publicPath: "lib/",
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader'
      },
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
        test: /\.json$/,
        loader: "json-loader"
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)(\?.*)?$/,
        loader: "url-loader?limit=100000"
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        "NODE_ENV": JSON.stringify("development")
      },
      "__DEVTOOLS__": true
    })
  ]
};
