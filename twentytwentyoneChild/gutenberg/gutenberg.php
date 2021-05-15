<?php
/**
 * Custom Gutenberg Block
 */

function alex_guttenberg_default_colors() {

	add_theme_support(
		'editor-color-palette',
		array(
			array(
				'name'  => 'White',
				'slug'  => 'white',
				'color' => '#ffffff',
			),
			array(
				'name'  => 'Black',
				'slug'  => 'black',
				'color' => '#000',
			),
			array(
				'name'  => 'Pink',
				'slug'  => 'pink',
				'color' => '#ff4444',
			),
		)
	);

}

add_action( 'init', 'alex_guttenberg_default_colors' );

function mytheme_setup_theme_supported_features() {
	add_theme_support(
		'editor-color-palette',
		array(
			array(
				'name'  => esc_attr__( 'strong magenta', 'themeLangDomain' ),
				'slug'  => 'strong-magenta',
				'color' => '#a156b4',
			),
			array(
				'name'  => esc_attr__( 'light grayish magenta', 'themeLangDomain' ),
				'slug'  => 'light-grayish-magenta',
				'color' => '#d0a5db',
			),
			array(
				'name'  => esc_attr__( 'very light gray', 'themeLangDomain' ),
				'slug'  => 'very-light-gray',
				'color' => '#eee',
			),
			array(
				'name'  => esc_attr__( 'very dark gray', 'themeLangDomain' ),
				'slug'  => 'very-dark-gray',
				'color' => '#444',
			),
			array(
				'name'  => esc_attr__( 'very red', 'themeLangDomain' ),
				'slug'  => 'very-red',
				'color' => '#ff0044',
			),
		)
	);
}

// add_action( 'init', 'mytheme_setup_theme_supported_features' );

function alecade_gutenberg_blocks() {
	$version = ( defined( 'SCRIPT_DEBUG' ) && SCRIPT_DEBUG ) ? time() : '1.0';
	wp_register_script( 'custom-cta', get_stylesheet_directory_uri() . '/build/index.js', array( 'wp-blocks', 'wp-element', 'wp-editor', 'wp-components' ), $version);

	wp_register_style( 'gut-style-editor', get_stylesheet_directory_uri() . '/style-editor.css', array(), $version );

	register_block_type(
		'alocade/custom-cta',
		array(
			'editor_script' => 'custom-cta',
			'editor_style' => 'gut-style-editor',
			'style' => 'gut-style-editor'
		)
	);
}
add_action( 'init', 'alecade_gutenberg_blocks' );
