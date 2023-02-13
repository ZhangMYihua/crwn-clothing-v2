import { compose, legacy_createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { rootReducer } from './root-reducer';

//logger allows us to see what an action looks like before it is dispatched, what the action is, and then how the state looks after the action.

// but first we need to create middlewares. They are like 'library helpers' that run before an action hits the reducer. So whenever you dispatch an action, the action hits the middleware before the reducer.
// middlewares enhance our store. They catch actions before they hit our reducers and they log out the state.
const middleWares = [logger];

const composedEnhancers = compose(applyMiddleware(...middleWares));
// compose is a functional programming concept. It lets us pass multiple functions right to left.

// stores facilitate the movement and passing of actions through these reducers. All the store really needs is the rootReducer
export const store = legacy_createStore(
  rootReducer,
  undefined,
  composedEnhancers
);
