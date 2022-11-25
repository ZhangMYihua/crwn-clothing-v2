import { compose, createStore, applyMiddleware} from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import logger from "redux-logger";
import createSagaMiddleware from "@redux-saga/core";
//=======================================================================

import { rootReducer } from "./root-reducer";
import { rootSaga } from "./root-saga";
//=======================================================================

const persistConfig = {
    key: "root",
    storage,
    blacklist: ["user"],
    whitelist: ["cart"],
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const sagaMiddleware = createSagaMiddleware()

const middleWares = [ process.env.NODE_ENV !== "production" && logger, sagaMiddleware].filter(Boolean);

const composeEnhancer = (
    process.env.NODE_ENV !== "production" && window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
) || compose

const composeEnhancers = composeEnhancer(applyMiddleware(...middleWares));

export const store = createStore(persistedReducer, undefined, composeEnhancers);
sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);
