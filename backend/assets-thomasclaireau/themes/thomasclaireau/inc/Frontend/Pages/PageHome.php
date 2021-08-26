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

		$datas['posts']['articles'] = self::get_latest_posts( isset( $datas['posts']['articles'] ) ? $datas['posts']['articles'] : array() );

		return $datas;
	}

	/**
	 * Get formatted latest posts
	 *
	 * @param mixed $latest_posts - Latest Posts.
	 *
	 * @return array
	 */
	public static function get_latest_posts( $latest_posts ) {
		if ( ! isset( $latest_posts ) || empty( $latest_posts ) ) {
			$latest_posts = get_posts(
				array(
					'post_type'   => 'post',
					'numberposts' => 2,
				)
			);
		}

		$articles = array();

		foreach ( $latest_posts as $key => $article ) {
			$articles[ $key ]['title']            = $article->post_title;
			$articles[ $key ]['slug']             = $article->post_name;
			$articles[ $key ]['thumbnail']['url'] = get_the_post_thumbnail_url( $article );

			$thumbnail_id                         = get_post_thumbnail_id( $article );
			$articles[ $key ]['thumbnail']['alt'] = get_post_meta( $thumbnail_id, '_wp_attachment_image_alt', true );

			/**
			* Get categories of post
			*/
			$categories                     = get_the_category( $article->ID );
			$articles[ $key ]['categories'] = array();

			foreach ( $categories as $category ) {
				if ( 1 !== $category->term_id ) {
					$articles[ $key ]['categories'][] = $category->cat_name;
				}
			}

			$articles[ $key ]['author']['name']   = get_the_author_meta( 'display_name', $article->post_author );
			$articles[ $key ]['author']['avatar'] = get_field( 'avatar', 'user_' . $article->post_author );

			$articles[ $key ]['updated_at'] = get_the_modified_date( 'c', $article );
		}

		return $articles;
	}
}


