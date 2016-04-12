// Karma configuration
// Generated on Tue Feb 23 2016 13:15:23 GMT+0800 (HKT)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '..',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['mocha', 'chai', 'chai-as-promised'],


    // list of files / patterns to load in the browser
    files: [
      'src/**/*.spec.*'
    ],


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      'src/**/*.spec.*': ['webpack']
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['mocha'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome', 'Safari', 'Firefox', 'IE'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: 2,

    webpack: {
      devtool: 'inline-source-map',
      resolve: {
        extensions: ["", ".js", ".jsx"]
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
            test: /\.json$/,
            loader: "json-loader"
          },
          {
            test: /\.(png|woff|woff2|eot|ttf|svg)(\?.*)?$/,
            loader: 'url-loader?limit=100000'
          }
        ]
      }
    },

    webpackMiddleware: {

    }

  })
}
