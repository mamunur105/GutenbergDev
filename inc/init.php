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

/**
 * Main Class.
 */
final class UTBFG {
	/**
	 * Get instance;
	 *
	 * @var obaject
	 */
	protected static $instance;

	/**
	 * Undocumented function
	 */
	private function __construct() {
		add_action( 'plugins_loaded', array( $this, 'hooking' ) );
	}

	/**
	 * Create instance
	 *
	 * @return object
	 */
	public static function init() {
		if ( ! self::$instance ) {
			self::$instance = new self();
		}
		return self::$instance;
	}
	/**
	 * Undocumented function
	 *
	 * @return void
	 */
	public function hooking() {
		add_filter( 'block_categories_all', array( $this, 'gutenblock_addons_plugin_block_categories' ), 10, 2 );
		add_action( 'init', array( $this, 'create_gutenblock_addons_init' ) );
		add_action( 'enqueue_block_assets', array( $this, 'create_gutenblock_addons_scripts' ) );
	}
	/**
	 * Undocumented function
	 *
	 * @param array  $categories is default value from guttenberg .
	 * @param object $post object.
	 * @return array.
	 */
	public function gutenblock_addons_plugin_block_categories( $categories, $post ) {
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
	 * Undocumented function
	 *
	 * @return void
	 */
	public function create_gutenblock_addons_scripts() {
		$version = ( defined( 'SCRIPT_DEBUG' ) && SCRIPT_DEBUG ) ? time() : UTBFG_VERSION;
		if ( is_admin() ) {
			wp_enqueue_script( 'blocks-script', UTBFG_ASSETS_BUILD . '/index.js', array( 'wp-blocks', 'wp-element', 'wp-editor', 'wp-components' ), $version, true );
			wp_enqueue_style( 'gut-style-editor', UTBFG_ASSETS_BUILD . '/index.css', array(), $version );
		} else {
			wp_enqueue_script( 'frontend-script', UTBFG_ASSETS_FRONTEND . '/frontend.js', array( 'wp-element' ), $version, true );
		}
		wp_enqueue_style( 'front-style-editor', UTBFG_ASSETS_BUILD . '/style-index.css', array(), $version );

	}

	/**
	 * Block Registration.
	 *
	 * @return void
	 */
	public function create_gutenblock_addons_init() {
		$block_list = array(
			'gutenblock-addons/counterup' => array(),
			'gutenblock-addons/notice'    => array(),
		);
		foreach ( $block_list as $key => $array ) {
			register_block_type( $key, $array );
		}
	}

	/**
	 * Block Registration.
	 *
	 * @return void
	 */
	// public function setup_theme_supported_features() {
	// 	add_theme_support( 'wp-block-styles' );
	// }
}

UTBFG::init();

