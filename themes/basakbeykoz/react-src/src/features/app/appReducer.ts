import {
  IS_DISPLAYING,
  IS_FETCHING,
  IS_MENU_OPEN,
  SET_REF,
} from "../../common/actionTypes";
import { FSA } from "../../common/@types-actions";
import stateMap from "../../store/@types-state";
import { ISetRef } from "../../common/@types-actions";

type isDisplaying = stateMap["app"]["isDisplaying"];
type isFetching = stateMap["app"]["isFetching"];
type isMenuOpen = stateMap["app"]["isMenuOpen"];

const initialState: stateMap["app"] = {
  isFetching: true,
  isMenuOpen: false,
  isDisplaying: {
    status: 200,
    slug: process.env.REACT_APP_HOME_SLUG as string,
    loadTime: 0,
    active: {
      slug: "",
      type: "page",
      title: "",
      content: "",
      thumbnail: " ",
    },
  },
  refs: {
    body: undefined,
    latestPosts: undefined,
    testimonials: undefined,
  },
};

export default function (
  state = initialState,
  action: FSA<isDisplaying | isFetching | ISetRef>
): stateMap["app"] {
  switch (action.type) {
    case IS_DISPLAYING:
      if (action.state === "fail") return state;
      return {
        ...state,
        isDisplaying: {
          ...state.isDisplaying,
          ...(action.payload as isDisplaying),
        },
      };

    case IS_FETCHING:
      if (action.state === "fail") return state;
      return {
        ...state,
        isFetching: action.payload as isFetching,
      };

    case IS_MENU_OPEN:
      if (action.state === "fail") return state;
      return {
        ...state,
        isMenuOpen: action.payload as isMenuOpen,
      };

    case SET_REF:
      if (action.state === "fail") return state;
      const payload = action.payload as ISetRef;
      return {
        ...state,
        refs: {
          ...state.refs,
          [payload.type]: payload.ref,
        },
      };

    default:
      return state;
  }
}
