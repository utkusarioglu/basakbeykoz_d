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
 * @return string|null Post title for the latest, * or null if none.
 */
function get_singular_from_slug( $data ) {
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

/**
 * Grab latest post title by an author!
 *
 * @param array $data Options for the function.
 * @return string|null Post title for the latest, * or null if none.
 */
function get_category_posts_from_slug( $data ) {
    $args = array(
        'category_name' => $data['slug'],
    );
    $the_query = new WP_Query( $args );
    $response = array();
    if ( $the_query->have_posts() ) {
        while ($the_query->have_posts()) {
            $the_query->the_post();
            $item = build_post_item();
            array_push($response, $item);
        }
    }

    wp_reset_postdata();
    return $response;
}

function build_post_item() {
    global $post;
    $item = array(
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
        'thumbnail' => get_the_post_thumbnail()
    );
    return $item;
}

add_action( 'rest_api_init', function () {
    // TODO Regex here can be more elegant
    register_rest_route( 'customrest/v1', '/singular_slug/(?P<slug>[\w|\d|\-|_]+)', array(
        'methods' => 'GET',
        'callback' => 'get_singular_from_slug',
        ) );
        
    // TODO Regex here can be more elegant
    register_rest_route( 'customrest/v1', '/category_posts_slug/(?P<slug>[\w|\d|\-|_]+)', array(
        'methods' => 'GET',
        'callback' => 'get_category_posts_from_slug',
    ) );
} );


