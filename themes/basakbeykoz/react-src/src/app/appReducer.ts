import { IS_DISPLAYING, IS_FETCHING } from '../common/types'
// import { useParams } from "react-router-dom";
import { FSA } from "../common/@types-actions";
import stateMap from "./@types-state";

const initialState: stateMap["app"] = {
    isFetching: true,
    // isDisplaying: {
    //     type: "page",
    //     slug: useParams<{slug: string}>().slug || process.env.REACT_APP_HOME_SLUG as string,
    // },
    isDisplaying: {
        type: "page",
        slug: process.env.REACT_APP_HOME_SLUG as string,
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
