<?php

// Allow the inclusion of a featured image in posts
function basakbeykoz_post_thumbnails() {
    add_theme_support( 'post-thumbnails' );
}
add_action( 'after_setup_theme', 'basakbeykoz_post_thumbnails' );

// Filter except length to 20 words.
// tn custom excerpt length
function tn_custom_excerpt_length( $length ) {
    return 20;
}
add_filter( 'excerpt_length', 'tn_custom_excerpt_length', 999 );


// /* Custom Post Type Start */
// function create_posttype() {
//     register_post_type( 'testimonials',
//     // CPT Options
//     array(
//       'labels' => array(
//        'name' => __( 'Testimonials' ),
//        'singular_name' => __( 'Testimonial' )
//       ),
//       'public' => true,
//       'has_archive' => true,
//       'rewrite' => array('slug' => 'testimonials'),
//      )
//     );
// }
// // Hooking up our function to theme setup
// add_action( 'init', 'create_posttype' );
    
/*Custom Post type start*/
function cw_post_type_news() {
    $supports = array(
    'title', // post title
    'editor', // post content
    'author', // post author
    'thumbnail', // featured images
    'excerpt', // post excerpt
    'custom-fields', // custom fields
    'comments', // post comments
    'revisions', // post revisions
    'post-formats', // post formats
    );
    $labels = array(
    'name' => _x('news', 'plural'),
    'singular_name' => _x('news', 'singular'),
    'menu_name' => _x('news', 'admin menu'),
    'name_admin_bar' => _x('news', 'admin bar'),
    'add_new' => _x('Add New', 'add new'),
    'add_new_item' => __('Add New news'),
    'new_item' => __('New news'),
    'edit_item' => __('Edit news'),
    'view_item' => __('View news'),
    'all_items' => __('All news'),
    'search_items' => __('Search news'),
    'not_found' => __('No news found.'),
    );
    $args = array(
    'supports' => $supports,
    'labels' => $labels,
    'public' => true,
    'query_var' => true,
    'show_in_rest' => true,
    'rewrite' => array('slug' => 'news'),
    'has_archive' => true,
    'hierarchical' => false,
    );
    register_post_type('news', $args);
    }
    add_action('init', 'cw_post_type_news');
