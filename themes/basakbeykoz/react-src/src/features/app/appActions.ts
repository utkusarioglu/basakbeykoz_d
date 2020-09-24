import { DispatchMethod} from '../../common/@types-actions';
import { IS_FETCHING, IS_DISPLAYING, IS_MENU_OPEN, SET_REF } from '../../common/types'
import stateMap from '../../store/@types-state';
import { ISetRef } from '../../common/@types-actions';

type isDisplaying = stateMap["app"]["isDisplaying"];
type isFetching = stateMap["app"]["isFetching"];
type isMenuOpen = stateMap['app']['isMenuOpen'];


export const setFetching = (fetch_bool: boolean) => 
    (dispatch: DispatchMethod<isFetching>) => {
        dispatch({
            type: IS_FETCHING,
            state: "success",
            payload: fetch_bool,
        })
    }

export const setDisplaying = (is_displaying: Partial<isDisplaying>) =>
    (dispatch: DispatchMethod<Partial<isDisplaying>>) => {
        dispatch({
            type: IS_DISPLAYING,
            state: "success",
            payload: is_displaying,
        })
    }

export const setIsMenuOpen = (is_menuOpen: isMenuOpen) => 
    (dispatch: DispatchMethod<isMenuOpen>) => {
        console.log('dispatch is menu open', is_menuOpen)
        dispatch({
            type: IS_MENU_OPEN,
            state: 'success',
            payload: is_menuOpen,
        })
}

export const setRef = (refData: ISetRef) =>
    (dispatch: DispatchMethod<ISetRef>) => {
        dispatch({
            type: SET_REF,
            state: 'success',
            payload: refData,
        })
    }