import React from 'react';
import { Link } from "react-router-dom";
import "./_postList_card.scss";

interface Props {
    title: string,
    content: string,
    excerpt: string,
    date: string,
    slug: string,
    thumbnail: string,
}

function PostListCard(props: Props): React.FunctionComponentElement<Props> {
    const excerpt = props.excerpt !== "" 
        ? props.excerpt
        : createExcerpt(props.content);

    const d = (new Date(props.date)); // short for date object 
    const date = d.toLocaleDateString("TR-TR");
    
    return (
        <Link 
            to={"/" + props.slug}
            className="PostList-card"
            >
            <div
                className="PostList-card-thumbnail"
                dangerouslySetInnerHTML={{__html: props.thumbnail}}/>
            <h3 
                className="PostList-card-title">
                {props.title}
                </h3>
            <span 
                className="PostList-card-date">
                {date}</span>
            <p 
                className="PostList-card-excerpt" 
                dangerouslySetInnerHTML={{__html: excerpt}}></p>
            
        </Link>
    )
}

function createExcerpt(content: Props['content']): Props["excerpt"] {
    return content.split("</p>")[0] + "</p>";
}

export default PostListCard;