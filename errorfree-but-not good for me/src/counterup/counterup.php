<?php

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/block-editor/tutorials/block-tutorial/writing-your-first-block-type/
 */
function create_block_counterup_block_init() {
	register_block_type_from_metadata( __DIR__ );
}
add_action( 'init', 'create_block_counterup_block_init' );
