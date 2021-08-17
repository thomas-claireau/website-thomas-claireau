<?php
/**
 * Api Class Menu
 *
 * @package thomasclaireau
 */

namespace App\Frontend;

/**
 * Class Menu to get WordPress menu
 */
class Menu {


	/**
	 * Array of menu
	 *
	 * @var mixed
	 */
	private static $menu;

	/**
	 * Slug of menu (main or footer).
	 *
	 * @var string
	 */
	private static $slug;

	/**
	 * Return array of menu
	 *
	 * @param Slug $slug - Slug of menu (main or footer).
	 *
	 * @return array
	 */
	public static function get_menus_as_array( $slug = '' ) {
		self::$slug = $slug;

		self::get_menus();

		return self::$menu;
	}

	/**
	 * Get menus
	 *
	 * @return mixed
	 */
	public static function get_menus() {
		$locations = get_nav_menu_locations();

		foreach ( $locations as $key => $location ) {
			$menu = wp_get_nav_menu_object( $location );

			if ( self::$slug && self::$slug === $menu->slug ) {
				self::$menu = self::get_menu( $location );
				continue;
			} else {
				self::$menu[ $key ] = self::get_menu( $location );
			}
		}

	}

	/**
	 * Get menu of WordPress
	 *
	 * @param Id $id - Id of menu.
	 *
	 * @return array
	 */
	public static function get_menu( $id ) {
		$menu       = wp_get_nav_menu_object( $id );
		$menu_items = wp_get_nav_menu_items( $id );
		$data       = array();

		$data['id']    = $id;
		$data['name']  = $menu->name;
		$data['items'] = array();

		foreach ( $menu_items as $menu_item ) {
			$data['items']['title']  = $menu_item->title;
			$data['items']['url']    = $menu_item->url;
			$data['items']['target'] = $menu_item->target;
		}

		return $data;
	}
}
