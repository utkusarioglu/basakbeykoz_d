import {combineReducers} from 'redux';
import menuReducer from '../wp/menuReducer';
// import postReducer from '../wp/postReducer'
// import pageReducer from '../wp/singularReducer';
import categoryReducer from '../wp/categoryReducer'
import appReducer from "./appReducer";
import singularReducer from '../wp/singularReducer';
import socialReducer from '../features/social/socialReducer';

export const rootReducer = combineReducers({
    app: appReducer,
    menu: menuReducer,
    social: socialReducer,
    singular: singularReducer,
    categories: categoryReducer,
})

export type RootState = ReturnType<typeof rootReducer>;
