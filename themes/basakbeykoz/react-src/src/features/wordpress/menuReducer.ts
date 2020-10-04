import { FETCH_MENU } from "../../common/types";
import { FSA } from "../../common/@types-actions";
import { wpMenuItem } from "./@types-wp";

const initialState = {
  items: [],
};

export default function (state = initialState, action: FSA<wpMenuItem>) {
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
