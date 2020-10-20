import { GeneralSingularItemforView } from '../wordpress/@types-wordpress';
import { OverlayScrollbarsComponent } from 'overlayscrollbars-react';

export interface IApp {
  isFetching: IsFetching;
  isMenuOpen: IsMenuOpen;
  isDisplaying: IsDisplaying;
  refs: Ref;
}

export interface IsDisplaying {
  status: 200 | 404;
  slug: string;
  loadTime: number;
  active: GeneralSingularItemforView;
}

export type IsFetching = boolean;

export type IsMenuOpen = boolean;

export enum APP_ERROR_CODES {
  FAIL_ACTION_IS_FETCHING = 'APP/FAIL_ACTION_IS_FETCHING',
  FAIL_ACTION_IS_DISPLAYING = 'APP/FAIL_ACTION_IS_DISPLAYING',
  FAIL_ACTION_IS_MENU_OPEN = 'APP/FAIL_ACTION_IS_MENU_OPEN',
}

export type IAppReducer = IsDisplaying | IsFetching | ISetRef;

export enum SET_REF_TYPES {
  Body = 'body',
  latestPosts = 'latestPosts',
  testimonials = 'testimonials',
}

export interface ISetRef {
  type: SET_REF_TYPES;
  ref: React.RefObject<OverlayScrollbarsComponent>;
}

export type Ref = {
  [key in SET_REF_TYPES]?: ISetRef;
};
