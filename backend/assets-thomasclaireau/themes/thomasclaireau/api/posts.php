<?php
/**
 * Post Api Setup
 *
 * @package thomasclaireau
 */

use App\Frontend\Posts;

add_action( 'rest_api_init', 'thomasclaireau_post_api' );

if ( ! function_exists( 'thomasclaireau_post_api' ) ) :
	/**
	 * Register page api
	 *
	 * @return void
	 */
	function thomasclaireau_post_api() {
		register_rest_route(
			get_stylesheet() . '/v1',
			'/posts/',
			array(
				'methods'             => WP_REST_Server::READABLE,
				'callback'            => 'thomasclaireau_post_api_callback',
				'permission_callback' => '__return_true',
			),
		);
	}
endif;

if ( ! function_exists( 'thomasclaireau_post_api_callback' ) ) :
	/**
	 * Callback of page api
	 *
	 * @param Request $request - Request.
	 */
	function thomasclaireau_post_api_callback( $request ) {
		header( 'Access-Control-Allow-Origin: ' . FRONTEND_URL );
		header( 'content-type:application/json' );

		$datas   = array();
		$post_id = $request->get_param( 'post_id' );

		if ( is_null( $post_id ) || '' === $post_id ) {
			return wp_send_json( array( 'error' => 'Enter a valid post ID' ), 403 );
		}

		$post = get_post( $post_id );

		if ( is_null( $post ) ) {
			return wp_send_json( array( 'error' => 'Post not found' ), 404 );
		}

		if ( 'page' === $post->post_type ) {
			return wp_send_json( array( 'error' => 'Please enter post ID' ), 403 );
		}

		$class = 'App\\Frontend\\Posts\\' . Posts::call_post_class( $post->post_type );

		$datas = call_user_func_array( array( $class, 'get_fields' ), array( $post->ID ) );

		wp_send_json( $datas );
	}
endif;
