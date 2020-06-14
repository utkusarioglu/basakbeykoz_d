import React, { Fragment } from "react";

interface Props {
    title: string,
    content: string,
    thumbnail: string,
    slug: string,
}

function BodyContent(props: Props): React.FunctionComponentElement<Props> {
    
    let bodyExtraClasses: string[] = [props.slug];
    
    let featureImage;
    if( props.thumbnail !== "") {
        bodyExtraClasses.push("has-feature-image");
        featureImage = <div 
        className="feature-image"
        dangerouslySetInnerHTML={{__html: props.thumbnail}}></div>; 
    }
    
    let bodyTitle; 
    if( props.title !== "") {
        bodyExtraClasses.push("has-body-title");
        bodyTitle = <h2 className="page-title text-blue">{props.title}</h2>
    }
    
    return (
        <Fragment>
            {featureImage}
            <div className={"body " + bodyExtraClasses.join(" ")}>
                {bodyTitle}
                <div 
                    className="content"
                    dangerouslySetInnerHTML={{__html: props.content}}></div>
            </div>
        </Fragment>
    )
}

export default BodyContent;