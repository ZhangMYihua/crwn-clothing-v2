// import { compose, createStore, applyMiddleware } from "redux";
// import logger from "redux-logger";

// import { rootReducers } from "./root-reducer";

// // using Logger
// const middleWares = [logger];

// const composedEnhancers = compose(applyMiddleware(...middleWares));

// // Root-Reducer

// export const store = createStore(rootReducers, undefined, composedEnhancers);

// **********************************************

import { compose, createStore, applyMiddleware } from "redux";
// import logger from 'redux-logger';

import { rootReducer } from "./root-reducer";

const loggerMiddleware = (store) => (next) => (action) => {
  if (!action.type) {
    return next(action);
  }

  console.log("type: ", action.type);
  console.log("payload: ", action.payload);
  console.log("currentState: ", store.getState());

  next(action);

  console.log("next state: ", store.getState());
};

const middleWares = [loggerMiddleware];

const composedEnhancers = compose(applyMiddleware(...middleWares));

export const store = createStore(rootReducer, undefined, composedEnhancers);
