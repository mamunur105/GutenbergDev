<?php
function mamun_gutenberg_blocks() {
	wp_register_script( 'custom-cta-js', get_stylesheet_directory_uri() . '/blocks/js/gutenberg-cta-block.js', array( 'wp-blocks' ) );
	register_block_type(
		'mamun/cta-block',
		array(
			'editor_script' => 'custom-cta-js',
		)
	);
}

add_action( 'init', 'mamun_gutenberg_blocks' );

