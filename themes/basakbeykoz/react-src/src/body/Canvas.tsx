import React, { Fragment } from "react";
import PostList from "../blog/PostList";
import { wpSingularItemForDisplay } from "../wp/@types-wp";
import "./_canvas.scss";

interface Props extends wpSingularItemForDisplay {}

function Canvas(props: Props): React.FunctionComponentElement<Props> {
    
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
            <PostList excludeSlug={excludeSlug} />
        );
    }
    
    return (
        <Fragment>
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
        </Fragment>
    )
}

export default Canvas;