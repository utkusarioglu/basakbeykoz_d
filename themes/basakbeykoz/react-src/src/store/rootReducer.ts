import {combineReducers} from 'redux';
import menuReducer from '../features/wordpress/menuReducer';
// import postReducer from '../wp/postReducer'
// import pageReducer from '../wp/singularReducer';
import categoryReducer from '../features/wordpress/categoryReducer'
import appReducer from "../features/app/appReducer";
import singularReducer from '../features/wordpress/singularReducer';
import socialReducer from '../features/social/socialReducer';

export const rootReducer = combineReducers({
    app: appReducer,
    menu: menuReducer,
    social: socialReducer,
    singular: singularReducer,
    categories: categoryReducer,
})

export type RootState = ReturnType<typeof rootReducer>;
