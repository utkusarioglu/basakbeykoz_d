import {DispatchMethod} from './@types';

import {FETCH_POSTS} from './types'

import WPAPI from "wpapi";

const wp = new WPAPI({endpoint: "./wp-json"})

export const fetchPosts = () => (dispatch: DispatchMethod) => {
    wp.posts()
        .get((err: Error, data: any) => {
            if(err) {
                dispatch({
                    type: FETCH_POSTS,
                    error: "something went wrong"
                });
            } else {
                dispatch({
                    type: FETCH_POSTS,
                    data: Object.values(data).slice(0,-1)
                })
            }
        });
}
