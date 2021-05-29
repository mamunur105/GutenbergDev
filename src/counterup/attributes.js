const attributes = {
	counterValue: {
		type: 'number',
		default: 500
	},
	counterContent: {
		type: 'string',
		source: 'html',
		selector: 'p'
	}
};

export default attributes;
