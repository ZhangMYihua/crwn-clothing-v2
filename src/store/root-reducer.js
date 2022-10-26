import { combineReducers } from 'redux';
import { categoriesReducer } from './categories/category.reducer';
import { userReducer } from './user/user.reducer';

// this is the unique reducer for the store
export const rootReducer = combineReducers({
  user: userReducer, // userReducer returns the state of the reducer
  category: categoriesReducer, // cartReducer returns the state of the reducer
});
