import { compose, createStore, applyMiddleware, Middleware } from "redux";
import { persistStore, persistReducer, PersistConfig } from "redux-persist";
import logger from "redux-logger";
import storage from "redux-persist/lib/storage";

import createSagaMiddleware from "@redux-saga/core";
import { rootSaga } from "./root-saga";
import { rootReducer } from "./root-reducer";

export type RootState = ReturnType<typeof rootReducer>;

const sagaMiddleware = createSagaMiddleware();

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

type ExtendedPersistConfig = PersistConfig<RootState> & {
  whitelist: (keyof RootState)[];
};

const middleWares = [
  process.env.NODE_ENV !== "production" && logger,
  sagaMiddleware
].filter((middleWare): middleWare is Middleware => Boolean(middleWare));

const composeEnhancer =
  (process.env.NODE_ENV !== "production" &&
    window &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const persistConfig:ExtendedPersistConfig = {
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

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);
