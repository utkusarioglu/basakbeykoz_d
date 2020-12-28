import { DispatchMethod } from '../../../store/@types-actions';
import { ACTION_TYPES, ACTION_STATES } from '../../../store/actionConstants';
import { IsFetching, OpenMenu, IsDisplaying, ISetRef } from './@types-app';

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

/**
 * Sets the open/close state of the burger menu on mobile displays
 * @param openMenu boolean that sets whether the mobile menu is open
 */
export const setOpenMenu = (openMenu: OpenMenu) => (
  dispatch: DispatchMethod<OpenMenu>
) => {
  dispatch({
    type: ACTION_TYPES.IS_MENU_OPEN,
    state: ACTION_STATES.SUCCESS,
    payload: openMenu,
  });
};

/**
 * Closes any open menu regardless of its type
 * Menu refers to the mobile menus such as nav and share
 */
export const closeAnyMenu = () => (dispatch: DispatchMethod<OpenMenu>) => {
  dispatch({
    type: ACTION_TYPES.IS_MENU_OPEN,
    state: ACTION_STATES.SUCCESS,
    payload: 'none',
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
