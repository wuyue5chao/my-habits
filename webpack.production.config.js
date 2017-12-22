const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry : __dirname + "/app/main.js",
  output : {
    path : __dirname + "/build",
    filename : "bundle-[hash].js"
  },
  devtool : "none",
  devServer : {
    contentBase : "./public",
    // stats: {colors: true},
    historyApiFallback : true,
    inline : true,
    hot: true
  },
  module : {
    rules : [
      {
        test : /\.json$/,
        loader : "json-loader"
      },
      {
        test : /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        query: {
          presets:["es2015", "react"]
        }
      },
      {
        test : /\.css$/,
        use : ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: [
            {
              loader: "css-loader",
              options: {
                modules: true,
                importLoader: 1
              }
            },
            {
              loader: "postcss-loader"
            }
          ]
        })
        /*use: [
          {loader: "style-loader"},
          {
            loader: "css-loader",
            options: {modules: true}
          },
          {loader: "postcss-loader"},
          {loader: "sass-loader"}
        ]*/
      }
    ]
  },
  plugins: [
    new webpack.BannerPlugin('Copyright hello-webpack'),
    new HtmlWebpackPlugin({
      template: __dirname + "/app/index.tmpl.html"
    }),
    new webpack.HotModuleReplacementPlugin(),
      new webpack.optimize.OccurrenceOrderPlugin(),
      new webpack.optimize.UglifyJsPlugin(),
      //new ExtractTextPlugin("style.css")
      new ExtractTextPlugin("[name]-[hash].css")
  ]
}