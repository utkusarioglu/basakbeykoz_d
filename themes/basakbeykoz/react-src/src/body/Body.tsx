import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import CSS from 'csstype'
import { RootState } from "../app/rootReducer";
import { fetchPage } from "../wp/pageActions";
import { setFetching } from '../app/appActions'
import stateMap from "../app/@types-state";

const mapState = (state: RootState) => ({
    posts: state.posts,
    pages: state.pages,
    isDisplaying: state.app.isDisplaying,
    isFetching: state.app.isFetching,
})

const mapDispatch = { 
    fetchPage,
    setFetching,
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
    
    const type = props.isDisplaying.type;
    const slug = props.isDisplaying.slug;
    const items = props[type + "s" as "posts" | "pages"].single;
    const item_html = items[slug]
        ? items[slug].data.content.rendered
        : "";

    const [html, setHtml] = useState(item_html);
    const setFetching = props.setFetching;
    const isDisplaying: stateMap["app"]["isDisplaying"] = props.isDisplaying
    
    const fetchPage = props.fetchPage;


    useEffect(() => {
        if (items[slug] === undefined) {
            console.log("body fetching")
            setTimeout(() => {
                fetchPage(isDisplaying.slug)
            }, 300)
        } else {
            console.log("cached")
            setHtml(items[slug].data.content.rendered)
            setFetching(false);
        }
    }, [isDisplaying, fetchPage, items, slug, setFetching])

    return (
        <div 
            className={"body " + slug}
            style={styles.body}
            dangerouslySetInnerHTML={{__html: html}} />
    )
}




export default connect<StateProps, DispatchProps, OwnProps>(
    // @ts-ignore
    mapState, mapDispatch)(Body);
