import {
    FETCH_POSTS, 
    FETCH_POST, 
    FETCH_CATEGORY_POSTS
} from '../common/types'
import { FSA } from '../common/@types-actions'

const initialState = {
    items: [],
    post: undefined,
}

export default function(state = initialState, action: FSA) {
    switch (action.type) {

        case FETCH_POSTS:
            return {
                ...state,
                items: action.payload,
            }

        case FETCH_CATEGORY_POSTS:
            return {
                ...state,
                items: action.payload,
            }

        case FETCH_POST:
            return {
                ...state,
                post: action.payload,
            }

        default:
            return state;
    }
}
