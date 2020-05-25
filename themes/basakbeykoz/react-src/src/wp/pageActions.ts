import { DispatchMethod } from '../common/@types-actions';
import { FETCH_PAGE } from '../common/types'
import WPAPI, { WPRequest } from "wpapi";

const wp = new WPAPI({endpoint: "?rest_route=/"})

export const fetchPage = (post_id: number) => 
    (dispatch: DispatchMethod) => {
        (wp.pages().id(post_id) as WPRequest)
            .get((err: Error, data: any) => {
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
