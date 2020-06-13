import React from 'react';
import { Link } from "react-router-dom";
import { CSSStyles } from "../app/@types-app";

interface Props {
    title: string,
    excerpt: string,
    date: string,
    slug: string,
    thumbnail: string,
}

const styles: CSSStyles = {
    img: {
        width: "150px",
        height: "150px",
        overflow: "hidden",
    }
}

function PostExcerptCard(props: Props): React.FunctionComponentElement<Props> {
    return (
        <Link to={"/" + props.slug}>    
            <div className="PostExcerptCard" >
                <div
                    style={styles.img} 
                    dangerouslySetInnerHTML={{__html: props.thumbnail}}/>
                <h2>{props.title}</h2>
                <span>{props.date}</span>
                <p dangerouslySetInnerHTML={{__html: props.excerpt}}></p>
            </div>
        </Link>
    )
}

export default PostExcerptCard;