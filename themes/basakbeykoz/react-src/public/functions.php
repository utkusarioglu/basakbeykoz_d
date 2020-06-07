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



/**
 * Grab latest post title by an author!
 *
 * @param array $data Options for the function.
 * @return string|null Post title for the latest,  * or null if none.
 */
function custom_rest( $data ) {
    $args = array(
        'post_type'=>array('post', 'page'),
        'name' => $data['slug'],
    );
    $the_query = new WP_Query( $args );
    $respose;

    switch ($the_query->post_count) {
        case 0:
            // !TODO needs a proper error response
            $response = "nothing returned";
            break;
        
        case 1:
            $the_query->the_post();
            global $post;
            $response = array(
                'title' => $post -> post_title,
                'ID' => $post -> ID,
                'content' => apply_filters('the_content', $post -> post_content),
                'type'=> $post -> post_type,
                'author' => $post -> post_author,
                'date' => $post -> post_date,
                'excerpt' => $post -> post_excerpt,
                'status' => $post -> post_status,
                'slug' => $post -> post_name,
                'comment_count' => $post -> comment_count,
                'comment_status' => $post -> comment_status,
            );
            // $response = $post;
            break;

        default:
            // !TODO  needs a proper error response
            $response = "too many items: " . $the_query->post_count;
    }

    wp_reset_postdata();
    return $response;
}

add_action( 'rest_api_init', function () {
    // TODO Regex here can be more elegant
    register_rest_route( 'customrest/v1', '/name/(?P<slug>[\w|\d|\-|_]+)', array(
        'methods' => 'GET',
        'callback' => 'custom_rest',
    ) );
} );



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
    
// /*Custom Post type start*/
// function cw_post_type_testimonials() {
//     $supports = array(
//         'title', // post title
//         'editor', // post content
//         'author', // post author
//         'thumbnail', // featured images
//         // 'excerpt', // post excerpt
//         'custom-fields', // custom fields
//         // 'comments', // post comments
//         'revisions', // post revisions
//         // 'post-formats', // post formats
//     );
//     $labels = array(
//         'name' => _x('testimonials', 'plural'),
//         'singular_name' => _x('testimonials', 'singular'),
//         'menu_name' => _x('testimonials', 'admin menu'),
//         'name_admin_bar' => _x('testimonials', 'admin bar'),
//         'add_new' => _x('Add New', 'add new'),
//         'add_new_item' => __('Add New Testimonial'),
//         'new_item' => __('New testimonial'),
//         'edit_item' => __('Edit testimonial'),
//         'view_item' => __('View testimonial'),
//         'all_items' => __('All testimonials'),
//         'search_items' => __('Search testimonials'),
//         'not_found' => __('No testimonials found.'),
//     );
//     $args = array(
//         'supports' => $supports,
//         'labels' => $labels,
//         'public' => true,
//         'query_var' => true,
//         'show_in_rest' => true,
//         'rewrite' => array('slug' => 'testimonials'),
//         'has_archive' => true,
//         'hierarchical' => false,
//     );
//     register_post_type('testimonials', $args);
// }
// add_action('init', 'cw_post_type_testimonials');


// // Register Custom Blocks
// add_action('acf/init', 'my_register_blocks');
// function my_register_blocks() {

//     // check function exists.
//     if( function_exists('acf_register_block_type') ) {

//         // register a testimonial block.
//         acf_register_block_type(array(
//             'name'				=> 'testimonials',
//             'title'				=> __( 'Testimonials'),
//             'description'		=> __( 'A custom testimonial block.'),
//             'render_template'   => 'template-parts/blocks/testimonials/block.php',
//             'category'			=> 'formatting',
//             'icon'				=> 'admin-comments',
//             'keywords'			=> array( 'testimonial' ),
//             'enqueue_style' => get_template_directory_uri() . '/template-parts/blocks/testimonial/testimonial.css',
//         ));
//     }
// }


// add_filter( 'wpmem_settings', 'my_cpt_settings' );                   
// function my_cpt_settings( $settings ) {
     
//     /** Complete this block for any CPT **/
 
//     // Set to the name of your custom post type
//     $cpt_slug = "acme_product";
 
//     // Block by default (1=block, 0=unblock)
//     $settings['block'][ $cpt_slug ] = 1;
     
//     // Show excerpts (1=yes, 0=no)
//     $settings['show_excerpt'][ $cpt_slug ] = 0;
     
//     // Show login form (1=yes, 0=no)
//     $settings['show_login'][ $cpt_slug ] = 1;
     
//     // Show registration form (1=yes, 0=no)
//     $settings['show_reg'][ $cpt_slug ] = 1;
     
//     /** End CPT Block **/
     
//     // Return extra settings at the end.    
//     return $settings;
// }


