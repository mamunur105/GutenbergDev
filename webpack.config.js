const path = require('path');
const defaultConfig = require('@wordpress/scripts/config/webpack.config');
const FileManagerPlugin = require('filemanager-webpack-plugin');

const production = defaultConfig.mode === 'production';
const FileManagerPluginConfig = () => (
	! production ? {} :
	{
		events: {
			onEnd: {
				copy: [
					{ source: './readme.txt', destination: './dist/readme.txt' },
					{ source: './*.php', destination: './dist/' },
					{ source: './html-template', destination: './dist/html-template' },
					{ source: './inc', destination: './dist/inc' },
					{ source: './build', destination: './dist/build' }
				],
				archive: [
					{ source: './dist', destination: './guttenberg-blocks.zip' }
				]
			}
		}
	}
);

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
		new FileManagerPlugin( FileManagerPluginConfig() )
	]
};
