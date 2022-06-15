import { combineReducers } from "redux";
import { userReducer } from "./user/user.reducer";
// creates a final big reducer by combining smaller reducers

export const rootReducer = combineReducers({
  user: userReducer,
});
