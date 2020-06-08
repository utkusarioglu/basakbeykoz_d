import React, { useEffect } from "react";
import { useParams} from "react-router-dom";
import { connect } from "react-redux";
import CSS from 'csstype'
import { RootState } from "../app/rootReducer";
import { fetchSingular } from "../wp/singularActions";
import { setFetching, setDisplaying } from '../app/appActions'
// import stateMap from "../app/@types-state";

const mapState = (state: RootState) => ({
    singular: state.singular,
    // pages: state.pages,
    isDisplaying: state.app.isDisplaying,
    isFetching: state.app.isFetching,
})

const mapDispatch = { 
    fetchSingular,
    setFetching,
    setDisplaying,
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

    const url_slug = useParams<{slug: string}>().slug || "home";
    const display_slug = props.isDisplaying.slug;
    if(url_slug !== display_slug) {
        console.warn("landing page")
        props.setDisplaying({slug: url_slug})
    }
    const slug = display_slug;
    console.log(url_slug, slug)
    const items = props.singular.archive;
    
    console.log("items\n", items)
    
    const item_html = items[slug]
        ? items[slug].data.content
        : "";

    const setFetching = props.setFetching;
    const fetchSingular = props.fetchSingular;


    useEffect(() => {
        if (items[slug] === undefined) {
            setTimeout(() => {
                fetchSingular(slug)
            }, 1000)
        } else {
            console.log("cached")
            setFetching(false);
        }
    }, [fetchSingular, items, slug, setFetching])

    return (
        <div 
            className={"body " + slug}
            style={styles.body}
            dangerouslySetInnerHTML={{__html: item_html}} />
    )
}




export default connect<StateProps, DispatchProps, OwnProps>(
    // @ts-ignore
    mapState, mapDispatch)(Body);
