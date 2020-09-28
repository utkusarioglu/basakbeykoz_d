import React from "react";
import { connect } from "react-redux";
import { RootState } from "../../store/rootReducer";
import { fetchCategoryPosts } from "../wp/singularActions";
import { setFetching } from "../app/appActions";


import PostListView from "../../components/blog/PostListView";

const mapState = (state: RootState) => ({
    posts: state.singular.post,
})

const mapDispatch = { 
    fetchCategoryPosts,
    setFetching,
}   

interface OwnProps {
    excludeSlug: string[] //slugs to exclude, helps to exclude the current post when the postList is displayed in a post
}

type DispatchProps = typeof mapDispatch;
type StateProps = ReturnType<typeof mapState>;
type Props = DispatchProps & StateProps & OwnProps;

function PostList(props: Props): React.FunctionComponentElement<Props> {

    const { REACT_APP_BLOG_SLUG } = process.env as {[key: string]: string}
    const {
        fetchCategoryPosts,
        setFetching,
        excludeSlug,
        posts,
    } = props;

    // !HACK this is faulty logic
    setTimeout(() => {
        if(posts.fetchTime < (Date.now() - 5000)) {
            fetchCategoryPosts(REACT_APP_BLOG_SLUG);
            setFetching(false);
        }
    }, 1000);

    const postList = Object.values(posts.items)
        .filter((single) => (single.data.slug !== excludeSlug[0]) || false)

    return (
        <PostListView postListItems={postList} locale="TR-TR"/>
    )
}

export default connect<StateProps, DispatchProps, OwnProps>(
    // @ts-ignore
    mapState, mapDispatch)(PostList);
