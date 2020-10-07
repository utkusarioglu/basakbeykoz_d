import { DispatchMethod } from "../../common/@types-actions";
import { FETCH_MENU } from "../../common/actionTypes";
import { ERROR_CODES } from "./constants";
import { wpMenuItem } from "./@types-wp";
import rest from "../../services/rest";
export const fetchMenu = (slug: string) => (
  dispatch: DispatchMethod<wpMenuItem>
) => {
  rest
    .request({
      method: "get",
      url: "/menus/v1/menus/" + slug,
    })
    .then(({ data }) => {
      if (data) {
        // TODO you need a better error test here
        dispatch({
          type: FETCH_MENU,
          state: "success",
          payload: data.items,
        });
      } else {
        dispatch({
          type: FETCH_MENU,
          state: "fail",
          error: ERROR_CODES.MENU_FETCH_FAIL,
        });
      }
    });
};
