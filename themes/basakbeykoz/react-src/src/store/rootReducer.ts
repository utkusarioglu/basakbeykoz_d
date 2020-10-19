import { combineReducers } from 'redux';
import menuReducer from '../features/wordpress/menuReducer';
import appReducer from '../features/app/appReducer';
import singularReducer from '../features/wordpress/singularReducer';
import socialReducer from '../features/social/socialReducer';

export const rootReducer = combineReducers({
  app: appReducer,
  menu: menuReducer,
  social: socialReducer,
  singular: singularReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
