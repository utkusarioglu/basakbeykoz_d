import { DispatchMethod } from '../common/@types-actions';

import { FETCH_CATEGORY, FETCH_CATEGORIES } from '../common/types'

import WPAPI, { WPRequest } from "wpapi";

const wp = new WPAPI({endpoint: "?rest_route=/"})

export const fetchCategories = () => (dispatch: DispatchMethod) => {
    wp.categories()
        .get((err: Error, data: any) => {
            if(err) {
                dispatch({
                    type: FETCH_CATEGORIES,
                    error: true,
                });
            } else {
                dispatch({
                    type: FETCH_CATEGORIES,
                    payload: Object.values(data).slice(0,-1)
                })
            }
        });
}

export const fetchCategory = (id: number) => (dispatch: DispatchMethod) => {
    (wp.categories().id(id) as WPRequest)
        .get((err: Error, data: any) => {
            if(err) {
                dispatch({
                    type: FETCH_CATEGORY,
                    error: true,
                });
            } else {
                dispatch({
                    type: FETCH_CATEGORY,
                    payload: data
                })
            }
        });
}
