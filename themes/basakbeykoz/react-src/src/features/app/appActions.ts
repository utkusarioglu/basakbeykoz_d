import { FSA } from "../../common/@types-actions";
import { ACTION_TYPES, ACTION_STATES } from "../../common/actionConstants";
import stateMap from "../../store/@types-state";
import { ISetRef } from "../../common/@types-actions";
import { IsDisplaying } from "./@types-app";
import { RootState } from "../../store/rootReducer";

type isFetching = stateMap["app"]["isFetching"];
type isMenuOpen = stateMap["app"]["isMenuOpen"];

export function setFetching(fetch_bool: isFetching): FSA<isFetching> {
  return {
    type: ACTION_TYPES.IS_FETCHING,
    state: ACTION_STATES.SUCCESS,
    payload: fetch_bool,
  };
}

export function setDisplaying(
  is_displaying: Partial<IsDisplaying>
): FSA<Partial<IsDisplaying>> {
  return {
    type: ACTION_TYPES.IS_DISPLAYING,
    state: ACTION_STATES.SUCCESS,
    payload: is_displaying,
  };
}

export function setIsMenuOpen(is_menuOpen: isMenuOpen): FSA<isMenuOpen> {
  return {
    type: ACTION_TYPES.IS_MENU_OPEN,
    state: ACTION_STATES.SUCCESS,
    payload: is_menuOpen,
  };
}

export function setRef(refData: ISetRef): FSA<ISetRef> {
  return {
    type: ACTION_TYPES.SET_REF,
    state: ACTION_STATES.SUCCESS,
    payload: refData,
  };
}

export const selectIsDisplayingSlug = (state: RootState) =>
  state.app.isDisplaying.slug;
export const selectIsDisplayingActive = (state: RootState) =>
  state.app.isDisplaying.active;
export const selectIsDisplayingStatus = (state: RootState) =>
  state.app.isDisplaying.status;
export const selectRefs = (state: RootState) => state.app.refs;
export const selectIsFetching = (state: RootState) => state.app.isFetching;
export const selectIsMenuOpen = (state: RootState) => state.app.isMenuOpen;
