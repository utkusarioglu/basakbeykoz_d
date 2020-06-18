import { FETCH_SINGULAR, FETCH_CATEGORY_POSTS, FETCH_PAGE } from '../common/types'
import { FSA } from '../common/@types-actions'
import stateMap from '../app/@types-state';
import { PartialSingularDispatch } from './@types-wp';

const initialState: stateMap["singular"] = {
    post: {
        fetchTime: 0,
        items: {}
    },
    page: {
        items: {}
    },
}

export default function(
    state = initialState, 
    action: FSA<PartialSingularDispatch>
): stateMap["singular"] {
    switch (action.type) {

        case FETCH_SINGULAR:
            if(action.state === "success") {
                return {
                    post: {
                        ...state.post,
                        items: {
                            ...state.post.items,
                            ...action.payload.post,
                        }
                    },
                    page: {
                        items: {
                            ...state.page.items,
                            ...action.payload.page,
                        },
                    },
                }
            } else {
                return state;
            }

        case FETCH_PAGE:
            if(action.state === "success") {
                return {
                    ...state,
                    page: {
                        ...state.page,
                        items: {
                            ...state.page.items,
                            ...action.payload.page,

                        }
                    }
                }
            } else {
                return state;
            }

        case FETCH_CATEGORY_POSTS:            
            if(action.state === "success") {
                return {
                    ...state,
                    post: {
                        fetchTime: action.payload.fetchTime as number,
                        items: {
                            ...state.post.items,
                            ...action.payload.post,
                        }
                    },
                }
            } else {
                return state;
            }

        default:
            return state;
    }
}


