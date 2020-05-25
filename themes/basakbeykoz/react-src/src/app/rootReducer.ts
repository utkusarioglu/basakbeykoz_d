import {combineReducers} from 'redux';
import menuReducer from '../wp/menuReducer';
import postReducer from '../wp/postReducer'
import pageReducer from '../wp/pageReducer';
import categoryReducer from '../wp/categoryReducer'
import appReducer from "./appReducer";

export const rootReducer = combineReducers({
    app: appReducer,
    menu: menuReducer,
    posts: postReducer,
    pages: pageReducer,
    categories: categoryReducer,
})

export type RootState = ReturnType<typeof rootReducer>;
