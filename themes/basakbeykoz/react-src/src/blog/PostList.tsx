import React from "react";
import { connect } from "react-redux";
import { RootState } from "../store/rootReducer";
import { fetchCategoryPosts } from "../features/wp/singularActions";
import { setFetching } from "../features/app/appActions";
import "./_postList.scss";

import PostListCard from "./PostListCard";

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
            <li key={d.slug}>
                <PostListCard 
                    title={d.title}
                    date={d.date}
                    content={d.content}
                    excerpt={d.excerpt}
                    slug={d.slug}
                    thumbnail={d.thumbnail}
                />

            </li>
        )
    })



    return (
        <div className="PostList">
            <ol>
                {post_list}
            </ol>
        </div>
    )
}

export default connect<StateProps, DispatchProps, OwnProps>(
    // @ts-ignore
    mapState, mapDispatch)(PostList);
