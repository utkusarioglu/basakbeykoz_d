import {FETCH_MENU} from '../actions/types'

const initialState = {
    items: []
}

interface Action {
    type: string,
    data?: any,
}

export default function(state = initialState, action: Action) {
    switch (action.type) {
        case FETCH_MENU:
            return {
                ...state,
                items: action.data || []
            }
        default:
            return state;
    }
}
