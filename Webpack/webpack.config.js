module.exports = {
  entry: './js/main.js',
  output: {
    filename: './dist/bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ["env", {
                "targets": {
                  "browsers": ["last 2 versions", "ie >= 8"]
                }
              }]
            ]
          }
        }
      }
    ]
  }
};
