import React from 'react';
import { shallow } from 'enzyme';
import AppView from './App.view';

describe('Components', () => {
  describe('App', () => {
    it('runs without crashing', () => {
      shallow(
        <AppView
          {...{
            refs: { body: undefined },
          }}
        />
      );
    });
  });
});
