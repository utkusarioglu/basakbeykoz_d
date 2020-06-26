import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import { RootState } from "../app/rootReducer";
import { fetchSingular } from "../wp/singularActions";
import { setFetching, setDisplaying } from '../app/appActions'
import stateMap from "../app/@types-state";
import { singularTypes, wpSingularItem } from "../wp/@types-wp";
import "./_body.scss";

import Canvas from "./Canvas";

const mapState = (state: RootState) => ({
    singular: state.singular,
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

function findBySlug(singular: stateMap["singular"], slug: string): wpSingularItem | undefined {
    return Object.values(singular)
        .map((archive: stateMap["singular"][singularTypes]) => {
            return archive.items[slug]
                ? archive.items[slug].data
                : undefined;
        })
        .filter((data: wpSingularItem | undefined) => {
            return data !== undefined
        })[0];

}

function Body(props: Props): React.FunctionComponentElement<Props> {

    const setFetching = props.setFetching;
    const setDisplaying = props.setDisplaying;
    const fetchSingular = props.fetchSingular;

    // console.log(props.isDisplaying)

    const url_slug = useParams<{slug: string}>().slug || "home";
    const slug = props.isDisplaying.slug;
    if(url_slug !== slug) {
        props.setDisplaying({
            slug: url_slug,
        })
    }

    const item = findBySlug(props.singular, slug);

    useEffect(() => {
        if (item === undefined) {
            setFetching(true);
            // setTimeout(() => {
                fetchSingular(slug)
            // }, 1000)
        } else {
            setDisplaying({
                active: {
                    slug: item.slug,
                    title: item.title,
                    type: item.type,
                    content: item.content,
                    thumbnail: item.thumbnail,
                }
            })
            setFetching(false);
        }
    }, [item, slug, fetchSingular, setFetching, setDisplaying])

    return (
        <Canvas 
            slug={props.isDisplaying.active.slug}
            title={props.isDisplaying.active.title}
            type={props.isDisplaying.active.type}
            content={props.isDisplaying.active.content}
            thumbnail={props.isDisplaying.active.thumbnail}/>
    )
}






export default connect<StateProps, DispatchProps, OwnProps>(
    // @ts-ignore
    mapState, mapDispatch)(Body);
