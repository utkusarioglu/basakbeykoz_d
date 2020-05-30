import { IS_DISPLAYING, IS_FETCHING } from '../common/types'
import { FSA } from "../common/@types-actions";
import stateMap from "./@types-state";

const initialState: stateMap["app"] = {
    isFetching: false,
    isDisplaying: {
        type: "page",
        id: parseInt(process.env.REACT_APP_HOME_ID as string),
    }
}

export default function (
    state = initialState,
    action: FSA,
): stateMap["app"] {
    switch (action.type) {

        case IS_DISPLAYING:
            return {
                ...state,
                isDisplaying: action.payload
            }

        case IS_FETCHING:
            return {
                ...state,
                isFetching: action.payload,
            }
        
        default:
            return state;
    }
}
