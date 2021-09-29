const FileManagerPluginConfig = (production) => {
	const config = {
		events: {
			onEnd: {
				copy: [
					{
						source: './readme.txt',
						destination: './dist/guttenberg-blocks/readme.txt'
					},
					{
						source: './*.php',
						destination: './dist/guttenberg-blocks/'
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
