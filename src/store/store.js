import{compose,createStore,applyMiddleware} from 'redux';
import logger from 'redux-logger';
import { rootReducer } from './root-reducer';
import {persistStore, persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';

const persistConfig = {
    key: 'root',
    storage,
    whitelist:['cart']
};

const persistedRuducer = persistReducer(persistConfig,rootReducer);

const composeEnhancer = (
    process.env.NODE_ENV !== 'production' 
    && window 
    && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;


const middleWares = [process.env.NODE_ENV!=='production' && logger, thunk].filter(Boolean);

const composedEnhancers = composeEnhancer(applyMiddleware(...middleWares));


export const store = createStore(persistedRuducer,undefined,composedEnhancers);

export const persistor = persistStore(store);