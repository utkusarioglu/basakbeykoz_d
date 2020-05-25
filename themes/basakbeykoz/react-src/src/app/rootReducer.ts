import {combineReducers} from 'redux';
import menuReducer from '../wp/menuReducer';
import postReducer from '../wp/postReducer'
import pageReducer from '../wp/pageReducer';
import categoryReducer from '../wp/categoryReducer'

export default combineReducers({
    menu: menuReducer,
    posts: postReducer,
    pages: pageReducer,
    categories: categoryReducer,
})


/*
    app
        isFetching
        isDisplaying: 
            type: 
            id: 
    menu
        items
    pages
        list: [] // maybe
        single:
            [page_id]: 
                loadTime
                payload:
                    ...

    posts
        list: []
        single: 
            [post_id]:
                loadTime:
                payload:
                    ...
*/
