import React, { useEffect } from "react";
import PostList from "../../features/blog/PostList";
import { wpSingularItemForDisplay } from "../../features/wp/@types-wp";
import { Helmet } from "react-helmet";
import ReactGA from "react-ga";

import "./_body.scss";
import "./_bodyView.scss";

interface Props extends wpSingularItemForDisplay {
    slugSpecificFunction: () => void | undefined;
}

function BodyView(props: Props): React.FunctionComponentElement<Props> {

    window.scrollTo(0,0);
    const { slugSpecificFunction } = props;
    const siteName = process.env.REACT_APP_NAME as string;
    const separator = process.env.REACT_APP_SEPARATOR as string;
    const homeSlug = process.env.REACT_APP_HOME_SLUG as string;
    const siteTitle = siteName + ((props.slug === homeSlug || props.slug === "")
        ? "" 
        : separator + props.title);

    let bodyExtraClasses: string[] = [
        props.type, 
        props.slug,
    ];
    
    let featureImage;
    if( props.thumbnail !== "") {
        bodyExtraClasses.push("has-FeatureImage");
        featureImage = (
            <div 
                className="FeatureImage-on"
                dangerouslySetInnerHTML={{__html: props.thumbnail}} />
        ); 
    } else {
        featureImage = (
            <div className="FeatureImage-off" />
        );
    }
    
    let featureTitle; 
    let articleTitle; 
    if( props.title !== "") {
        bodyExtraClasses.push("has-CanvasTitle");
        featureTitle = <h2 className="Canvas-featureTitle text-blue">{props.title}</h2>
        articleTitle = <h2 className="Canvas-articleTitle text-blue">{props.title}</h2>
    }

    let postList;
    let excludeSlug = [];
    if ( props.type === "post") {
        excludeSlug.push(props.slug);
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
    }, [slugSpecificFunction, props.slug])

    
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
                    dangerouslySetInnerHTML={{__html: props.content}} />
                {postList}
            </div>
        </>
    )
}

export default BodyView;