import {combineReducers} from 'redux';
import menuReducer from './menuReducer';
import postsReducer from './postReducer'

export default combineReducers({
    menu: menuReducer,
    post: postsReducer,
})
