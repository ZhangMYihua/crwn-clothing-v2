import { compose, createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

// Root Reducer
import { rootReducer } from "./root-reducer";

// const loggerMiddleware = (store) => (next) => (action) => {
//     if(!action.type){
//         return next(action);
//     }

//     console.log('type:' , action.type);
//     console.log('payload: ' , action.payload);
//     console.log('currentState: ' , store.getState() );

//     next(action);

//     console.log('next state: ' , store.getState());

// }

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["user"],
};

const perisitedReducer = persistReducer(persistConfig, rootReducer);

// const middleWares = [logger];

// Will only work in development mode
const middleWares = [process.env.NODE_ENV === "development" && logger].filter(
  Boolean
);

// IF IN DEVELOPMENT MODE USE COMPOSE OF REDEX DEVTOOLS EXTENSION OF CHROME , IF NOT USE NORMAL REDUX COMPOSE
const composedEnhancer =
  (process.env.NODE_ENV === "development" &&
    window &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const composedEnhancers = composedEnhancer(applyMiddleware(...middleWares));

export const store = createStore(
  perisitedReducer,
  undefined,
  composedEnhancers
);

export const persistor = persistStore(store);
