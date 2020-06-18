import { DispatchMethod } from '../common/@types-actions';
import { FETCH_SINGULAR, FETCH_CATEGORY_POSTS, FETCH_PAGE  } from '../common/types'
import { wpSingularItem, PartialSingularDispatch } from './@types-wp';
// import WPAPI, { WPRequest } from "wpapi";
import { filterByType } from './mergers';

// const wp = new WPAPI({endpoint: process.env.REACT_APP_REST_ENDPOINT as string})
const re = process.env.REACT_APP_REST_ENDPOINT; 

export const fetchSingular = (slug: string) => 
    (dispatch: DispatchMethod<PartialSingularDispatch>) => {
        fetch(re + "/customrest/v1/singular_slug/" + slug)
            .then(data => data.json())
            .then((singular_item: wpSingularItem) => {
                if(singular_item) { // !TODO you need a better success test here
                    dispatch({
                        type: FETCH_SINGULAR,
                        state: "success",
                        payload: {
                            [singular_item.type]: {
                                [singular_item.slug] : {
                                    loadTime: Date.now(),
                                    data: singular_item,
                                }
                            }
                        }
                    })
                } else {
                    dispatch({
                        type: FETCH_SINGULAR,
                        state: "fail",
                        error: "json is booboo"
                    })
                }
            })
}

export const fetchCategoryPosts = (slug: string) => 
    (dispatch: DispatchMethod<PartialSingularDispatch>) => {
        fetch(re + "/customrest/v1/category_posts_slug/" + slug)
            .then(data => data.json())
            .then((category_posts: wpSingularItem[]) => {
                if(category_posts) { // !TODO you need a better success test here
                    const now = Date.now();
                    const payload = {
                        fetchTime: Date.now(),
                        post: filterByType(category_posts, "post", now),
                        page: filterByType(category_posts, "page", now),
                    }
                    dispatch({
                        type: FETCH_CATEGORY_POSTS,
                        state: "success",
                        payload,
                    })
                } else {
                    dispatch({
                        type: FETCH_CATEGORY_POSTS,
                        state: "fail",
                        error: "json is booboo",
                    })
                }
            })
    }

export const fetchPage = (slug: string) => 
    (dispatch: DispatchMethod<PartialSingularDispatch>) => {
        fetch(re + "/wp/v2/pages/?slug=" + slug)
            .then(data => data.json())
            .then((items: wpSingularItem[]) => {
                if(items) { // !TODO you need a better success test here
                    const singular_item = items[0];
                    dispatch({
                        type: FETCH_PAGE,
                        state: "success",
                        payload: {
                            [singular_item.type]: {
                                [singular_item.slug] : {
                                    loadTime: Date.now(),
                                    data: singular_item,
                                }
                            }
                        }
                    })
                } else {
                    dispatch({
                        type: FETCH_PAGE,
                        state: "fail",
                        error: "json is booboo"
                    })
                }
            })
        // (wp.pages().slug(page_slug) as WPRequest)
        //     .get((err: Error, items: wpSingularItem[]) => {
        //         console.log("page", items)
        //         if(err) {
        //             dispatch({
        //                 type: FETCH_PAGE,
        //                 state: "fail",
        //                 error: "json is booboo",
        //             });
        //         } else {
        //             const singular_item = items[0];
        //             dispatch({
        //                 type: FETCH_PAGE,
        //                 state: "success",
        //                 payload: {
        //                     [singular_item.type]: {
        //                         [singular_item.slug] : {
        //                             loadTime: Date.now(),
        //                             data: singular_item,
        //                         }
        //                     }
        //                 }
        //             })
        //         }
        //     });
    }

