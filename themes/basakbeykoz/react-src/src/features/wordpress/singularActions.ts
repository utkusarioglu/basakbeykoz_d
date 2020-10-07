import { DispatchMethod } from "../../common/@types-actions";
import { FETCH_SINGULAR, FETCH_CATEGORY_POSTS } from "../../common/types";
import {
  wpSingularItemSuccess,
  PartialSingularDispatch,
  wpSingularArchiveItem,
} from "./@types-wp";
import { filterByType } from "./mergers";
import rest from "../../services/rest";
import { ERROR_CODES } from "./constants";

const { REACT_APP_REST_ENDPOINT } = process.env;

export const fetchSingular = (slug: string) => (
  dispatch: DispatchMethod<PartialSingularDispatch>
) => {
  if (slug === "") {
    console.warn("empty slug");
  }
  return rest
    .request<wpSingularArchiveItem>({
      method: "get",
      url: "/customrest/v1/singular_slug/" + slug,
    })
    .then(({ data }) => {
      if (data.state === "success") {
        dispatch({
          type: FETCH_SINGULAR,
          state: "success",
          payload: {
            [data.type]: {
              [data.slug]: {
                loadTime: Date.now(),
                data: data,
              },
            },
          },
        });
      } else {
        data.types.forEach((type) => {
          dispatch({
            type: FETCH_SINGULAR,
            state: "success",
            payload: {
              [type]: {
                [data.slug]: {
                  loadTime: Date.now(),
                  data: data,
                },
              },
            },
          });
        });
      }
    })
    .catch(() => {
      dispatch({
        type: FETCH_SINGULAR,
        state: "fail",
        error: ERROR_CODES.SINGULAR_FETCH_FAIL,
      });
    });
};

export const fetchCategoryPosts = (slug: string) => (
  dispatch: DispatchMethod<PartialSingularDispatch>
) => {
  rest
    .request<wpSingularArchiveItem[]>({
      method: "get",
      url: "/customrest/v1/category_posts_slug/" + slug,
    })
    .then(({ data }) => {
      if (data) {
        const now = Date.now();
        const payload = {
          fetchTime: Date.now(),
          post: filterByType(data, "post", now),
          page: filterByType(data, "page", now),
        };
        dispatch({
          type: FETCH_CATEGORY_POSTS,
          state: "success",
          payload,
        });
      } else {
        dispatch({
          type: FETCH_CATEGORY_POSTS,
          state: "fail",
          error: ERROR_CODES.CATEGORY_POSTS_FETCH_FAIL,
        });
      }
    })
    .catch(() => {
      dispatch({
        type: FETCH_CATEGORY_POSTS,
        state: "fail",
        error: ERROR_CODES.CATEGORY_POSTS_FETCH_FAIL,
      });
    });
};

// export const fetchPage = (slug: string) => (
//   dispatch: DispatchMethod<PartialSingularDispatch>
// ) => {
//   console.log("run page");
//   return rest
//     .request({
//       method: "get",
//       url: "/wp/v2/pages",
//       params: {
//         slug,
//       },
//     })
//     .then(({ data }) => {
//       dispatch({
//         type: FETCH_PAGE,
//         state: "success",
//         payload: {
//           [data.type]: {
//             [data.slug]: {
//               loadTime: Date.now(),
//               data: data,
//             },
//           },
//         },
//       });
//     })
//     .catch(() => {
//       console.log("error");
//       dispatch({
//         type: FETCH_PAGE,
//         state: "fail",
//         error: "json is booboo",
//       });
//     });
// };
// export const fetchPage = (slug: string) => (
//   dispatch: DispatchMethod<PartialSingularDispatch>
// ) => {
//   fetch(REACT_APP_REST_ENDPOINT + "/wp/v2/pages/?slug=" + slug)
//     .then((data) => data.json())
//     .then((items: wpSingularItem[]) => {
//       if (items) {
//         // !TODO you need a better success test here
//         const singular_item = items[0];
//         dispatch({
//           type: FETCH_PAGE,
//           state: "success",
//           payload: {
//             [singular_item.type]: {
//               [singular_item.slug]: {
//                 loadTime: Date.now(),
//                 data: singular_item,
//               },
//             },
//           },
//         });
//       } else {
//         dispatch({
//           type: FETCH_PAGE,
//           state: "fail",
//           error: "json is booboo",
//         });
//       }
//     });
// };
