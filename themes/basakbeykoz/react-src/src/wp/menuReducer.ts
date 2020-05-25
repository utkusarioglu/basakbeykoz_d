import {FETCH_MENU} from '../common/types'
import { FSA  } from '../common/@types-actions'

const initialState = {
    items: []
}

export default function(state = initialState, action: FSA) {
    switch (action.type) {

        case FETCH_MENU:
            return {
                ...state,
                items: action.payload
            }
            
        default:
            return state;
    }
}
