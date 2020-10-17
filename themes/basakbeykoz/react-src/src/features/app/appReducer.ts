import ACTION_TYPES from "../../common/actionTypes";
import { FSA } from "../../common/@types-actions";
import stateMap from "../../store/@types-state";
import { ISetRef } from "../../common/@types-actions";
import { Env } from "../../common/@types-common";

const { REACT_APP_HOME_SLUG } = process.env as Env;
type isDisplaying = stateMap["app"]["isDisplaying"];
type isFetching = stateMap["app"]["isFetching"];
type isMenuOpen = stateMap["app"]["isMenuOpen"];

const initialState: stateMap["app"] = {
  isFetching: true,
  isMenuOpen: false,
  isDisplaying: {
    status: 200,
    slug: REACT_APP_HOME_SLUG,
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
    case ACTION_TYPES.IS_DISPLAYING:
      if (action.state === "fail") return state;
      return {
        ...state,
        isDisplaying: {
          ...state.isDisplaying,
          ...(action.payload as isDisplaying),
        },
      };

    case ACTION_TYPES.IS_FETCHING:
      if (action.state === "fail") return state;
      return {
        ...state,
        isFetching: action.payload as isFetching,
      };

    case ACTION_TYPES.IS_MENU_OPEN:
      if (action.state === "fail") return state;
      console.log("ismenuopen", action);
      return {
        ...state,
        isMenuOpen: action.payload as isMenuOpen,
      };

    case ACTION_TYPES.SET_REF:
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

export const appInitialState = initialState;
