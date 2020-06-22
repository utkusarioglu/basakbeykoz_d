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
    
    let bodyTitle; 
    if( props.title !== "") {
        bodyExtraClasses.push("has-CanvasTitle");
        bodyTitle = <h2 className="CanvasTitle text-blue">{props.title}</h2>
    }

    let postExcerptCards;
    let excludeSlug = [];
    if ( props.type === "post") {
        excludeSlug.push(props.slug);
        bodyExtraClasses.push("has-PostExcerptList");
        postExcerptCards = (
            <PostList excludeSlug={excludeSlug} />
        );
    }
    
    return (
        <Fragment>
            <div className={"Canvas " + bodyExtraClasses.join(" ")}>
                <div className="Canvas-decor">
                    {featureImage}
                    {bodyTitle}
                </div>
                <article 
                    dangerouslySetInnerHTML={{__html: props.content}} />
                {postExcerptCards}
            </div>
        </Fragment>
    )
}

export default Canvas;