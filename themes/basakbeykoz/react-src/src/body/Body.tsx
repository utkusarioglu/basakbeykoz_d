import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
// import { fetchPosts } from "../wp/postActions";
import CSS from 'csstype'
import { RootState } from "../app/rootReducer";
// import { fetchPost } from "../wp/postActions";
import { fetchPage } from "../wp/pageActions";

const mapState = (state: RootState) => ({
    posts: state.posts,
    pages: state.pages,
    isDisplaying: state.app.isDisplaying,
})

const mapDispatch = { 
    fetchPage,
}

interface OwnProps {}
type DispatchProps = typeof mapDispatch;
type StateProps = ReturnType<typeof mapState>;
type Props = DispatchProps & StateProps & OwnProps;

// TODO better static typing for style elements
const styles: {[className: string]: CSS.Properties} = {
    body: {
        margin: 0,
    }
}

function Body(props: Props): React.FunctionComponentElement<Props> {
    
    const [content, setContent] = useState("");

    const type = props.isDisplaying.type;
    const id = props.isDisplaying.id;
    const types = props[type + "s" as "posts" | "pages"].single;
    let content_input = "d";
    if (types[id] !== undefined) {
        console.log("cached", type, id)
        content_input = types[id].data.content.rendered;
    } else {
        console.log("fetch", type, id)
        props.fetchPage(id);
    }
    
    useEffect(() => {
        setContent(content_input)
    }, [props.isDisplaying, content_input]);



    return (
        <div 
            style={styles.body}
            dangerouslySetInnerHTML={{__html: content}} />
    )
}




export default connect<StateProps, DispatchProps, OwnProps>(
    // @ts-ignore
    mapState, mapDispatch)(Body);
