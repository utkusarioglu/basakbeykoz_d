import React, { Fragment } from "react";
import PostList from "../blog/PostList";
import { wpSingularItemForDisplay } from "../wp/@types-wp";

interface Props extends wpSingularItemForDisplay {}

function BodyContent(props: Props): React.FunctionComponentElement<Props> {
    
    let bodyExtraClasses: string[] = [
        props.type, 
        props.slug,
    ];
    
    let featureImage;
    if( props.thumbnail !== "") {
        bodyExtraClasses.push("has-feature-image");
        featureImage = (
            <div 
                className="feature-image"
                dangerouslySetInnerHTML={{__html: props.thumbnail}} />
        ); 
    } else {
        featureImage = (
            <div className="no-feature-image" />
        );
    }
    
    let bodyTitle; 
    if( props.title !== "") {
        bodyExtraClasses.push("has-body-title");
        bodyTitle = <h2 className="body-title text-blue">{props.title}</h2>
    }

    let postExcerptCards;
    let excludeSlug = [];
    if ( props.type === "post") {
        excludeSlug.push(props.slug);
        bodyExtraClasses.push("has-post-excerpt-cards");
        postExcerptCards = (
            <PostList excludeSlug={excludeSlug} />
        );
    }
    
    return (
        <Fragment>
            {featureImage}
            <div className={"body " + bodyExtraClasses.join(" ")}>
                {bodyTitle}
                <article 
                    dangerouslySetInnerHTML={{__html: props.content}} />
                {postExcerptCards}
            </div>
        </Fragment>
    )
}

export default BodyContent;