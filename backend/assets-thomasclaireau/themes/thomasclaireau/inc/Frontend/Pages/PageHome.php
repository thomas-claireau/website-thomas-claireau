<?php
/**
 * Page Home
 *
 * @package thomasclaireau
 */

namespace App\Frontend\Pages;

/**
 * Retrieve datas for post
 */
class PageHome {
	/**
	 * Return datas of post
	 *
	 * @param mixed $post_id - Id of post.
	 *
	 * @return array
	 */
	public static function datas( $post_id ) {
		$datas = array();

		$datas['header']                = get_field( 'header', $post_id );
		$datas['introduction_services'] = get_field( 'introduction_services', $post_id );
		$datas['services']              = get_field( 'services', $post_id );
		$datas['projects']              = get_field( 'projects', $post_id );
		$datas['cta_contact']           = get_field( 'cta_contact', $post_id );
		$datas['posts']                 = get_field( 'posts', $post_id );

		return $datas;
	}
}
