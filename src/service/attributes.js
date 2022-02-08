const attributes = {
	title: {
		type: 'string'
	},
	content: {
		type: 'string',
		source: 'html',
		selector: 'p'
	},
	type: {
		type: 'string',
		default: 'success'
	},
	bgColor : {
		type: 'string'
	},
};

export default attributes;
