import { combineReducers } from "redux";
import { categoriesReducer } from "./categories/categories.reducer";
import { userReducer } from "./user/user.reducer";
// creates a final big reducer by combining smaller reducers

export const rootReducer = combineReducers({
  user: userReducer,
  categories: categoriesReducer,
});
