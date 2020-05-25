import {
    FETCH_POSTS, 
    FETCH_POST, 
    FETCH_CATEGORY_POSTS
} from '../common/types'
import { FSA } from '../common/@types-actions'
import stateMap  from '../app/@types-state'

const initialState: stateMap["posts"] = {
    list: [],
    single: {},
}

export default function(
    state = initialState, 
    action: FSA,
): stateMap["posts"] {
    switch (action.type) {

        case FETCH_POSTS:
            return {
                ...state,
                list: action.payload,
            }

        case FETCH_CATEGORY_POSTS:
            return {
                ...state,
                list: action.payload,
            }

        case FETCH_POST:
            return {
                ...state,
                single: action.payload, //TODO
            }

        default:
            return state;
    }
}
