import React from "react";
import PostList from "./PostList";
import { Helmet } from "react-helmet";
import ReactGA from "react-ga";
import "./_blog.scss";

function Blog() {
    const {
        REACT_APP_NAME,
        REACT_APP_SEPARATOR,
        REACT_APP_UPLOADS_DIR,
    } = process.env as { [key: string]: string};

    const PAGE_NAME = "Paylaşımlar";
    const pageTitle = REACT_APP_NAME + REACT_APP_SEPARATOR + PAGE_NAME;
    const FEATURE_IMG_NAME = "yazilar-feature-image";
    const featureImagePath = `${REACT_APP_UPLOADS_DIR}/${FEATURE_IMG_NAME}-`;
    const srcSet = [
        "scaled.jpg 2560w", 
        "300x196.jpg 300w", 
        "1024x669.jpg 1024w", 
        "768x501.jpg 768w", 
        "1536x1003.jpg 1536w", 
        "2048x1337.jpg 2048w"
    ]
    .map((variation) => featureImagePath + variation)
    .join(",");

    ReactGA.pageview(window.location.pathname + window.location.search);

    return (
        <>
            <Helmet>
                <title>{pageTitle}</title>
            </Helmet>
            <div
                className="Canvas blog has-FeatureImage has-body-title"
                >
                <div className="Canvas-decor">
                    <div className="FeatureImage-on" >    
                        <img 
                            width="2560" 
                            height="1671" 
                            src={`${FEATURE_IMG_NAME}scaled.jpg`} 
                            alt="Feature" 
                            srcSet={srcSet} 
                            sizes="(max-width: 2560px) 100vw, 2560px" />
                    </div>
                    <h2 className="Canvas-featureTitle text-blue">{PAGE_NAME}</h2>
                </div>
                    <h2 className="Canvas-articleTitle text-blue">{PAGE_NAME}</h2>
                    <article>
                        <PostList excludeSlug={[]}/>
                    </article>
            </div>
        </>
    )
}

export default Blog;