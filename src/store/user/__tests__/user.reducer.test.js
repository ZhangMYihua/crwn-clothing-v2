import { userReducer, INITIAL_STATE } from '../user.reducer';

import {
  signInFailed,
  signUpFailed,
  signOutFailed,
  signOutSuccess,
  signInSuccess,
} from '../user.action';

describe('User Reducer action tests', () => {
  test('signInSuccess should update currentUser', () => {
    const mockUser = {
      id: 1,
      email: 'test',
    };

    const expectedState = {
      ...INITIAL_STATE,
      currentUser: mockUser,
    };

    expect(userReducer(INITIAL_STATE, signInSuccess(mockUser))).toEqual(
      expectedState
    );
  });

  test('signOutSuccess should set currentUser to null', () => {
    const expectedState = {
      ...INITIAL_STATE,
      currentUser: null,
    };

    expect(userReducer(INITIAL_STATE, signOutSuccess())).toEqual(expectedState);
  });

  test('signOutFailed should set an error', () => {
    const mockError = new Error('Error signing out');

    const expectedState = {
      ...INITIAL_STATE,
      error: mockError,
    };

    expect(userReducer(INITIAL_STATE, signOutFailed(mockError))).toEqual(
      expectedState
    );
  });

  test('signUpFailed should set an error', () => {
    const mockError = new Error('Error signing in');

    const expectedState = {
      ...INITIAL_STATE,
      error: mockError,
    };

    expect(userReducer(INITIAL_STATE, signUpFailed(mockError))).toEqual(
      expectedState
    );
  });

  test('signInFailed should set an error', () => {
    const mockError = new Error('Error signing in');

    const expectedState = {
      ...INITIAL_STATE,
      error: mockError,
    };

    expect(userReducer(INITIAL_STATE, signInFailed(mockError))).toEqual(
      expectedState
    );
  });
});
