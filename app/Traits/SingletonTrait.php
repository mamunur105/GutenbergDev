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

namespace Utbfg\Traits;

/**
 * Undocumented trait
 */
trait SingletonTrait {

	/**
	 * Undocumented variable
	 *
	 * @var boolean
	 */
	private static $singleton = false;

	/**
	 * Fetch an instance of the class.
	 */
	final public static function init() {
		if ( false === self::$singleton ) {
			self::$singleton = new self();
		}
		return self::$singleton;
	}

	/**
	 * Prevent cloning.
	 */
	final public function __clone() {
		_doing_it_wrong( __FUNCTION__, esc_html__( 'Cheatin&#8217; huh?', 'utbfg' ), '1.0' );
	}

	/**
	 * Prevent unserializing.
	 */
	final public function __wakeup() {
		_doing_it_wrong( __FUNCTION__, esc_html__( 'Cheatin&#8217; huh?', 'utbfg' ), '1.0' );
	}
}
