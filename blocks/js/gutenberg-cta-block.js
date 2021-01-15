const {registerBlockType} = wp.blocks;
registerBlockType( 'mamun/cta-block', {
	title: 'Call to action',
	description: 'Block to generate a custom Call to action',
	icon: 'format-image',
	category: 'layout',
	attributes: {

	}
	// edit(){},
	// save(){},
} );