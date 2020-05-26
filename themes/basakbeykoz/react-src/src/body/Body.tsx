import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import CSS from 'csstype'
import { RootState } from "../app/rootReducer";
import { fetchPage } from "../wp/pageActions";
import { isFetching } from '../app/appActions'

const mapState = (state: RootState) => ({
    posts: state.posts,
    pages: state.pages,
    isDisplaying: state.app.isDisplaying,
})

const mapDispatch = { 
    fetchPage,
    isFetching,
}

interface OwnProps {}
type DispatchProps = typeof mapDispatch;
type StateProps = ReturnType<typeof mapState>;
type Props = DispatchProps & StateProps & OwnProps;

// TODO better static typing for style elements
const styles: {[className: string]: CSS.Properties} = {
    body: {
        // margin: "0px",
        // overflowX: "hidden",
        // overflowY: "auto",
        // display: "block",
        // height: "100vh",
    }
}

function Body(props: Props): React.FunctionComponentElement<Props> {
    
    const [content, setContent] = useState("");

    const type = props.isDisplaying.type;
    const id = props.isDisplaying.id;
    const types = props[type + "s" as "posts" | "pages"].single;
    let wpContent = "";
    if (types[id] !== undefined) {
        console.log("cached", type, id)
        wpContent = types[id].data.content.rendered;
        props.isFetching(false);
    } else {
        new Promise((resolve) => {
            setTimeout(() => {
                props.fetchPage(id);
                resolve()
            }, 0)
        }).then(() => {
            console.log("fetch", type, id, wpContent)            
            props.isFetching(false)
        })
    }
    
    useEffect(() => {
        setContent(wpContent)
    }, [props.isDisplaying, wpContent]);



    return (
        <div 
            className="body"
            style={styles.body}
            dangerouslySetInnerHTML={{__html: content}} />
    )
}




export default connect<StateProps, DispatchProps, OwnProps>(
    // @ts-ignore
    mapState, mapDispatch)(Body);
