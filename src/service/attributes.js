const attributes = {
	title: {
		type: 'string'
	},
	content: {
		type: 'string',
		source: 'html',
		selector: 'p'
	},
	bgColor : {
		type: 'string'
	},
};

export default attributes;
