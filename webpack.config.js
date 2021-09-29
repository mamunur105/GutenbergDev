const path = require('path');

const defaultConfig = require('@wordpress/scripts/config/webpack.config');
const FileManagerPlugin = require('filemanager-webpack-plugin');
const FileManagerPluginConfig = require('./FileManagerPluginConfig');
const WebpackBuildNotifierPlugin = require('webpack-build-notifier');

const production = defaultConfig.mode === 'production';

module.exports = {
	...defaultConfig,
	entry: {
		'blocks/index': path.resolve(__dirname, 'src', 'index.js'),
		'frontend/index': path.resolve(__dirname, 'src', 'frontend.js')
	},
	output: {
		path: path.resolve(__dirname, 'build')
	},
	plugins: [
		...defaultConfig.plugins,
		// ... Other Plugins
		new FileManagerPlugin( FileManagerPluginConfig( production ) ),
		new WebpackBuildNotifierPlugin({
			// successSound: false,
			title: "Build Successfully",
			logo: path.resolve("./img/favicon.png"),
			suppressSuccess: true, // don't spam success notifications
		})
	]
};
