import { DispatchMethod } from '../common/@types-actions';

import { FETCH_MENU } from '../common/types'

import WPAPI, { WPRequest } from "wpapi";

const wp = new WPAPI({endpoint: "?rest_route=/"});
wp.menus = wp.registerRoute("menus/v1", "/menus/(?P<term_id>)");

export const fetchMenu = () => (dispatch: DispatchMethod) => {
    (wp.menus().termId(8) as WPRequest)
        .get((err: Error, data: any) => {
            if(err) {
                dispatch({
                    type: FETCH_MENU,
                    error: true,
                });
            } else {
                dispatch({
                    type: FETCH_MENU,
                    payload: data.items
                })
            }
        });
}
