const attributes = {
	counterValue: {
		type: 'number',
		source: 'html',
		selector: 'span.countvalue'
	},
	counterContent: {
		type: 'string',
		source: 'html',
		selector: 'p'
	}
};

export default attributes;
