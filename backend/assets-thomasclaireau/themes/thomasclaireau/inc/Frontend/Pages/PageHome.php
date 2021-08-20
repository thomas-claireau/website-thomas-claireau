<?php
/**
 * Page Home
 *
 * @package thomasclaireau
 */

namespace App\Frontend\Pages;

/**
 * Retrieve fields for post
 */
class PageHome {
	/**
	 * Return fields of post
	 *
	 * @param mixed $post_id - Id of post.
	 *
	 * @return array
	 */
	public static function get_fields( $post_id ) {
		$fields = array();

		$header_avatar = get_field( 'header_avatar', $post_id );

		echo '<pre>';
		var_dump( $header_avatar );
		echo '</pre>';
		exit;

		return $fields;
	}
}
