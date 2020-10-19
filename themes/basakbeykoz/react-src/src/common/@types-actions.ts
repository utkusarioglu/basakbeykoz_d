import { OverlayScrollbarsComponent } from 'overlayscrollbars-react';
import { WP_ERROR_CODES } from '../features/wordpress/constants';
import { ACTION_TYPES, ACTION_STATES } from './actionConstants';
export type FSA<T> = FSASuccess<T> | FSAFailure;

interface FSASuccess<T> {
  type: ACTION_TYPES;
  state: ACTION_STATES.SUCCESS;
  payload: T;
}

interface FSAFailure {
  type: ACTION_TYPES;
  state: ACTION_STATES.FAIL;
  errorCode: WP_ERROR_CODES;
  meta?: any;
}

export type DispatchMethod<T> = (vars: FSA<T>) => void;

export interface ISetRef {
  type: ISetRefTypes;
  ref: React.RefObject<OverlayScrollbarsComponent>;
}

export enum ISetRefTypes {
  Body = 'body',
  latestPosts = 'latestPosts',
  testimonials = 'testimonials',
}
