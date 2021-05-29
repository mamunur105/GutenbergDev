const attributes = {
	align: { type: 'string', default: 'center' },
	bgColor: { type: 'string', default: '' },
	bold: { type: 'string', default: 'inherit' },
	colorPicker: { type: 'string', default: '' },
	decimal: { type: 'string', default: '' },
	decimals: { type: 'number', default: 0 },
	delay: { type: 'number', default: 0 },
	duration: { type: 'number', default: 2 },
	easing: { type: 'boolean', default: false },
	end: { type: 'number', default: 0 },
	fontSize: { type: 'number', default: 21 },
	grouping: { type: 'boolean', default: false  },
	italic: { type: 'string', default: 'inherit' },
	prefix: { type: 'string', default: false },
	reset: { type: 'boolean', default: false },
	scroll: { type: 'boolean', default: false },
	separator: { type: 'string', default:false },
	start: { type: 'number', default: 0 },
	suffix: { type: 'string', default: false }
};

export default attributes;
