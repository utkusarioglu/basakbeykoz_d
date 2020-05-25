import {DispatchMethod} from '../common/@types-actions';
import {FETCH_POSTS, FETCH_POST} from '../common/types'
import WPAPI, { WPRequest } from "wpapi";

const wp = new WPAPI({endpoint: "?rest_route=/"})

export const fetchPosts = () => 
    (dispatch: DispatchMethod) => {
        wp.posts().get((err: Error, data: any) => {
                if(err) {
                    dispatch({
                        type: FETCH_POSTS,
                        error: true,
                    });
                } else {
                    dispatch({
                        type: FETCH_POSTS,
                        payload: Object.values(data).slice(0,-1),
                    })
                }
            });
}

export const fetchCategoryPosts = (cat_id: number) => 
    (dispatch: DispatchMethod) => {
        (wp.posts().categories(cat_id) as WPRequest)
            .get((err: Error, data: any) => {
                console.log(data)
                if(err) {
                    dispatch({
                        type: FETCH_POSTS,
                        error: true,
                    });
                } else {
                    dispatch({
                        type: FETCH_POSTS,
                        payload: Object.values(data).slice(0,-1),
                    })
                }
            });
}

export const fetchPost = (post_id: number) => 
    (dispatch: DispatchMethod) => {
        (wp.posts().id(post_id) as WPRequest)
            .get((err: Error, data: any) => {
                if(err) {
                    dispatch({
                        type: FETCH_POST,
                        error: true,
                    });
                } else {
                    dispatch({
                        type: FETCH_POST,
                        payload: data,
                    })
                }
            });
}
