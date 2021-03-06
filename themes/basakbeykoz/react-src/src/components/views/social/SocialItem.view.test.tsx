import React from 'react';
import { shallow, mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import SocialItemView, { SocialItemOwnProps } from './SocialItem.view';
import Chance from 'chance';
import { RootState } from '../../../store/rootReducer';
import { appInitialState } from '../../features/app/appReducer';
import { ACTION_STATES, ACTION_TYPES } from '../../../store/actionConstants';

const chance = Chance();
let store = configureStore<Partial<RootState>>([thunk])({
  app: appInitialState,
});
const emptyProps: SocialItemOwnProps = {
  title: '',
  icon: '',
  link: '',
  closeAnyMenu: () => () => {},
};
let randomProps: SocialItemOwnProps;

beforeEach(() => {
  store.clearActions();
  randomProps = {
    title: chance.string(),
    icon: chance.url(),
    link: chance.url(),
    closeAnyMenu: () => () => {},
  };
});

describe('Components', () => {
  describe('SocialItem', () => {
    it('run without crashing', () => {
      shallow(
        <Provider {...{ store }}>
          <SocialItemView {...randomProps} />
        </Provider>
      ).dive();
    });
    it('Set props', () => {
      const mounted = shallow(
        <Provider {...{ store }}>
          <SocialItemView {...randomProps} />
        </Provider>
      ).dive();
      Object.entries(randomProps).forEach(([key, value]) => {
        expect(mounted.prop(key)).toBe(value);
      });
    });

    it('Render relevant tags', () => {
      const mounted = mount(
        <Provider {...{ store }}>
          <SocialItemView {...emptyProps} />
        </Provider>
      );
      expect(mounted.find('a')).toHaveLength(1);
      expect(mounted.find('img')).toHaveLength(1);
    });

    it('Render required attributes', () => {
      const { title, icon, link } = randomProps;
      const mounted = mount(
        <Provider {...{ store }}>
          <SocialItemView {...randomProps} />
        </Provider>
      );
      // img
      expect(mounted.find('img').find(`[alt="${title}"]`)).toHaveLength(1);
      expect(mounted.find('img').find(`[src="${icon}"]`)).toHaveLength(1);
      expect(mounted.find('img').find(`[title="${title}"]`)).toHaveLength(1);
      expect(
        mounted.find('img').find("[className='Social-item']")
      ).toHaveLength(1);
      // a
      expect(mounted.find('a').find(`[href="${link}"]`)).toHaveLength(1);
      expect(mounted.find('a').find(`[target="_blank"]`)).toHaveLength(1);
    });

    it('Respond to click with store action', () => {
      const mounted = mount(
        <Provider {...{ store }}>
          <SocialItemView {...emptyProps} />
        </Provider>
      );
      store.dispatch({
        type: ACTION_TYPES.IS_MENU_OPEN,
        state: ACTION_STATES.SUCCESS,
        payload: true,
      });
      let isMenuOpen = (store.getState() as RootState).app.openMenu;
      // expect(isMenuOpen).toEqual(true);

      mounted.find('a').simulate('click');
      isMenuOpen = (store.getState() as RootState).app.openMenu;
      expect(isMenuOpen).toBe(false);
    });
  });
});
