import React, { Fragment } from "react";
import PostList from "./PostList";
import { Helmet } from "react-helmet";
import ReactGA from "react-ga";
import "./_blog.scss";

function Blog() {

    window.scrollTo(0,0);

    const siteName = process.env.REACT_APP_NAME as string;
    const separator = process.env.REACT_APP_SEPARATOR as string;
    const PAGE_NAME = "Yazilar";
    const pageTitle = siteName + separator + PAGE_NAME;

    const uploads_dir = process.env.REACT_APP_UPLOADS_DIR as string;
    const featureImageName = "yazilar-feature-image";
    const featureImagePath = `${uploads_dir}/${featureImageName}-`;
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
        <Fragment>
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
                            src={`${featureImageName}scaled.jpg`} 
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
        </Fragment>
    )
}

export default Blog;