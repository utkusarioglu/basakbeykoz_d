import { DispatchMethod} from '../common/@types-actions';
import { IS_FETCHING, IS_DISPLAYING, IS_MENU_OPEN } from '../common/types'
import stateMap from './@types-state';

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