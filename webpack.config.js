const path = require( 'path' );
const defaultConfig = require("@wordpress/scripts/config/webpack.config");
var ZipPlugin = require('zip-webpack-plugin');

module.exports = {
	...defaultConfig,
	entry: {
		'blocks/index': path.resolve(__dirname, "src", "index.js"),
		'frontend/index': path.resolve(__dirname, "src", "frontend.js")
	},
	output: {
		path: path.resolve(__dirname, "build"),
		filename: '[name].js',
	},
	// plugins: [
	// 	new ZipPlugin({
	// 		path: path.resolve(__dirname, '/dist'),
    //   		filename: 'dist.zip',
	// 	})
	// ]
}