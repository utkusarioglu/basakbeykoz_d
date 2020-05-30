import { DispatchMethod} from '../common/@types-actions';
import { IS_FETCHING, IS_DISPLAYING } from '../common/types'
import stateMap from './@types-state';

type isDisplaying = stateMap["app"]["isDisplaying"];

export const isFetching = (fetch_bool: boolean) => 
    (dispatch: DispatchMethod) => {
        dispatch({
            type: IS_FETCHING,
            payload: fetch_bool,
        })
    }

export const isDisplaying = (display_data: isDisplaying) =>
    (dispatch: DispatchMethod) => {
        dispatch({
            type: IS_DISPLAYING,
            payload: display_data,
        })
    }
