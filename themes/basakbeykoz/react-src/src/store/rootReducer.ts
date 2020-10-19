import { combineReducers } from 'redux';
import menuReducer from '../features/wordpress/menuReducer';
import appReducer from '../features/app/appReducer';
import singularReducer from '../features/wordpress/singularReducer';
import socialReducer from '../features/social/socialReducer';
import IRootReducer from './@types-state';

export const rootReducer = combineReducers<IRootReducer>({
  app: appReducer,
  menu: menuReducer,
  social: socialReducer,
  singular: singularReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
