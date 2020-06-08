import {FETCH_PAGE} from '../common/types'
import { FSA } from '../common/@types-actions'
import stateMap from '../app/@types-state';

const initialState: stateMap["singular"] = {
    pageList: [],
    postList: [],
    archive: {}
}

export default function(
    state = initialState, 
    action: FSA<any> // !HACK any
): stateMap["singular"] {
    switch (action.type) {

        case FETCH_PAGE:
            return {
                ...state,
                archive: {
                    ...state.archive,
                    ...action.payload,
                }
            }

        default:
            return state;
    }
}
