import { OverlayScrollbarsComponent } from 'overlayscrollbars-react';
import { ERROR_CODES } from '../features/wordpress/constants';
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
  error: ERROR_CODES;
  meta?: any;
}

export type DispatchMethod<T> = (vars: FSA<T>) => void;

export interface ISetRef {
  type: 'body' | 'latestPosts' | 'testimonials';
  ref: React.RefObject<OverlayScrollbarsComponent>;
}
