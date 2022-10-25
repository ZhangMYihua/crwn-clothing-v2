import { USER_ACTION_TYPES } from './user.types';

// INITIAL STATE VAR
const INITIAL_STATE = {
  currentUser: null,
};

// pass initial state as default param for state
export const userReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case USER_ACTION_TYPES.SET_CURRENT_USER:
      return {
        // always return an object that spreads the previous state and updates only the relevant value
        ...state,
        currentUser: payload,
      };
    // if action doesn't apply to this reducer, simply return the same state, no update
    default:
      return state;
  }
};
