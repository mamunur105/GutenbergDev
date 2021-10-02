const FileManagerPluginConfig = (production) => {
	const config = {
		events: {
			onStart: {
				delete: [
					'./dist',
					'./build'
				]
			},
			onEnd: {
				copy: [
					{
						source: './readme.txt',
						destination: './dist/guttenberg-blocks/readme.txt'
					},
					{
						source: './index.php',
						destination: './dist/guttenberg-blocks/index.php'
					},
					{
						source: './guttenberg-blocks.php',
						destination: './dist/guttenberg-blocks/guttenberg-blocks.php'
					},
					{
						source: './html-template',
						destination: './dist/guttenberg-blocks/html-template'
					},
					{
						source: './inc',
						destination: './dist/guttenberg-blocks/inc'
					},
					{
						source: './build',
						destination: './dist/guttenberg-blocks/build'
					}
				],
				archive: [
					{
						source: './dist/guttenberg-blocks',
						destination: './dist/guttenberg-blocks.zip'
					}
				]
			}
		}
	};
	return production ? config : {};
};

module.exports = FileManagerPluginConfig;
