import {FETCH_PAGE} from '../common/types'
import { FSA } from '../common/@types-actions'
import stateMap from '../app/@types-state';

const initialState: stateMap["pages"] = {
    list: [],
    single: {}
}

export default function(
    state = initialState, 
    action: FSA
): stateMap["pages"] {
    switch (action.type) {

        case FETCH_PAGE:
            return {
                ...state,
                single: {
                    ...state.single,
                    ...action.payload,
                }
            }

        default:
            return state;
    }
}
