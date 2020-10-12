import { DispatchMethod } from "../../common/@types-actions";
import ACTION_TYPES from "../../common/actionTypes";
import {
  PartialSingularDispatch,
  wpSingularArchiveItem,
} from "./@types-wordpress";
import { filterByType } from "./filters";
import rest from "../../services/rest";
import { ERROR_CODES } from "./constants";

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
          type: ACTION_TYPES.FETCH_SINGULAR,
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
            type: ACTION_TYPES.FETCH_SINGULAR,
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
        type: ACTION_TYPES.FETCH_SINGULAR,
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
          type: ACTION_TYPES.FETCH_CATEGORY_POSTS,
          state: "success",
          payload,
        });
      } else {
        dispatch({
          type: ACTION_TYPES.FETCH_CATEGORY_POSTS,
          state: "fail",
          error: ERROR_CODES.CATEGORY_POSTS_FETCH_FAIL,
        });
      }
    })
    .catch(() => {
      dispatch({
        type: ACTION_TYPES.FETCH_CATEGORY_POSTS,
        state: "fail",
        error: ERROR_CODES.CATEGORY_POSTS_FETCH_FAIL,
      });
    });
};
