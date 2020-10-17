import { FSA } from "../../common/@types-actions";
import { wpMenuItem } from "./@types-wordpress";
import { ACTION_TYPES, ACTION_STATES } from "../../common/actionConstants";
import stateMap from "../../store/@types-state";

const initialState = {
  items: [],
};

export default function (
  state: stateMap["menu"] = initialState,
  action: FSA<wpMenuItem[]>
): stateMap["menu"] {
  switch (action.type) {
    case ACTION_TYPES.FETCH_MENU:
      if (action.state === ACTION_STATES.FAIL) return state;
      return {
        ...state,
        items: action.payload,
      };

    default:
      return state;
  }
}
