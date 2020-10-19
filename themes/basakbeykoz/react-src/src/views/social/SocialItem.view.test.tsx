import React from 'react';
import { shallow, mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import SocialItem from './SocialItem.component';
import { Store } from 'redux';

let store: Store;
beforeEach(() => {
  store = configureStore()({});
});

describe('Components', () => {
  describe('SocialItem', () => {
    it('runs without crashing', () => {
      shallow(
        <SocialItem
          {...{
            store,
            item: { icon: '', title: '', link: '' },
          }}
        />
      );
    });

    it('can set props', () => {
      const title = Math.random().toString();
      const link = Math.random().toString();
      const icon = Math.random().toString();

      const wrapper = mount(
        <SocialItem
          {...{
            store,
            item: {
              title,
              link,
              icon,
            },
          }}
        />
      );
      expect(wrapper.prop('item').title).toBe(title);
      expect(wrapper.prop('item').link).toBe(link);
      expect(wrapper.prop('item').icon).toBe(icon);
    });
  });
});
