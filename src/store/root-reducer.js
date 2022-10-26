import { combineReducers } from 'redux';
import { userReducer } from './user/user.reducer';

// this is the unique reducer for the store
export const rootReducer = combineReducers({
  user: userReducer,
});
