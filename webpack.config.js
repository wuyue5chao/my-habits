const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry : __dirname + "/app/main.js",
	output : {
		path : __dirname + "/build",
		filename : "bundle.js"
	},
	devtool : "eval-source-map",
	devServer : {
		contentBase : "./public",
		// stats: {colors: true}
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
				test : /\.(css|scss)$/,
				use : [
					{
						loader: "style-loader"
					},
					{
						loader:"css-loader",
						options: {
							modules: true,
							importLoaders: 1
						}
					},
					{
						loader: "postcss-loader"/*,
						options: {
							plugins: (loader) => {
								require("autoprefixer")();
							}
						}*/
					},
					{
						loader: "sass-loader"
					}
				]
			}
		]
	},
	plugins: [
		new webpack.BannerPlugin('Copyright hello-webpack'),
		new HtmlWebpackPlugin({
			template: __dirname + "/app/index.tmpl.html"
		}),
		new webpack.HotModuleReplacementPlugin()
	]
}