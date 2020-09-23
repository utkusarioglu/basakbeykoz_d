import { 
    FETCH_CATEGORIES, 
    FETCH_CATEGORY 
} from '../../common/types'
import { FSA } from '../../common/@types-actions'

const initialState = {
    items: [],
    post: undefined,
}

export default function(
    state = initialState, 
    action: FSA<any>
) { //!HACK any
    switch (action.type) {

        case FETCH_CATEGORIES:
            if (action.state === "fail") return state;
            return {
                ...state,
                items: action.payload
            }
            
        case FETCH_CATEGORY:
            if (action.state === "fail") return state;
            return {
                ...state,
                single: action.payload
            }

        default:
            return state;
    }
}
