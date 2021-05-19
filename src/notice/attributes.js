const attributes = {
	content: {
		type: 'string',
		source: 'html',
		selector: 'p'
	},
	type: {
		type: 'string',
		source: 'attribute',
		selector: 'div.gutadns-alert',
		attribute: 'class',
		default: 'success'
	},
	bgColor : {
		type: 'string'
	},
};

export default attributes;
