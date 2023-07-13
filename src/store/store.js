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

const middleWares = [logger];

const composedEnhancer = compose(applyMiddleware(...middleWares));

export const store = createStore(perisitedReducer, undefined, composedEnhancer);

export const persistor = persistStore(store);
