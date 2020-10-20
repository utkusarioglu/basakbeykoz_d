import { Chance } from 'chance';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { FSA } from '../../store/@types-actions';
import { ACTION_STATES, ACTION_TYPES } from '../../common/actionConstants';
import { ERROR_CODES } from '../../store/@types-store';
import {
  IApp,
  IsDisplaying,
  IsFetching,
  IsMenuOpen,
  ISetRef,
} from './@types-app';
import { setFetching, setDisplaying, setRef } from './appActions';
import appReducer, { appInitialState } from './appReducer';
import { mockExhaustiveSetRef, mockIsDisplaying } from './mock/mockFunctions';

const chance = Chance();
const mockStore = configureStore<IApp>([thunk])(appInitialState);
const { dispatch: mockDispatch, getState: mockGetState } = mockStore;

beforeEach(() => {
  mockStore.clearActions();
});

describe('AppReducer', () => {
  describe('isFetching', () => {
    it('success', () => {
      const testPayloads: IsFetching[] = Array.from({ length: 10 }).map(() =>
        chance.bool()
      );
      testPayloads.forEach((testPayload) => {
        const testAction: FSA<IsFetching> = {
          type: ACTION_TYPES.IS_FETCHING,
          state: ACTION_STATES.SUCCESS,
          payload: testPayload,
        };
        appInitialState.isFetching = testPayload;
        setFetching(testPayload)(mockDispatch);
        expect(appReducer(mockGetState(), testAction)).toStrictEqual(
          appInitialState
        );
      });
    });
    it('fail', () => {
      const testAction: FSA<IsFetching> = {
        type: ACTION_TYPES.IS_FETCHING,
        state: ACTION_STATES.FAIL,
        errorCode: ERROR_CODES.APP.FAIL_ACTION_IS_FETCHING,
      };
      expect(appReducer(mockGetState(), testAction)).toStrictEqual(
        appInitialState
      );
    });
  });
  describe('isDisplaying', () => {
    it('success', () => {
      const testPayloads: IsDisplaying[] = Array.from({ length: 10 }).map(
        mockIsDisplaying
      );
      testPayloads.forEach((testPayload) => {
        const testAction: FSA<IsDisplaying> = {
          type: ACTION_TYPES.IS_DISPLAYING,
          state: ACTION_STATES.SUCCESS,
          payload: testPayload,
        };
        appInitialState.isDisplaying = testPayload;
        setDisplaying(testPayload)(mockDispatch);
        expect(appReducer(mockGetState(), testAction)).toStrictEqual(
          appInitialState
        );
      });
    });
    it('fail', () => {
      const testAction: FSA<IsDisplaying> = {
        state: ACTION_STATES.FAIL,
        type: ACTION_TYPES.IS_DISPLAYING,
        errorCode: ERROR_CODES.APP.FAIL_ACTION_IS_DISPLAYING,
      };
      expect(appReducer(mockGetState(), testAction)).toStrictEqual(
        appInitialState
      );
    });
  });
  describe('isMenuOpen', () => {
    it('success', () => {
      const testPayloads: IsMenuOpen[] = Array.from({ length: 10 }).map(() =>
        chance.bool()
      );
      testPayloads.forEach((testPayload) => {
        const testAction: FSA<IsMenuOpen> = {
          type: ACTION_TYPES.IS_MENU_OPEN,
          state: ACTION_STATES.SUCCESS,
          payload: testPayload,
        };
        appInitialState.isMenuOpen = testPayload;
        setFetching(testPayload)(mockDispatch);
        expect(appReducer(mockGetState(), testAction)).toStrictEqual(
          appInitialState
          // {}
        );
      });
    });
    it('fail', () => {
      const testAction: FSA<IsMenuOpen> = {
        type: ACTION_TYPES.IS_MENU_OPEN,
        state: ACTION_STATES.FAIL,
        errorCode: ERROR_CODES.APP.FAIL_ACTION_IS_FETCHING,
      };
      expect(appReducer(mockGetState(), testAction)).toStrictEqual(
        appInitialState
      );
    });
  });
  describe('setRef', () => {
    it('success', () => {
      const testPayloads: ISetRef[] = mockExhaustiveSetRef();
      testPayloads.forEach((testPayload) => {
        const testAction: FSA<ISetRef> = {
          type: ACTION_TYPES.SET_REF,
          state: ACTION_STATES.SUCCESS,
          payload: testPayload,
        };
        appInitialState.refs[testPayload.type] = testPayload;
        setRef(testPayload)(mockDispatch);
        expect(appReducer(mockGetState(), testAction)).toStrictEqual(
          appInitialState
        );
      });
    });
  });
});
