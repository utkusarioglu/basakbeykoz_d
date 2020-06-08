import { FETCH_SINGULAR } from '../common/types'
import { FSA } from '../common/@types-actions'
import stateMap from '../app/@types-state';
// import { wpPageItem } from './@types-wp';

const initialState: stateMap["singular"] = {
    postList: [],
    pageList: [],
    archive: {}
}

export default function(
    state = initialState, 
    action: FSA<any> // !HACK
): stateMap["singular"] {
    switch (action.type) {

        case FETCH_SINGULAR:
            console.log("action\n", action.payload)
            return {
                ...state,
                archive: {
                    ...state.archive,
                    [action.payload.data.slug]: action.payload,
                }
            }

        default:
            return state;
    }
}
