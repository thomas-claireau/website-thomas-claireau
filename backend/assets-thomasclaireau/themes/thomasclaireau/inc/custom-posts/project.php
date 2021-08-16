<?php

// Create post
add_action('init', 'project_init');

if (!function_exists("project_init")) {
	function project_init()
	{
		register_post_type(
			'project',
			array(
				'labels'            => array(
					'name'                => __('Projets'),
					'singular_name'       => __('Projet'),
					'all_items'           => __('Tous les projets'),
					'new_item'            => __('Nouveau projet'),
					'add_new'             => __('Ajouter'),
					'add_new_item'        => __('Ajouter un projet'),
					'edit_item'           => __('Modifier'),
					'view_item'           => __('Voir'),
					'search_items'        => __('Rechercher un projet'),
					'not_found'           => __("Pas de projet"),
					'not_found_in_trash'  => __("Pas de projet"),
					'parent_item_colon'   => __('Projet parent'),
					'menu_name'           => __('Projets'),
				),
				'public'            => TRUE,
				'hierarchical'      => FALSE,
				'show_ui'           => TRUE,
				'show_in_nav_menus' => TRUE,
				'supports'          => array('title'),
				'has_archive'       => TRUE,
				'rewrite'           => TRUE,
				'query_var'         => TRUE,
				'menu_icon'         => 'dashicons-groups',
				'show_in_rest'      => TRUE,
				'rest_base'         => 'press',
				'rest_controller_class' => 'WP_REST_Posts_Controller',
				'menu_position' => 5,
			)
		);
	}
}