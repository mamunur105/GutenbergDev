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

use Utbfg\Controllers\AssetsController;
use Utbfg\Traits\SingletonTrait;

if ( ! class_exists( Utbfg::class ) ) {

	/**
	 * Main Class.
	 */
	final class Utbfg {
		/**
		 * Singleton
		 */
		use SingletonTrait;
		/**
		 * Undocumented function
		 */
		private function __construct() {
			$this->hooking();
			AssetsController::init();
		}

		/**
		 * Undocumented function
		 *
		 * @return void
		 */
		public function hooking() {
			add_action( 'plugins_loaded', array( $this, 'plugins_loaded' ) );
			add_action( 'after_setup_theme', array( $this, 'add_theme_suport' ) );
			add_filter( 'block_categories_all', array( $this, 'block_categories' ), 10, 2 );
		}
		/**
		 * Theme Suport
		 *
		 * @return void
		 */
		public function plugins_loaded() {
			do_action( 'utbfg_loaded', $this );
		}
		/**
		 * Theme Suport
		 *
		 * @return void
		 */
		public function add_theme_suport() {
			add_theme_support( 'custom-spacing' );
		}
		/**
		 * Undocumented function
		 *
		 * @param array  $categories is default value from guttenberg .
		 * @param object $post object.
		 * @return array.
		 */
		public function block_categories( $categories, $post ) {
			$new_category = array(
				array(
					'slug'  => 'gutenblock-addons',
					'title' => esc_html__( 'Gutenberg Addons', 'utbfg' ),
					'icon'  => 'wordpress',
				),
			);
			return array_merge(
				$new_category,
				$categories
			);
		}

		/**
		 * Cloning is forbidden.
		 *
		 * @since 1.0.0
		 */
		public function __clone() {
			_doing_it_wrong( __FUNCTION__, esc_html__( 'Cloning is forbidden.', 'utbfg' ), '1.0.0' );
		}

		/**
		 * Universalizing instances of this class is forbidden.
		 *
		 * @since 1.0.0
		 */
		public function __wakeup() {
			_doing_it_wrong( __FUNCTION__, esc_html__( 'Universalizing instances of this class is forbidden.', 'utbfg' ), '1.0.0' );
		}


	}

	/**
	 * Main instance for utbfg class.
	 *
	 * @return obj
	 */
	function utbfg() {
		return Utbfg::init();
	}
	// Fire off the plugin.
	utbfg();
}
