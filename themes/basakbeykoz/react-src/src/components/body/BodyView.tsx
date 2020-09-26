import React, { useEffect } from "react";
import PostList from "../../features/blog/PostList";
import { wpSingularItemForDisplay } from "../../features/wp/@types-wp";
import { Helmet } from "react-helmet";
import ReactGA from "react-ga";

import "./_body.scss";
import "./_bodyView.scss";

interface Props extends wpSingularItemForDisplay {
    slugSpecificFunction: () => void | undefined;
    component?: React.Component;
}

function BodyView(props: Props) {
    const {
        REACT_APP_NAME,
        REACT_APP_SEPARATOR,
        REACT_APP_HOME_SLUG,
    } = process.env as {[key: string]: string};
    const { 
        slugSpecificFunction, 
        type, 
        slug, 
        title, 
        thumbnail, 
        content
    } = props;

    const navSuffix = (slug === REACT_APP_HOME_SLUG || slug === "")
        ? "" 
        : REACT_APP_SEPARATOR + props.title;
    const siteTitle = REACT_APP_NAME + navSuffix;

    let bodyExtraClasses: string[] = [type, slug, ];
    
    let featureImage;
    if( thumbnail !== "") {
        bodyExtraClasses.push("has-FeatureImage");
        featureImage = (
            <div 
                className="FeatureImage-on"
                dangerouslySetInnerHTML={{__html: thumbnail}} />
        ); 
    } else {
        featureImage = (
            <div className="FeatureImage-off" />
        );
    }
    
    let featureTitle; 
    let articleTitle; 
    if( title !== "") {
        bodyExtraClasses.push("has-CanvasTitle");
        featureTitle = <h2 className="Canvas-featureTitle text-blue">{title}</h2>
        articleTitle = <h2 className="Canvas-articleTitle text-blue">{title}</h2>
    }

    let postList;
    let excludeSlug = [];
    if ( type === "post") {
        excludeSlug.push(slug);
        bodyExtraClasses.push("has-PostExcerptList");
        postList = (
            <div className="PostList-wrapper">
                <h4>Similar Reads</h4>
                <PostList excludeSlug={excludeSlug} />
            </div>
        );
    }

    ReactGA.pageview(window.location.pathname + window.location.search);
    useEffect(() => {
        slugSpecificFunction();
    }, [slugSpecificFunction, slug])

    return (
        <>
            <Helmet>
                <title>{siteTitle}</title>
            </Helmet>
            <div className={"Canvas " + bodyExtraClasses.join(" ")}>
                <div className="Canvas-decor">
                    {featureImage}
                    {featureTitle}
                </div>
                {articleTitle}
                <article 
                    dangerouslySetInnerHTML={{__html: content}} />
                {postList}
            </div>
        </>
    )
}

export default BodyView;