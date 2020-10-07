import { FETCH_MENU } from "../../common/types";
import { FSA } from "../../common/@types-actions";
import { wpMenuItem } from "./@types-wp";
import stateMap from "../../store/@types-state";

const initialState = {
  items: [],
};

export default function (
  state: stateMap["menu"] = initialState,
  action: FSA<wpMenuItem[]>
): stateMap["menu"] {
  switch (action.type) {
    case FETCH_MENU:
      if (action.state === "fail") return state;
      return {
        ...state,
        items: action.payload,
      };

    default:
      return state;
  }
}
