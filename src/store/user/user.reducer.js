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
    // actions pass to every reducer. If an action doesn't apply to this reducer, simply return the previous state, no update. The action may apply to another reducer.
    default:
      return state;
  }
};
