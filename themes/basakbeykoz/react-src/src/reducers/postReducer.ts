import {FETCH_POSTS} from '../actions/types'

const initialState = {
    items: []
}

interface Action {
    type: string,
    data?: any,
}

export default function(state = initialState, action: Action) {
    switch (action.type) {
        case FETCH_POSTS:
            return {
                ...state,
                items: action.data || []
            }
        default:
            return state;
    }
}
