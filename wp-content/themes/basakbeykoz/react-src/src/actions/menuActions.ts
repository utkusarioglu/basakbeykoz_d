import {FETCH_MENU} from './types'

import WPAPI, { WPRequest } from "wpapi";


interface DispatchVars {
    type: string,
    data?: any,
    error?: string,
}
type DispatchMethod = (vars:DispatchVars) => void

const wp = new WPAPI({endpoint: "./wp-json"})
wp.menus = wp.registerRoute("menus/v1", "/menus/(?P<term_id>)");

export const fetchMenu = () => (dispatch: DispatchMethod) => {
    (wp.menus().termId(8) as WPRequest)
        .get((err: Error, data: any) => {
            if(err) {
                dispatch({
                    type: FETCH_MENU,
                    error: "something went wrong"
                });
            } else {
                dispatch({
                    type: FETCH_MENU,
                    data: data.items
                })
            }
        });
}
