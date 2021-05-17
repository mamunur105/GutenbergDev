<?php
/**
 * Plugin Name:       Starter Block
 * Description:       Example block written with ESNext standard and JSX support – build step required.
 * Requires at least: 5.7
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       starter-block
 *
 * @package           create-block
 */

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/block-editor/tutorials/block-tutorial/writing-your-first-block-type/
 */

function my_plugin_block_categories( $categories, $post ) {
	// if ( $post->post_type !== 'post' ) {
	// 	return $categories;
	// }
	return array_merge(
		$categories,
		array(
			array(
				'slug'  => 'my-category',
				'title' => __( 'My category', 'my-plugin' ),
				'icon'  => 'wordpress',
			),
		)
	);
}
add_filter( 'block_categories', 'my_plugin_block_categories', 10, 2 );
function create_block_gutenpride_block_init() {
	register_block_type_from_metadata( __DIR__ . '/src/counterup' );
	register_block_type_from_metadata( __DIR__ . '/src/notice' );
}
add_action( 'init', 'create_block_gutenpride_block_init' );
