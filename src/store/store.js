import { compose, createStore, applyMiddleware } from 'redux';
// import logger from 'redux-logger'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import { rootReducer } from './root-reducer';

// root-reducer

const loggerMiddleware = (store) => (next) => (action) => {
    if (!action.type) {
        return next(action);
    }

    console.log('type', action.type);
    console.log('payload', action.payload);
    console.log('currentState', store.getState());

    next(action);

    console.log('next state', store.getState());
}

const persistConfig = {
    key: 'root',
    storage,
     blacklist: ['user']
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const middlewares = [loggerMiddleware];

const composedEnhancer = compose(applyMiddleware(...middlewares));

export const store = createStore(persistedReducer, undefined,composedEnhancer)

export const persistor = persistStore(store)