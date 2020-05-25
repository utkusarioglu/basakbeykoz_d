import { 
    FETCH_CATEGORIES, 
    FETCH_CATEGORY 
} from '../common/types'
import { FSA } from '../common/@types-actions'

const initialState = {
    items: [],
    post: undefined,
}

export default function(state = initialState, action: FSA) {
    switch (action.type) {

        case FETCH_CATEGORIES:
            return {
                ...state,
                items: action.payload
            }

        case FETCH_CATEGORY:
            return {
                ...state,
                single: action.payload
            }

        default:
            return state;
    }
}
