const FileManagerPluginConfig = (production) => {
	const config = {
		events: {
			onEnd: {
				copy: [
					{
						source: './readme.txt',
						destination: './dist/readme.txt'
					},
					{
						source: './*.php',
						destination: './dist/'
					},
					{
						source: './html-template',
						destination: './dist/html-template'
					},
					{
						source: './inc',
						destination: './dist/inc'
					},
					{
						source: './build',
						destination: './dist/build'
					}
				],
				archive: [
					{
						source: './dist',
						destination: './guttenberg-blocks.zip'
					}
				]
			}
		}
	};
	return !production ? config : {};
};

module.exports = FileManagerPluginConfig;
