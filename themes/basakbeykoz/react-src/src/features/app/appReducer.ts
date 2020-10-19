import { ACTION_TYPES, ACTION_STATES } from '../../common/actionConstants';
import { FSA } from '../../common/@types-actions';
import { ISetRef } from '../../common/@types-actions';
import { Env } from '../../common/@types-common';
import { IsFetching, IsMenuOpen, IsDisplaying, IApp } from './@types-app';

const { REACT_APP_HOME_SLUG } = process.env as Env;

const initialState: IApp = {
  isFetching: true,
  isMenuOpen: false,
  isDisplaying: {
    status: 200,
    slug: REACT_APP_HOME_SLUG,
    loadTime: 0,
    active: {
      slug: '',
      type: 'page',
      title: '',
      content: '',
      thumbnail: ' ',
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
  action: FSA<IsDisplaying | IsFetching | ISetRef>
): IApp {
  switch (action.type) {
    case ACTION_TYPES.IS_DISPLAYING:
      if (action.state === ACTION_STATES.FAIL) return state;
      return {
        ...state,
        isDisplaying: {
          ...state.isDisplaying,
          ...(action.payload as IsDisplaying),
        },
      };

    case ACTION_TYPES.IS_FETCHING:
      if (action.state === ACTION_STATES.FAIL) return state;
      return {
        ...state,
        isFetching: action.payload as IsFetching,
      };

    case ACTION_TYPES.IS_MENU_OPEN:
      if (action.state === ACTION_STATES.FAIL) return state;
      console.log('ismenuopen', action);
      return {
        ...state,
        isMenuOpen: action.payload as IsMenuOpen,
      };

    case ACTION_TYPES.SET_REF:
      if (action.state === ACTION_STATES.FAIL) return state;
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
