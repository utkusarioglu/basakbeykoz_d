import React from 'react';
import { shallow } from 'enzyme';
import AppLayout from './App.layout';

describe('Components', () => {
  describe('App', () => {
    it('runs without crashing', () => {
      shallow(
        <AppLayout
          {...{
            refs: { body: undefined },
          }}
        />
      );
    });
  });
});
