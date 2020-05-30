import { DispatchMethod } from '../common/@types-actions';
import { FETCH_PAGE } from '../common/types'
import WPAPI, { WPRequest } from "wpapi";

const wp = new WPAPI({endpoint: process.env.REACT_APP_REST_ENDPOINT as string})

export const fetchPage = (post_slug: string) => 
    (dispatch: DispatchMethod) => {
        (wp.pages().slug(post_slug) as WPRequest)
            .get((err: Error, data: any) => {
                console.log("page", data)
                if(err) {
                    dispatch({
                        type: FETCH_PAGE,
                        error: true,
                    });
                } else {
                    dispatch({
                        type: FETCH_PAGE,
                        payload: {[data.id]: {
                            loadTime: Date.now(),
                            data
                        }}
                    })
                }
            });
    }
