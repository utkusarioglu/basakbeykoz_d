import { DispatchMethod } from "../../common/@types-actions";
import ACTION_TYPES from "../../common/actionTypes";
import stateMap from "../../store/@types-state";
import { ISetRef } from "../../common/@types-actions";

type isDisplaying = stateMap["app"]["isDisplaying"];
type isFetching = stateMap["app"]["isFetching"];
type isMenuOpen = stateMap["app"]["isMenuOpen"];

export const setFetching = (fetch_bool: boolean) => (
  dispatch: DispatchMethod<isFetching>
) => {
  dispatch({
    type: ACTION_TYPES.IS_FETCHING,
    state: "success",
    payload: fetch_bool,
  });
};

export const setDisplaying = (is_displaying: Partial<isDisplaying>) => (
  dispatch: DispatchMethod<Partial<isDisplaying>>
) => {
  dispatch({
    type: ACTION_TYPES.IS_DISPLAYING,
    state: "success",
    payload: is_displaying,
  });
};

export const setIsMenuOpen = (is_menuOpen: isMenuOpen) => (
  dispatch: DispatchMethod<isMenuOpen>
) => {
  dispatch({
    type: ACTION_TYPES.IS_MENU_OPEN,
    state: "success",
    payload: is_menuOpen,
  });
};

export const setRef = (refData: ISetRef) => (
  dispatch: DispatchMethod<ISetRef>
) => {
  dispatch({
    type: ACTION_TYPES.SET_REF,
    state: "success",
    payload: refData,
  });
};
