import { combineReducers } from 'redux';
import menuReducer from '../components/features/wordpress/menuReducer';
import appReducer from '../components/features/app/appReducer';
import singularReducer from '../components/features/wordpress/singularReducer';
import IRootReducer from './@types-store';

export const rootReducer = combineReducers<IRootReducer>({
  app: appReducer,
  menu: menuReducer,
  singular: singularReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
