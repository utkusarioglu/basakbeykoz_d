import { Chance } from 'chance';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { RootState } from '../../../store/rootReducer';
import { IsDisplaying, OpenMenu } from './@types-app';
import { setDisplaying, setFetching, setOpenMenu, setRef } from './appActions';
import { appInitialState } from './appReducer';
import { mockExhaustiveSetRef, mockIsDisplaying } from './mock/mockFunctions';

const chance = Chance();
const mockStore = configureStore<RootState['app']>([thunk])(appInitialState);
const { dispatch: mockDispatch, getActions: mockGetActions } = mockStore;

beforeEach(() => {
  mockStore.clearActions();
});

describe('AppActions', () => {
  it('dispatch isFetching action monkey', () => {
    /* The rationale for using random here is to cover a multitude of boolean sequences that could occur*/
    const testPayloads = Array.from({ length: 10 }).map(() => chance.bool());
    testPayloads.forEach((testPayload, index) => {
      setFetching(testPayload)(mockDispatch);
      expect(mockGetActions()[index].payload).toBe(testPayload);
    });
  });
  it('dispatch isDisplaying action', () => {
    const testPayloads: IsDisplaying[] = Array.from({ length: 10 }).map(
      mockIsDisplaying
    );
    testPayloads.forEach((testPayload, index) => {
      setDisplaying(testPayload)(mockDispatch);
      expect(mockGetActions()[index].payload).toBe(testPayload);
    });
  });
  it('dispatch setIsMenuOpen action', () => {
    const testPayloads: OpenMenu[] = Array.from({ length: 10 }).map(() =>
      chance.bool()
    );
    testPayloads.forEach((testPayload, index) => {
      setOpenMenu(testPayload)(mockDispatch);
      expect(mockGetActions()[index].payload).toBe(testPayload);
    });
  });
  it('dispatch setRef action', () => {
    const testPayloads = mockExhaustiveSetRef();
    testPayloads.forEach((testPayload, index) => {
      setRef(testPayload)(mockDispatch);
      expect(mockGetActions()[index].payload).toBe(testPayload);
    });
  });
});
