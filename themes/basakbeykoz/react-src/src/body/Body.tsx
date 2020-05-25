import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../wp/postActions";
import CSS from 'csstype'

interface ReduxProps {
    // fetchMenu: () => void,
}

interface wpPostItem {
    id: number,
    title: {
        rendered: string,
    },
    slug: string,
    content: {
        rendered: string,
    }
}

const styles: {[className: string]: CSS.Properties} = {
    body: {
        margin: 0,
    }
}

// !HACK any used as type for props
function Body(props: any): React.FunctionComponentElement<ReduxProps> {
    
    const [content, setContent] = useState("");
    
    // const fetchPosts = props.fetchPosts;
    // useEffect(() => { 
    //     fetchPosts();
    // }, [fetchPosts]);

    // const posts = props.posts.items.map((post: wpPostItem) => {
    //     return <p key={post.id}>{post.title.rendered}</p>
    // })

    useEffect(() => {
        if (props.posts.post) {
            setContent(props.posts.post.content.rendered);
        } else if (props.pages.page) {
            setContent(props.pages.page.content.rendered);
        } else {
            setContent("")
        }
    }, [props.posts.post, props.pages.page]);



    return (
        <div 
            style={styles.body}
            dangerouslySetInnerHTML={{__html: content}} />
    )
}


// !HACK any as type
const mapStateToProps = (state: any) => ({
    posts: state.posts,
    pages: state.pages,
})

export default connect(mapStateToProps, { fetchPosts })(Body);
