<?php
/**
 * Global Api Setup
 *
 * @package thomasclaireau
 */

use App\Frontend\Menu;

add_action( 'rest_api_init', 'thomasclaireau_global_api' );

if ( ! function_exists( 'thomasclaireau_global_api' ) ) :
	/**
	 * Register global api
	 *
	 * @return void
	 */
	function thomasclaireau_global_api() {
		register_rest_route(
			get_stylesheet() . '/v1',
			'/global/',
			array(
				'methods'             => WP_REST_Server::READABLE,
				'callback'            => 'thomasclaireau_global_api_callback',
				'permission_callback' => '__return_true',
			),
		);
	}
endif;

if ( ! function_exists( 'thomasclaireau_global_api_callback' ) ) :
	/**
	 * Callback of global api
	 *
	 * @return void
	 */
	function thomasclaireau_global_api_callback() {
		header( 'Access-Control-Allow-Origin: ' . FRONTEND_URL );
		header( 'content-type:application/json' );

		$data = array();

		$data['header'] = array();
		$data['footer'] = array();

		$data['header']['menus'] = Menu::get_menus_as_array( 'main' );
		$data['footer']['menus'] = Menu::get_menus_as_array( 'footer' );

		$data['header']['logo'] = get_field( 'logo', op( 'site-settings' ) );

		wp_send_json( $data );
	}
endif;
