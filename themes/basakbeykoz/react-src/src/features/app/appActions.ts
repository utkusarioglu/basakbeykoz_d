import { DispatchMethod } from '../../common/@types-actions';
import { ACTION_TYPES, ACTION_STATES } from '../../common/actionConstants';
import stateMap from '../../store/@types-state';
import { ISetRef } from '../../common/@types-actions';

type isDisplaying = stateMap['app']['isDisplaying'];
type isFetching = stateMap['app']['isFetching'];
type isMenuOpen = stateMap['app']['isMenuOpen'];

export const setFetching = (isFetching: boolean) => (
  dispatch: DispatchMethod<isFetching>
) => {
  dispatch({
    type: ACTION_TYPES.IS_FETCHING,
    state: ACTION_STATES.SUCCESS,
    payload: isFetching,
  });
};

export const setDisplaying = (isDisplaying: Partial<isDisplaying>) => (
  dispatch: DispatchMethod<Partial<isDisplaying>>
) => {
  dispatch({
    type: ACTION_TYPES.IS_DISPLAYING,
    state: ACTION_STATES.SUCCESS,
    payload: isDisplaying,
  });
};

export const setIsMenuOpen = (isMenuOpen: isMenuOpen) => (
  dispatch: DispatchMethod<isMenuOpen>
) => {
  dispatch({
    type: ACTION_TYPES.IS_MENU_OPEN,
    state: ACTION_STATES.SUCCESS,
    payload: isMenuOpen,
  });
};

export const setRef = (refData: ISetRef) => (
  dispatch: DispatchMethod<ISetRef>
) => {
  dispatch({
    type: ACTION_TYPES.SET_REF,
    state: ACTION_STATES.SUCCESS,
    payload: refData,
  });
};
