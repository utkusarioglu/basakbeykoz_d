import { DispatchMethod } from '../common/@types-actions';
import { FETCH_PAGE } from '../common/types'
import WPAPI, { WPRequest } from "wpapi";
import { wpPageItem } from './@types-wp';

const wp = new WPAPI({endpoint: process.env.REACT_APP_REST_ENDPOINT as string})

export const fetchPage = (page_slug: string) => 
    (dispatch: DispatchMethod) => {
        console.log("fetch page", page_slug);
        (wp.pages().slug(page_slug) as WPRequest)
            .get((err: Error, data: wpPageItem[]) => {
                console.log("page", data)
                if(err) {
                    dispatch({
                        type: FETCH_PAGE,
                        error: true,
                    });
                } else {
                    dispatch({
                        type: FETCH_PAGE,
                        payload: {[data[0].slug]: {
                            loadTime: Date.now(),
                            data: data[0],
                        }}
                    })
                }
            });
    }
