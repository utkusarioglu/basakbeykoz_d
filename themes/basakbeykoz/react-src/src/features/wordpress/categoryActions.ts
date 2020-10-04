import { DispatchMethod } from "../../common/@types-actions";

import { FETCH_CATEGORY, FETCH_CATEGORIES } from "../../common/types";

// import WPAPI, { WPRequest } from "wpapi";

// const wp = new WPAPI({endpoint: "?rest_route=/"})

// export const fetchCategories = () => (dispatch: DispatchMethod<any>) => { //!HACK any
//     wp.categories()
//         .get((err: Error, data: any) => {
//             if(err) {
//                 dispatch({
//                     type: FETCH_CATEGORIES,
//                     state: "fail",
//                     error: "somehting went wrong", //TODO
//                 });
//             } else {
//                 dispatch({
//                     type: FETCH_CATEGORIES,
//                     state: "success",
//                     payload: Object.values(data).slice(0,-1),
//                 })
//             }
//         });
// }

// export const fetchCategory = (id: number) => (dispatch: DispatchMethod<any>) => { //!HACK any
//     (wp.categories().id(id) as WPRequest)
//         .get((err: Error, data: any) => {
//             if(err) {
//                 dispatch({
//                     type: FETCH_CATEGORY,
//                     state: "fail",
//                     error: "something went wrong",
//                 });
//             } else {
//                 dispatch({
//                     type: FETCH_CATEGORY,
//                     state: "success",
//                     payload: data
//                 })
//             }
//         });
// }
