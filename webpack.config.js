var ExtractTextPlugin = require("extract-text-webpack-plugin");
var webpack = require("webpack");

module.exports = {
  entry: {
    vendor: ["react", "react-dom", "./node_modules/bootstrap/dist/css/bootstrap.css"],
    login : ["./public/src/login", "./public/style/login_style.css"],
    main: ["./public/src/main", "./public/style/main.css"],
    user_board : ["./public/src/user_board", "./public/style/main.css"],
    personal : ["./public/src/personal", "./public/style/personal_style.css"],
    doctor_main : ["./public/src/doctor_main", "./public/style/main.css"]
  },
  output: {
    path: require('path').resolve("./public/dist"),
    filename: "[name].js"
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.css$/, 
        loader: ExtractTextPlugin.extract("style-loader", "css-loader")
      },
      { test: /\.(png|jpg)$/,loader: 'url-loader?limit=10000'},
      {test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/font-woff'},
      {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream'},
      {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file'},
      {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml'}
    ]
  },
  devtool: "#cheap-source-map",
  plugins: [
    new ExtractTextPlugin("[name].css"),
    new webpack.optimize.CommonsChunkPlugin("vendor", "vendor.bundle.js")
  ]
};