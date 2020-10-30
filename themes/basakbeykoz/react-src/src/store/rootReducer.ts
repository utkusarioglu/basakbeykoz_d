import { combineReducers } from 'redux';
import menuReducer from '../components/features/wordpress/menuReducer';
import appReducer from '../components/features/app/appReducer';
import singularReducer from '../components/features/wordpress/singularReducer';
import socialReducer from '../components/features/social/socialReducer';
import IRootReducer from './@types-store';

export const rootReducer = combineReducers<IRootReducer>({
  app: appReducer,
  menu: menuReducer,
  social: socialReducer,
  singular: singularReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
