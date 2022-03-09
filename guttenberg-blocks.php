<?php
/**
 * The plugin bootstrap file
 *
 * @link              https://wordpress.org/plugins/unique-trendy-blocks-for-gutenberg
 * @since             1.0.0
 * @package           UABFG_Block
 *
 * @wordpress-plugin
 * Plugin Name:       Unique & Trendy Blocks For Gutenberg
 * Plugin URI:        https://wordpress.org/plugins/unique-trendy-blocks-for-gutenberg
 * Description:       This is for woocommerce Category,Related product, And also For Promotional slider.
 * Version:           5.0.0
 * Requires at least: 5.0
 * Requires PHP:      7.0
 * Author:            Mamunur rashid
 * Author URI:        https://profiles.wordpress.org/mamunur105
 * License:           GPL v2 or later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       utbfg
 * Domain Path:       /languages
 */

/**
 * Add new category.
 *
 * @param array  $categories list.
 * @param object $post .
 * @return array.
 */

require_once __DIR__ . './vendor/autoload.php';

define( 'UTBFG_VERSION', '1.0.0' );
define( 'UTBFG_PLUGIN_PREFIX', 'UTBFG' );
define( 'UTBFG_PLUGIN_NAME', 'guttenberg-blocks' );
define( 'UTBFG_PLUGIN_DIR', plugin_dir_path( __FILE__ ) );
define( 'UTBFG_PLUGIN_FILE', __FILE__ );
define( 'UTBFG_URL', plugins_url( '', UTBFG_PLUGIN_FILE ) );
define( 'UTBFG_ASSETS_BUILD', UTBFG_URL . '/build' );

/**
 * Main File.
 */

require_once UTBFG_PLUGIN_DIR . 'app/Utbfg.php';

