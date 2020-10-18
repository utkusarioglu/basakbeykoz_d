import { DispatchMethod } from "../../common/@types-actions";
import { ACTION_TYPES, ACTION_STATES } from "../../common/actionConstants";
import { ERROR_CODES } from "./constants";
import { wpMenuItem } from "./@types-wordpress";
import rest from "../../services/rest";
export const boundFetchMenu = (slug: string) => (
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
          type: ACTION_TYPES.FETCH_MENU,
          state: ACTION_STATES.SUCCESS,
          payload: data.items,
        });
      } else {
        dispatch({
          type: ACTION_TYPES.FETCH_MENU,
          state: ACTION_STATES.FAIL,
          error: ERROR_CODES.MENU_FETCH_FAIL,
        });
      }
    });
};
