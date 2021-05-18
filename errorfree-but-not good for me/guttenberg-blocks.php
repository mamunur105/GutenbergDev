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

add_action(
	'plugins_loaded',
	function() {
		include_once plugin_dir_path( __FILE__ ) . 'src/counterup/counterup.php';
		include_once plugin_dir_path( __FILE__ ) . 'src/notice/notice.php';
	}
);
