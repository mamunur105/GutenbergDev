const attributes = {
	counterValue: {
		type: 'number'
	},
	counterContent: {
		type: 'string',
		source: 'html',
		selector: 'p'
	}
};

export default attributes;
