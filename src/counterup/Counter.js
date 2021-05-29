import { useCountUp } from 'use-count-up';

const Counter = ( { setValue } ) => {
	const obj = {
		isCounting: true,
		end: setValue,
		// fallback options
		decimalPlaces: 2,
		decimalSeparator: ',',
		thousandsSeparator: '.'
	}
	const { value } = useCountUp( obj );
	return value;
};

export default Counter;