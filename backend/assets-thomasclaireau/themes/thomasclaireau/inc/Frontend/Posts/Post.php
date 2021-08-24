<?php
/**
 * Post
 *
 * @package thomasclaireau
 */

namespace App\Frontend\Posts;

/**
 * Retrieve datas for post
 */
class Post {
	/**
	 * Return datas of post
	 *
	 * @param mixed $post_id - Id of post.
	 *
	 * @return array
	 */
	public static function datas( $post_id ) {
		$datas = array();
		$post  = get_post( $post_id );

		if ( is_null( $post ) ) {
			return null;
		}

		$datas['slug']             = $post->post_name;
		$datas['title']            = $post->post_title;
		$datas['thumbnail']['url'] = get_the_post_thumbnail_url( $post );

		$thumbnail_id              = get_post_thumbnail_id( $post->ID );
		$datas['thumbnail']['alt'] = get_post_meta( $thumbnail_id, '_wp_attachment_image_alt', true );

		$datas['author']['name']   = get_the_author_meta( 'display_name', $post->post_author );
		$datas['author']['avatar'] = get_field( 'avatar', 'user_' . $post->post_author );

		$datas['updated_at'] = get_the_modified_date( 'c', $post );

		$datas['content'] = $post->post_content;

		return $datas;
	}
}
