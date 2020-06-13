import React from 'react';
import { Link } from "react-router-dom";
import { CSSStyles } from "../app/@types-app";

interface Props {
    title: string,
    content: string,
    excerpt: string,
    date: string,
    slug: string,
    thumbnail: string,
}

const styles: CSSStyles = {
    img: {
        overflow: "hidden",
    },
    link: {
        textDecoration: "none",
    }
}

function PostExcerptCard(props: Props): React.FunctionComponentElement<Props> {
    const excerpt = props.excerpt !== "" 
        ? props.excerpt
        : createExcerpt(props.content);

    const d = (new Date(props.date)); // short for date object 
    const date = d.toLocaleDateString("TR-TR");
    
    return (
        <Link 
            to={"/" + props.slug}
            className="post-excerpt-card"
            style={styles.link}
            >
            <div
                className="post-thumbnail"
                style={styles.img} 
                dangerouslySetInnerHTML={{__html: props.thumbnail}}/>
            <h2 
                className="post-title">
                {props.title}
                </h2>
            <span 
                className="post-date">
                {date}</span>
            <p 
                className="post-excerpt" 
                dangerouslySetInnerHTML={{__html: excerpt}}></p>
            
        </Link>
    )
}

function createExcerpt(content: Props['content']): Props["excerpt"] {
    return content.split("</p>")[0] + "</p>";
}

export default PostExcerptCard;