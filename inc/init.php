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
		add_action( 'after_setup_theme', array( $this, 'add_theme_suport' ) );
		add_filter( 'block_categories_all', array( $this, 'gutenblock_addons_plugin_block_categories' ), 10, 2 );
		add_action( 'enqueue_block_assets', array( $this, 'create_gutenblock_addons_scripts' ) );
	}
	/**
	 * Theme Suport
	 *
	 * @return void
	 */
	public function add_theme_suport(){
		add_theme_support( 'custom-spacing' );
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
		$asset_file = include( UTBFG_PLUGIN_DIR . '/build/index.asset.php');
		$asset_frontend = include( UTBFG_PLUGIN_DIR . '/build/index.asset.php');

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

	/**
	 * Cloning is forbidden.
	 * @since 1.0.0
	 */
	public function __clone() {
		_doing_it_wrong( __FUNCTION__, __( 'Cloning is forbidden.', 'grgblock' ), '1.0.0' );
	}

	/**
	 * Universalizing instances of this class is forbidden.
	 * @since 1.0.0
	 */
	public function __wakeup() {
		_doing_it_wrong( __FUNCTION__, __( 'Universalizing instances of this class is forbidden.', 'grgblock' ), '1.0.0' );
	}


	/**
	 * Block Registration.
	 *
	 * @return void
	 */
	// public function create_gutenblock_addons_init() {
	// 	$block_list = array(
	// 		'gutenblock-addons/counterup' => array(),
	// 		'gutenblock-addons/notice'    => array(),
	// 	);
	// 	foreach ( $block_list as $key => $array ) {
	// 		register_block_type( $key, $array );
	// 	}
	// }

}


/**
 * @return UTBFG
 */
function UTBFG() {
	return UTBFG::init();
}
//fire off the plugin
UTBFG();

