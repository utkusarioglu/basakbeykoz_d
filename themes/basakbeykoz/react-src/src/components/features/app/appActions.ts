import { DispatchMethod } from '../../../store/@types-actions';
import { ACTION_TYPES, ACTION_STATES } from '../../../store/actionConstants';
import { IsFetching, IsMenuOpen, IsDisplaying, ISetRef } from './@types-app';

export const setFetching = (isFetching: boolean) => (
  dispatch: DispatchMethod<IsFetching>
) => {
  dispatch({
    type: ACTION_TYPES.IS_FETCHING,
    state: ACTION_STATES.SUCCESS,
    payload: isFetching,
  });
};

export const setDisplaying = (isDisplaying: Partial<IsDisplaying>) => (
  dispatch: DispatchMethod<Partial<IsDisplaying>>
) => {
  dispatch({
    type: ACTION_TYPES.IS_DISPLAYING,
    state: ACTION_STATES.SUCCESS,
    payload: isDisplaying,
  });
};

export const setIsMenuOpen = (isMenuOpen: IsMenuOpen) => (
  dispatch: DispatchMethod<IsMenuOpen>
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
