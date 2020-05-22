import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../actions/bodyActions";

interface ReduxProps {
    fetchMenu: () => void,
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

// !HACK any used as type for props
function Body(props: any): React.FunctionComponentElement<ReduxProps> {
    const fetchPosts = props.fetchPosts;
    useEffect(() => { 
        fetchPosts();
    }, [fetchPosts]);

    const posts = props.post.map((post: wpPostItem) => {
        console.log("post", post)
        return <p key={post.id}>{post.title.rendered}</p>
    })

    return (
        <div>
            {posts}
        </div>
    )
}


// !HACK any as type
const mapStateToProps = (state: any) => ({
    post: state.post.items
})

export default connect(mapStateToProps, { fetchPosts})(Body);
