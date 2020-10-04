import { DispatchMethod } from "../../common/@types-actions";

import { FETCH_MENU } from "../../common/types";
import { wpMenuItem } from "./@types-wp";

export const fetchMenu = (slug: string) => (
  dispatch: DispatchMethod<wpMenuItem>
) => {
  fetch(process.env.REACT_APP_REST_ENDPOINT + "/menus/v1/menus/" + slug)
    .then((data) => data.json())
    .then((json) => {
      if (json) {
        // TODO you need a better error test here
        dispatch({
          type: FETCH_MENU,
          state: "success",
          payload: json.items,
        });
      } else {
        dispatch({
          type: FETCH_MENU,
          state: "fail",
          error: "something went wrong",
        });
      }
    });
};
