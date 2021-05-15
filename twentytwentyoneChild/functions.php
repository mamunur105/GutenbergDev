<?php
add_action( 'wp_enqueue_scripts', 'my_theme_enqueue_styles' );
function my_theme_enqueue_styles() {
	$version = ( defined( 'SCRIPT_DEBUG' ) && SCRIPT_DEBUG ) ? time() : '1.0';

	$parenthandle = 'twenty-twenty-one-style'; // This is 'twentyfifteen-style' for the Twenty Fifteen theme.
	$theme        = wp_get_theme();
	wp_enqueue_style(
		$parenthandle,
		get_template_directory_uri() . '/style.css',
		array(),  // if the parent theme code has a dependency, copy it to here
		$version
	);
	wp_enqueue_style(
		'twenty-twenty-one-child-style',
		get_stylesheet_uri(),
		array( $parenthandle ),
		$version  // this only works if you have Version in the style header
	);
}



require get_stylesheet_directory() . '/gutenberg/gutenberg.php';


