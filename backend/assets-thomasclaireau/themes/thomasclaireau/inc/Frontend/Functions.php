<?php
/**
 * Global functions for frontend treatement
 */

namespace App\Frontend;

/**
 * Global functions class
 */
class Functions {
	/**
	 * Get Template and return associative class
	 *
	 * @param mixed $template - Template of post.
	 *
	 * @return string
	 */
	public static function template_to_class( $template ) {

		if ( '' === $template ) {
			return 'PageHome';
		}

		$template = str_replace( '.php', '', $template );
		$template = explode( '-', $template );

		$template = array_map(
			function( $word ) {
				return ucfirst( $word );
			},
			$template
		);

		$template = implode( '', $template );

		return $template;
	}
}
