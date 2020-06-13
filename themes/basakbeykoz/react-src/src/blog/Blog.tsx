import React from "react";
import { connect } from "react-redux";
import { RootState } from "../app/rootReducer";
import { fetchCategoryPosts } from "../wp/singularActions";
import { setFetching } from "../app/appActions";
// import CSS from 'csstype'

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

// TODO better static typing for style elements
// const styles: {[className: string]: CSS.Properties} = {
//     body: {
//         // margin: "0px",
//         // overflowX: "hidden",
//         // overflowY: "auto",
//         // display: "block",
//         // height: "100vh",
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
            <div key={d.slug}>
                <h2>{d.title}</h2>
                <span>{d.date}</span>
                <p dangerouslySetInnerHTML={{__html: d.content}}></p>
            </div>
        )
    })

    return (
        <div>
            <h1>Hello, Blog</h1>
            {post_list}
        </div>
    )
}

export default connect<StateProps, DispatchProps, OwnProps>(
    // @ts-ignore
    mapState, mapDispatch)(Blog);
