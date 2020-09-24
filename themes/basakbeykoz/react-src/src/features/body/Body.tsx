import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import { RootState } from "../../store/rootReducer";
import { fetchSingular } from "../wp/singularActions";
import { setFetching, setDisplaying } from '../app/appActions'
import stateMap from "../../store/@types-state";
import { singularTypes, wpSingularItem } from "../wp/@types-wp";
import OverlayScrollbars from 'overlayscrollbars';
import BodyView from "../../components/body/BodyView";
//@ts-ignore
import pauseable from 'pauseable';

const mapState = (state: RootState) => ({
    singular: state.singular,
    isDisplaying: state.app.isDisplaying,
    isFetching: state.app.isFetching,
    refs: state.app.refs,
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

    const { refs } = props;
    const setFetching = props.setFetching;
    const setDisplaying = props.setDisplaying;
    const fetchSingular = props.fetchSingular;

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
            if(process.env.NODE_ENV === 'development') {
                setTimeout(() => {
                    fetchSingular(slug)
                }, 300);
            } else {
                fetchSingular(slug)
            }
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

    const { slug: activeSlug, title, content, thumbnail, type} = props.isDisplaying.active;

    // const slugSpecificFunctions: {[slug: string]: () => void} = {
    //     [homeSlug]: () => {
    //         // setTimeout(() => {
    //             const fields = document.querySelectorAll('.wp-block-latest-posts');
    //             OverlayScrollbars(fields[0], { 
    //                 scrollbars: {
    //                     autoHide: 'leave',
    //                 }
    //             });
    //             OverlayScrollbars(fields[1], {
    //                 scrollbars: {
    //                     autoHide: 'leave',
    //                 }
    //             });
    //             refs.body?.current?.osInstance()?.scroll({y: '500px'});
    //         // }, 2000)
    //     }
    // }

    const slugSpecificFunction = getSlugSpecificAction(slug, refs);

    return (
        <BodyView 
            slug={activeSlug}
            title={title}
            type={type}
            content={content}
            thumbnail={thumbnail}
            slugSpecificFunction={slugSpecificFunction}/>
    )
}

function getSlugSpecificAction(
    slug: string, 
    refs: RootState['app']['refs']
): () => void {
    const homeSlug = process.env.REACT_APP_HOME_SLUG as string;
    switch(slug) {
        case homeSlug:
            return () => {
                setTimeout(() => {
                    const fields = document.querySelectorAll('.wp-block-latest-posts');
                    // Scrollbar for latest posts
                    attachLlistActions(fields[0] as HTMLElement);
                    // Scrollbar for testimonials
                    attachLlistActions(fields[1] as HTMLElement);
                    // Attach listener to the CTA
                    // !HACK this listener is attached every time the page is opened
                    document.body.getElementsByClassName('wp-block-button')[0]?.addEventListener('mousedown',() => {
                        refs.body?.current?.osInstance()?.scroll(
                            document.getElementsByClassName('wp-block-group')[1] as HTMLElement, 
                            1000,
                            'easeOutExpo',
                            );
                    })

                }, 2000);
            }

        default:
            return () => null;
    }
}

function attachLlistActions(elem: HTMLElement): void {
    const SCROLL_DURATION = 1500;
    const LINGER_DURATION = 2000;
    
    const latestPostsRef = 
        OverlayScrollbars(elem, { 
            scrollbars: {
                autoHide: 'leave',
            }
        });
    const children = elem.querySelectorAll('.os-content')[0].children;
    const childrenCount = children.length;
    let currentChild = 1;
    const animation = pauseable.setInterval(() => {
        latestPostsRef.scroll(
            {
                el: children[currentChild] as HTMLElement,
                margin: true,
            }, 
            SCROLL_DURATION, 
            'easeInOutSine'
            );
            currentChild = (currentChild % childrenCount) + 1
    }, LINGER_DURATION);

    // document.body.addEventListener('keydown', () => {
    //     console.log('keydown');
    //     animation.pause();
    // })

    // document.body.addEventListener('keyup', () => {
    //     console.log('keyup');
    //     animation.resume();
    // })

    // console.log(elem)
    const target = elem.querySelectorAll('.os-content')[0];
    
    target.addEventListener('mouseover', () => {
        console.log('focusin');
        latestPostsRef.scrollStop();
        animation.pause()}
    );
    target.addEventListener('mouseleave', () => {
        console.log('blur');
        
        animation.resume()
    });

}





export default connect<StateProps, DispatchProps, OwnProps>(
    // @ts-ignore
    mapState, mapDispatch)(Body);
