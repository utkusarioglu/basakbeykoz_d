import { DispatchMethod} from '../common/@types-actions';
import { IS_FETCHING, IS_DISPLAYING } from '../common/types'
import stateMap from './@types-state';

type isDisplaying = stateMap["app"]["isDisplaying"];
type isFetching = stateMap["app"]["isFetching"];

export const setFetching = (fetch_bool: boolean) => 
    (dispatch: DispatchMethod<isFetching>) => {
        dispatch({
            type: IS_FETCHING,
            state: "success",
            payload: fetch_bool,
        })
    }

export const setDisplaying = (display_data: isDisplaying) =>
    (dispatch: DispatchMethod<isDisplaying>) => {
        console.log(display_data)
        dispatch({
            type: IS_DISPLAYING,
            state: "success",
            payload: display_data,
        })
    }
