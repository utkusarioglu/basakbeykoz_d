import { IS_DISPLAYING, IS_FETCHING } from '../common/types'
// import { useParams } from "react-router-dom";
import { FSA } from "../common/@types-actions";
import stateMap from "./@types-state";

type isDisplaying = stateMap["app"]["isDisplaying"];
type isFetching = stateMap["app"]["isFetching"];

const initialState: stateMap["app"] = {
    isFetching: true,
    isDisplaying: {
        slug: process.env.REACT_APP_HOME_SLUG as string,
        loadTime: 0,
        active: {
            slug: "",
            type: "page",
            title: "",
            content: "",
            thumbnail: "",
        },
    }
}

export default function (
    state = initialState,
    action: FSA<isDisplaying | isFetching >,
): stateMap["app"] {
    switch (action.type) {

        case IS_DISPLAYING:
            console.log("IS_DISPLAYING", action)
            if(action.state === "fail") return state 
            return {
                ...state,
                isDisplaying: {
                    ...state.isDisplaying,
                    ...action.payload as isDisplaying
                }
            }
            

        case IS_FETCHING:
            if(action.state === "fail") return state 
            return {
                ...state,
                isFetching: action.payload as isFetching,
            }
        
        default:
            return state;
    }
}
