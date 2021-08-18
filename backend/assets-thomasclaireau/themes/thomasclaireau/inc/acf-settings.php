<?php
/**
 * Add acf settings for ACF Free
 * https://akzhy.com/blog/create-options-page-in-wordpress-using-free-acf
 *
 * @package thomasclaireau
 */

add_filter( 'use_block_editor_for_post', 'disable_gutenberg_on_settings_page', 5, 2 );
add_action( 'pre_get_posts', 'hide_settings_page' );
add_action( 'admin_menu', 'add_site_settings_to_menu' );
add_filter( 'parent_file', 'higlight_custom_settings_page' );

/**
 * Add acf option page
 */
if ( function_exists( 'acf_add_options_page' ) ) {

	acf_add_options_page();

}

/**
 * Disable Gutemberg on specific page
 *
 * @param mixed $can - Can.
 * @param mixed $post - Post.
 *
 * @return [type]
 */
function disable_gutenberg_on_settings_page( $can, $post ) {
	if ( $post ) {
		// Replace "site-settings" with the slug of your site settings page.
		if ( 'site-settings' === $post->post_name ) {
			return false;
		}
	}
	return $can;
}

/**
 * Hide settings page from the list
 *
 * @param mixed $query - Query.
 *
 * @return [type]
 */
function hide_settings_page( $query ) {
	if ( ! is_admin() && ! is_main_query() ) {
		return;
	}
	global $typenow;
	if ( 'page' === $typenow ) {
		// Replace "site-settings" with the slug of your site settings page.
		$settings_page = get_page_by_path( 'site-settings', null, 'page' )->ID;
		$query->set( 'post__not_in', array( $settings_page ) );
	}

	return null;

}

/**
 * Add the page to admin menu
 *
 * @return mixed
 */
function add_site_settings_to_menu() {
	add_menu_page( 'Site Settings', 'Site Setttings', 'manage_options', 'post.php?post=' . get_page_by_path( 'site-settings', null, 'page' )->ID . '&action=edit', '', 'dashicons-admin-tools', 20 );
}

/**
 * Change the active menu item
 *
 * @param mixed $file - File.
 *
 * @return mixed
 */
function higlight_custom_settings_page( $file ) {
	global $parent_file;
	global $pagenow;
	global $typenow, $self;

	$settings_page = get_page_by_path( 'site-settings', null, 'page' )->ID;

	$post = (int) filter_input( INPUT_GET, 'post' );
	if ( 'post.php' === $pagenow && $post === $settings_page ) {
		$file = "post.php?post=$settings_page&action=edit";
	}
	return $file;
}

/**
 * Get field from slug
 *
 * @param mixed $slug - Slug of the page settings.
 *
 * @return int
 */
function op( $slug ) {
	$page_url_id = get_page_by_path( $slug );

	return $page_url_id->ID;
}
