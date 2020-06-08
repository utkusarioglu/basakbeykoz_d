import { DispatchMethod } from '../common/@types-actions';
import { FETCH_SINGULAR } from '../common/types'
// import WPAPI, { WPRequest } from "wpapi";
import { wpSingularItem } from './@types-wp';

// const wp = new WPAPI({endpoint: process.env.REACT_APP_REST_ENDPOINT as string})

// export const fetchPage = (page_slug: string) => 
//     (dispatch: DispatchMethod) => {
//         console.log("fetch page", page_slug);
//         (wp.pages().slug(page_slug) as WPRequest)
//             .get((err: Error, data: wpPageItem[]) => {
//                 console.log("page", data)
//                 if(err) {
//                     dispatch({
//                         type: FETCH_PAGE,
//                         error: true,
//                     });
//                 } else {
//                     dispatch({
//                         type: FETCH_PAGE,
//                         payload: {[data[0].slug]: {
//                             loadTime: Date.now(),
//                             data: data[0],
//                         }}
//                     })
//                 }
//             });
//     }


export const fetchSingular = (slug: string) => (dispatch: DispatchMethod<any>) => { //!HACK any
    fetch(process.env.REACT_APP_REST_ENDPOINT + "/customrest/v1/slug/" + slug)
        .then(data => data.json())
        .then((json: wpSingularItem) => {
            console.log("payload\n", json)
            dispatch({
                type: FETCH_SINGULAR,
                payload: {
                    loadTime: Date.now(),
                    data: json,
                }
            })
        })
}
