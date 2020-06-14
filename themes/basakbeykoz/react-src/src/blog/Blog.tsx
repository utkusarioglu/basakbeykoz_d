import React from "react";
import { connect } from "react-redux";
import { RootState } from "../app/rootReducer";
import { fetchCategoryPosts } from "../wp/singularActions";
import { setFetching } from "../app/appActions";
// import { CSSStyles } from "../app/@types-app";

import PostExcerptCard from "./PostExceprtCard";

const mapState = (state: RootState) => ({
    post: state.singular.post.items,
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

interface OwnProps {}
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

function Blog(props: Props): React.FunctionComponentElement<Props> {
    // !HACK this is faulty logic
    setTimeout(() => {
        props.fetchCategoryPosts(process.env.REACT_APP_BLOG_SLUG as string);
    }, 1000)
    props.setFetching(false);

    const post_list = Object.values(props.post).map((single) => {
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
        <div
            className="blog"
            >
            <div className="feature-image" >
                <img 
                    width="2560" 
                    height="1671" 
                    src="http://localhost/wp-content/uploads/yazilar-feature-image-scaled.jpg" 
                    alt="" 
                    //@ts-ignore
                    srcset="http://localhost/wp-content/uploads/yazilar-feature-image-scaled.jpg 2560w, 
                        http://localhost/wp-content/uploads/yazilar-feature-image-300x196.jpg 300w, 
                        http://localhost/wp-content/uploads/yazilar-feature-image-1024x669.jpg 1024w, 
                        http://localhost/wp-content/uploads/yazilar-feature-image-768x501.jpg 768w, 
                        http://localhost/wp-content/uploads/yazilar-feature-image-1536x1003.jpg 1536w, 
                        http://localhost/wp-content/uploads/yazilar-feature-image-2048x1337.jpg 2048w" 
                    sizes="(max-width: 2560px) 100vw, 2560px" />
            </div>
            <div className="has-feature-image">
                <h2 className="page-title text-blue">Yazilar</h2>
                <div className="post-excerpt-cards">
                    {post_list}
                </div>
            </div>
        </div>
    )
}

export default connect<StateProps, DispatchProps, OwnProps>(
    // @ts-ignore
    mapState, mapDispatch)(Blog);
