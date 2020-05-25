import { DispatchMethod} from '../common/@types-actions';
import { IS_FETCHING, IS_DISPLAYING } from '../common/types'

export const isFetching = (state: boolean) => 
    (dispatch: DispatchMethod) => {
        dispatch({
            type: IS_FETCHING,
            payload: state,
        })
    }

interface PageAttr {
    type: string, 
    id: number,
}

export const isDisplaying = (page_attr: PageAttr) =>
    (dispatch: DispatchMethod) => {
        dispatch({
            type: IS_DISPLAYING,
            payload: page_attr,
        })
    }
