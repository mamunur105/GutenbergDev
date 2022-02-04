const FileManagerPluginConfig = (production) => {
	const Devconfig = {
		events: {
			onStart: {
				delete: [
					'./dist',
					'./build'
				]
			}
		}
	}
	// console.log( Devconfig.events );
	const config = {
		events: {
			...Devconfig.events,
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
