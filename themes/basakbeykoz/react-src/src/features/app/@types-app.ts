import { GeneralSingularItemforView } from '../wordpress/@types-wordpress';
import { OverlayScrollbarsComponent } from 'overlayscrollbars-react';

export interface IApp {
  isFetching: IsFetching;
  isMenuOpen: IsMenuOpen;
  isDisplaying: IsDisplaying;
  refs: {
    body?: React.RefObject<OverlayScrollbarsComponent>;
    latestPosts?: React.RefObject<OverlayScrollbarsComponent>;
    testimonials?: React.RefObject<OverlayScrollbarsComponent>;
  };
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
  FAIL_ACTION_IS_FETCHING = 'FAIL_ACTION_IS_FETCHING',
}
