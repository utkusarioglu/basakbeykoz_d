import React from "react";
import PostList from "./PostList";

function Blog() {
    return (
        <div
            className="body blog has-feature-image has-body-title"
            >
            <div className="feature-image" >    
                <img 
                    width="2560" 
                    height="1671" 
                    src="http://localhost/wp-content/uploads/yazilar-feature-image-scaled.jpg" 
                    alt="" 
                    srcSet="http://localhost/wp-content/uploads/yazilar-feature-image-scaled.jpg 2560w, 
                        http://localhost/wp-content/uploads/yazilar-feature-image-300x196.jpg 300w, 
                        http://localhost/wp-content/uploads/yazilar-feature-image-1024x669.jpg 1024w, 
                        http://localhost/wp-content/uploads/yazilar-feature-image-768x501.jpg 768w, 
                        http://localhost/wp-content/uploads/yazilar-feature-image-1536x1003.jpg 1536w, 
                        http://localhost/wp-content/uploads/yazilar-feature-image-2048x1337.jpg 2048w" 
                    sizes="(max-width: 2560px) 100vw, 2560px" />
            </div>
                <h2 className="body-title text-blue">Yazilar</h2>
                <PostList excludeSlug={[]}/>
        </div>
    )
}

export default Blog;