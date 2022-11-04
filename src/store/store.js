import { compose, createStore, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import logger from "redux-logger";
import thunk from "redux-thunk";
import { rootReducer } from "./root-reducer";

const middleWares = [
  process.env.NODE_ENV !== "production" && logger,
  thunk
].filter(Boolean);

const composeEnhancer =
  (process.env.NODE_ENV !== "production" &&
    window &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"] //primary benefit
};

// //all thunks really do is allow actions to be passed as functions
// //with thunks, we need to look at where in our application we have async behaviour that can
// // move into an action-driven flow
// const thunkMiddleware = (store) => (next) => (action) => {
//   //instead of dispatching a tpyical action with a type and a payload, we dispatch an action with a function
//   if (typeof action === "function") {
//     action(dispatch);
//   }
// };

const persistedReducer = persistReducer(persistConfig, rootReducer);

const composedEnhancers = composeEnhancer(applyMiddleware(...middleWares));

//by default the store is going to use the persisted reducer which gets saved to local storage
export const store = createStore(
  persistedReducer,
  undefined,
  composedEnhancers
);

export const persistor = persistStore(store);
