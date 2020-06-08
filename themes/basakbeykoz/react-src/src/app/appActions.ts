import { DispatchMethod} from '../common/@types-actions';
import { IS_FETCHING, IS_DISPLAYING } from '../common/types'
import stateMap from './@types-state';

type isDisplaying = stateMap["app"]["isDisplaying"];

export const setFetching = (fetch_bool: boolean) => 
    (dispatch: DispatchMethod<any>) => { //!HACK any
        dispatch({
            type: IS_FETCHING,
            payload: fetch_bool,
        })
    }

export const setDisplaying = (display_data: isDisplaying) =>
    (dispatch: DispatchMethod<any>) => { // !HACK any
        console.log(display_data)
        dispatch({
            type: IS_DISPLAYING,
            payload: display_data,
        })
    }
