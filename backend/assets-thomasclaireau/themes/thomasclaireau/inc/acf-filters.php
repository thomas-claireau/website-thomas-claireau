<?php
/**
 * Acf Filters
 *
 * @package thomasclaireau
 */

add_filter( 'acf/format_value/type=image', 'acf_image_filter', 20, 3 );

/**
 * Acf Image filter
 *
 * @param mixed $value - Value of filter field.
 *
 * @return array
 */
function acf_image_filter( $value ) {
	if ( $value ) {
		return array(
			'url'   => $value['url'],
			'alt'   => $value['alt'],
			'sizes' => $value['sizes'],
		);
	}

	return $value;
}
