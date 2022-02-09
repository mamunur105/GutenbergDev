<?php
/**
 * The dashboard-specific functionality of the plugin.
 *
 * @link       http://codexin.com
 * @since      1.0.0
 *
 * @package    ImageMetadataSettings
 * @subpackage ImageMetadataSettings/admin
 */

namespace Utbfg\Controllers;

use Utbfg\Traits\SingletonTrait;

/**
 * Assets Controller class
 */
class AssetsController {
	/**
	 * Singleton
	 */
	use SingletonTrait;
	/**
	 * Construct function
	 */
	private function __construct() {
		add_action( 'enqueue_block_assets', array( $this, 'gutenblock_scripts' ) );
	}
	/**
	 * Undocumented function
	 *
	 * @return void
	 */
	public function gutenblock_scripts() {
		$asset_file     = include UTBFG_PLUGIN_DIR . 'build/index.asset.php';
		$asset_frontend = include UTBFG_PLUGIN_DIR . 'build/index.asset.php';

		wp_register_script(
			'blocks-script',
			UTBFG_ASSETS_BUILD . '/index.js',
			$asset_file['dependencies'],
			$asset_file['version'],
			true
		);
		wp_register_style(
			'guten-style-editor',
			UTBFG_ASSETS_BUILD . '/index.css',
			array(),
			$asset_file['version']
		);

		wp_register_script(
			'frontend-script',
			UTBFG_ASSETS_BUILD . '/frontend.js',
			$asset_frontend['dependencies'],
			$asset_frontend['version'],
			true
		);
		wp_register_style(
			'front-style-editor',
			UTBFG_ASSETS_BUILD . '/style-index.css',
			array(),
			$asset_file['version']
		);

		if ( is_admin() ) {
			wp_enqueue_script( 'blocks-script' );
			wp_enqueue_style( 'guten-style-editor' );
		} else {
			wp_enqueue_script( 'frontend-script' );
		}
		wp_enqueue_style( 'front-style-editor' );
	}


}
