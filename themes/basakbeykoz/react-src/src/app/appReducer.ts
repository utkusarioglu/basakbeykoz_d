import { IS_DISPLAYING, IS_FETCHING, IS_MENU_OPEN } from '../common/types'
// import { useParams } from "react-router-dom";
import { FSA } from "../common/@types-actions";
import stateMap from "./@types-state";

type isDisplaying = stateMap["app"]["isDisplaying"];
type isFetching = stateMap["app"]["isFetching"];
type isMenuOpen = stateMap["app"]["isMenuOpen"];

const initialState: stateMap["app"] = {
    isFetching: true,
    isMenuOpen: false,
    isDisplaying: {
        slug: process.env.REACT_APP_HOME_SLUG as string,
        loadTime: 0,
        active: {
            slug: "",
            type: "page",
            title: "",
            content: "",
            thumbnail: " ",
        },
    }
}

export default function (
    state = initialState,
    action: FSA<isDisplaying | isFetching >,
): stateMap["app"] {
    switch (action.type) {

        case IS_DISPLAYING:
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
        
        case IS_MENU_OPEN:
            if(action.state === 'fail') return state;
            return {
                ...state,
                isMenuOpen: action.payload as isMenuOpen,
            }

        default:
            return state;
    }
}
