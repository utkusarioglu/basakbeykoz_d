import { DispatchMethod, FSA } from "../../common/@types-actions";
import { ACTION_TYPES, ACTION_STATES } from "../../common/actionConstants";
import stateMap from "../../store/@types-state";
import { ISetRef } from "../../common/@types-actions";

type isDisplaying = stateMap["app"]["isDisplaying"];
type isFetching = stateMap["app"]["isFetching"];
type isMenuOpen = stateMap["app"]["isMenuOpen"];

export function setFetching(fetch_bool: isFetching): FSA<isFetching> {
  return {
    type: ACTION_TYPES.IS_FETCHING,
    state: ACTION_STATES.SUCCESS,
    payload: fetch_bool,
  };
}

export const boundSetFetching = (fetch_bool: boolean) => (
  dispatch: DispatchMethod<isFetching>
) => {
  dispatch(setFetching(fetch_bool));
};

export const boundSetDisplaying = (is_displaying: Partial<isDisplaying>) => (
  dispatch: DispatchMethod<Partial<isDisplaying>>
) => {
  dispatch({
    type: ACTION_TYPES.IS_DISPLAYING,
    state: ACTION_STATES.SUCCESS,
    payload: is_displaying,
  });
};

export const boundSetIsMenuOpen = (is_menuOpen: isMenuOpen) => (
  dispatch: DispatchMethod<isMenuOpen>
) => {
  dispatch({
    type: ACTION_TYPES.IS_MENU_OPEN,
    state: ACTION_STATES.SUCCESS,
    payload: is_menuOpen,
  });
};

export const boundSetRef = (refData: ISetRef) => (
  dispatch: DispatchMethod<ISetRef>
) => {
  dispatch({
    type: ACTION_TYPES.SET_REF,
    state: ACTION_STATES.SUCCESS,
    payload: refData,
  });
};
