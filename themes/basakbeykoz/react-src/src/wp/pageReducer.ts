import {FETCH_PAGE} from '../common/types'
import { FSA } from '../common/@types-actions'

const initialState = {
    page: undefined,
}

export default function(state = initialState, action: FSA) {
    switch (action.type) {

        case FETCH_PAGE:
            return {
                ...state,
                page: action.payload
            }

        default:
            return state;
    }
}
