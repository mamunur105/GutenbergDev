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
 * Admin Ajax class
 */
class AdminAjaxController {
	/**
	 * Singleton
	 */
	use SingletonTrait;
	/**
	 * Construct function
	 */
	private function __construct() {
		add_action( 'wp_ajax_block_css_generator', array( &$this, 'block_css_generator' ) );
	}
	/**
	 * Block css generator function
	 *
	 * @return void
	 */
	public function block_css_generator() {
		$return = array();
		wp_send_json( $return );
		wp_die();
	}

}
