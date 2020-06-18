import React from "react";
import { connect } from "react-redux";
import { RootState } from "../app/rootReducer";
import { fetchCategoryPosts } from "../wp/singularActions";
import { setFetching } from "../app/appActions";
// import { CSSStyles } from "../app/@types-app";

import PostExcerptCard from "./PostExcerptCard";

const mapState = (state: RootState) => ({
    posts: state.singular.post,
    // singular: state.singular,
    // pages: state.pages,
    // isDisplaying: state.app.isDisplaying,
    // isFetching: state.app.isFetching,
})

const mapDispatch = { 
    fetchCategoryPosts,
    setFetching,
    // fetchSingular,
    // setFetching,
    // setDisplaying,
}   

interface OwnProps {
    excludeSlug: string[] //slugs to exclude, helps to exclude the current post when the postList is displayed in a post
}
type DispatchProps = typeof mapDispatch;
type StateProps = ReturnType<typeof mapState>;
type Props = DispatchProps & StateProps & OwnProps;

// const styles: CSSStyles = {
//     img: {
//         width: "430px",
//         height: "100vh",
//         position: "fixed",
//         left: 0,
//         top: 0,
//         backgroundColor: "gray", 

//     }
// }

function PostList(props: Props): React.FunctionComponentElement<Props> {


    // !HACK this is faulty logic
    setTimeout(() => {
        console.log("scan", props.posts.fetchTime, (Date.now() - 5000))
        if(props.posts.fetchTime < (Date.now() - 5000)) {
            props.fetchCategoryPosts(process.env.REACT_APP_BLOG_SLUG as string);
        }
    }, 1000)
    props.setFetching(false);

    const post_list = Object.values(props.posts.items)
        .filter((single) => (single.data.slug !== props.excludeSlug[0]) || false)
        .map((single) => {
        const d = single.data
        return (
            <PostExcerptCard 
                key={d.slug}
                title={d.title}
                date={d.date}
                content={d.content}
                excerpt={d.excerpt}
                slug={d.slug}
                thumbnail={d.thumbnail}
            />
        )
    })



    return (
        <div className="post-excerpt-cards">
            {post_list}
        </div>
    )
}

export default connect<StateProps, DispatchProps, OwnProps>(
    // @ts-ignore
    mapState, mapDispatch)(PostList);
