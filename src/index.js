const {registerBlockType} = wp.blocks;
const {__} = wp.i18n; // Import __() from wp.i18n
registerBlockType( 'mamun/cta-block', {
	title: 'Call to action',
	description: 'Block to generate a custom Call to action',
	icon: 'format-image',
	category: 'layout',
	attributes: {
		author: {
			type: 'strings',
		}
	},
	edit( { attributes, setAttributes} ){
		// Custom Function.
		function updateAuthor(event) {
			setAttributes( { author: event.target.value } )
		}
		return ( 
			<div>
				<input value={attributes.author} onChange={updateAuthor} type="text" />
			</div>
		);
	},
	save( { attributes } ){
		return (
			<div>
				Hello: {attributes.author}
			</div>
		);
	}
} );