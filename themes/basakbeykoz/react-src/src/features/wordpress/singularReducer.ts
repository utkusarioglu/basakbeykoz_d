import { ACTION_TYPES, ACTION_STATES } from "../../common/actionConstants";
import { FSA } from "../../common/@types-actions";
import stateMap from "../../store/@types-state";
import { PartialSingularDispatch } from "./@types-wordpress";

const initialState: stateMap["singular"] = {
  post: {
    fetchTime: 0,
    items: {},
  },
  page: {
    items: {},
  },
};

export default function (
  state = initialState,
  action: FSA<PartialSingularDispatch>
): stateMap["singular"] {
  switch (action.type) {
    case ACTION_TYPES.FETCH_SINGULAR:
      if (action.state === ACTION_STATES.SUCCESS) {
        return {
          post: {
            ...state.post,
            items: {
              ...state.post.items,
              ...action.payload.post,
            },
          },
          page: {
            items: {
              ...state.page.items,
              ...action.payload.page,
            },
          },
        };
      } else {
        return state;
      }

    case ACTION_TYPES.FETCH_CATEGORY_POSTS:
      if (action.state === ACTION_STATES.SUCCESS) {
        return {
          ...state,
          post: {
            fetchTime: action.payload.fetchTime as number,
            items: {
              ...state.post.items,
              ...action.payload.post,
            },
          },
        };
      } else {
        return state;
      }

    default:
      return state;
  }
}
