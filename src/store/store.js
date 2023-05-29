import { compose, createStore, applyMiddleware } from "redux";
import logger from "redux-logger";

import { rootReducers } from "./root-reducer";

// using Logger
const middleWares = [logger];

const composedEnhancers = compose(applyMiddleware(...middleWares));

// Root-Reducer

export const store = createStore(rootReducers, undefined, composedEnhancers);
