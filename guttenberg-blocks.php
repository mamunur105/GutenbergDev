<?php
/**
 * Plugin Name:       Gutenberg Addons
 * Description:       Example block written with ESNext standard and JSX support – build step required.
 * Requires at least: 5.7
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       starter-block
 *
 * @package           gutenblock-addons
 */

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/block-editor/tutorials/block-tutorial/writing-your-first-block-type/
 */

/**
 * Add new category.
 *
 * @param array  $categories list.
 * @param object $post .
 * @return array.
 */
function gutenblock_addons_plugin_block_categories( $categories, $post ) {
	return array_merge(
		array(
			array(
				'slug'  => 'gutenblock-addons',
				'title' => __( 'Gutenberg Addons', 'gutenblock-addons' ),
				'icon'  => 'wordpress',
			),
		),
		$categories
	);
}



/**
 * 
 */

function create_gutenblock_addons_scripts() {
	$version = ( defined( 'SCRIPT_DEBUG' ) && SCRIPT_DEBUG ) ? time() : '1.0';
	wp_enqueue_script( 'blocks-script', plugin_dir_url( __FILE__ ) . '/build/index.js', array( 'wp-blocks', 'wp-element', 'wp-editor', 'wp-components' ), $version );
	if ( is_admin() ) {
		wp_enqueue_style( 'gut-style-editor', plugin_dir_url( __FILE__ ) . '/build/index.css', array(), $version );
	}
	wp_enqueue_style( 'front-style-editor', plugin_dir_url( __FILE__ ) . '/build/style-index.css', array(), $version );
}



/**
 * Block Registration.
 *
 * @return void
 */
function create_gutenblock_addons_init() {
	$block_list = array(
		'gutenblock-addons/counterup' => array(),
		'gutenblock-addons/notice'    => array(),
	);
	foreach ( $block_list as $key => $array ) {
		register_block_type( $key, $array );
	}
}

add_action(
	'plugins_loaded',
	function() {
		add_filter( 'block_categories', 'gutenblock_addons_plugin_block_categories', 10, 2 );
		add_action( 'init', 'create_gutenblock_addons_init' );
		add_action( 'enqueue_block_assets', 'create_gutenblock_addons_scripts' );
	}
);

