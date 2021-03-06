import { ACTION_TYPES, ACTION_STATES } from '../../../store/actionConstants';
import { FSA } from '../../../store/@types-actions';
import config from '../../../config';
import {
  IsFetching,
  OpenMenu,
  IsDisplaying,
  IApp,
  IAppReducer,
  ISetRef,
} from './@types-app';

const { HOME_SLUG } = config;

const initialState: IApp = {
  isFetching: true,
  openMenu: 'none',
  isDisplaying: {
    status: 200,
    slug: HOME_SLUG,
    loadTime: 0,
    active: {
      slug: '',
      type: 'page',
      title: '',
      content: '',
      // Single space here is intentional. Allows makes the canvas element
      // treat this value as a thumbnail but doesn't draw anything. This way,
      // the page appears in its default color until the very first content is
      // loaded.
      // If a feature expansion happens on this site, this rather fragile
      // logic can be replaced by one which knows that the app is loading
      // for the first time and avoids displaying the feature image section
      // until some real data has been received.
      thumbnail: ' ',
      excerpt: '',
    },
  },
  refs: {
    body: undefined,
    latestPosts: undefined,
    testimonials: undefined,
  },
};

export default function (state = initialState, action: FSA<IAppReducer>): IApp {
  switch (action.type) {
    case ACTION_TYPES.IS_FETCHING:
      if (action.state === ACTION_STATES.FAIL) return state;
      return {
        ...state,
        isFetching: action.payload as IsFetching,
      };

    case ACTION_TYPES.IS_DISPLAYING:
      if (action.state === ACTION_STATES.FAIL) return state;
      return {
        ...state,
        isDisplaying: {
          ...state.isDisplaying,
          ...(action.payload as IsDisplaying),
        },
      };

    case ACTION_TYPES.IS_MENU_OPEN:
      if (action.state === ACTION_STATES.FAIL) return state;
      return {
        ...state,
        openMenu: action.payload as OpenMenu,
      };

    case ACTION_TYPES.SET_REF:
      if (action.state === ACTION_STATES.FAIL) return state;
      const payload = action.payload as ISetRef;
      return {
        ...state,
        refs: {
          ...state.refs,
          [payload.type]: payload as ISetRef,
        },
      };

    default:
      return state;
  }
}

export const appInitialState = initialState;
