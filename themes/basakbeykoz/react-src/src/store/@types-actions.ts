import { ERROR_CODES } from './@types-store';
import { ACTION_TYPES, ACTION_STATES } from '../common/actionConstants';
export type FSA<T> = FSASuccess<T> | FSAFailure;

interface FSASuccess<T> {
  state: ACTION_STATES.SUCCESS;
  type: ACTION_TYPES;
  payload: T;
}

interface FSAFailure {
  state: ACTION_STATES.FAIL;
  type: ACTION_TYPES;
  errorCode: ERROR_CODES;
  meta?: any;
}

export type DispatchMethod<T> = (vars: FSA<T>) => void;
