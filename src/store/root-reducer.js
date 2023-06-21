// import { combineReducers } from "redux";
// import { userReducer } from "./user/user.reducer";
// import { categoriesReducer } from "./categories/categories.reducer";
// import { cartReducer } from "./cart/cart.reducer";

// export const rootReducers = combineReducers({
//   user: userReducer,
//   categories: categoriesReducer,
//   cart: cartReducer,
// });

// 888888888888888

import { combineReducers } from "redux";

import { userReducer } from "./user/user.reducer";
import { categoriesReducer } from "./categories/categories.reducer";
import { cartReducer } from "./cart/cart.reducer";

export const rootReducer = combineReducers({
  user: userReducer,
  categories: categoriesReducer,
  cart: cartReducer,
});
