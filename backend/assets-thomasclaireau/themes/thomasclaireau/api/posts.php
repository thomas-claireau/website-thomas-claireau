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
	 * @param mixed $request - Request.
	 */
	function thomasclaireau_post_api_callback( $request ) {
		header( 'Access-Control-Allow-Origin: ' . FRONTEND_URL );
		header( 'content-type:application/json' );

		$datas = array();

		$args = array(
			'name'        => $request->get_param( 'slug' ),
			'numberposts' => (int) $request->get_param( 'limit' ) ?? -1,
			'post_type'   => 'post',
			'post_status' => 'publish',
		);

		$posts = get_posts( $args );

		foreach ( $posts as $post ) {
			$class = 'App\\Frontend\\Posts\\' . Posts::call_post_class( $post->post_type );

			$datas[] = call_user_func_array( array( $class, 'datas' ), array( $post->ID ) );
		}

		wp_send_json( $datas );
	}
endif;
