import { FSA } from "../../common/@types-actions";
import { ACTION_TYPES, ACTION_STATES } from "../../common/actionConstants";
import { ERROR_CODES } from "./constants";
import { wpMenuItem } from "./@types-wordpress";
import rest from "../../services/rest";
import { RootState } from "../../store/rootReducer";

export function fetchMenu(slug: string): Promise<FSA<wpMenuItem>> {
  return rest
    .request({
      method: "get",
      url: "/menus/v1/menus/" + slug,
    })
    .then(({ data }) => {
      if (data) {
        // TODO you need a better error test here
        return {
          type: ACTION_TYPES.FETCH_MENU,
          state: ACTION_STATES.SUCCESS,
          payload: data.items,
        };
      } else {
        return {
          type: ACTION_TYPES.FETCH_MENU,
          state: ACTION_STATES.FAIL,
          error: ERROR_CODES.MENU_FETCH_FAIL,
        };
      }
    });
}

export const selectMenu = (state: RootState) => state.menu;
