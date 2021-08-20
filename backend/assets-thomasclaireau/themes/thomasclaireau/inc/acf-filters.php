<?php
/**
 * Acf Filters
 *
 * @package thomasclaireau
 */

add_filter( 'acf/format_value/type=image', 'acf_image_filter', 20, 3 );
add_filter( 'acf/format_value/type=file', 'acf_file_filter', 20, 3 );

if ( ! function_exists( 'acf_image_filter' ) ) :
	/**
	 * Acf Image filter
	 *
	 * @param mixed $value - Value of filter field.
	 *
	 * @return array
	 */
	function acf_image_filter( $value ) {
		if ( $value ) {
			if ( is_int( $value ) ) {
				return array(
					'url' => wp_get_attachment_image_url( $value ),
					'alt' => get_post_meta( $value, '_wp_attachment_image_alt', true ),
				);
			}

			return array(
				'url' => $value['url'],
				'alt' => $value['alt'],
			);

		}

		return null;
	}
endif;

if ( ! function_exists( 'acf_file_filter' ) ) :
	/**
	 * Acf Image filter
	 *
	 * @param mixed $value - Value of filter field.
	 *
	 * @return array
	 */
	function acf_file_filter( $value ) {
		if ( $value ) {
			return array(
				'url'       => $value['url'],
				'alt'       => $value['alt'],
				'mime_type' => $value['mime_type'],
			);
		}

		return $value;
	}
endif;
