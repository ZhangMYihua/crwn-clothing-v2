//middlewares are three functions that return from one another
//currying a function is essentially a function that returns back another function

import { Middleware } from "redux";
import { RootState } from "../store";

export const loggerMiddleware: Middleware<{}, RootState> =
  (store) => (next) => (action) => {
    if (!action.type) {
      return next(action);
    }

    console.log("type", action.type);
    console.log("payload", action.payload);
    console.log("currentState", store.getState());

    next(action);

    console.log("next state", store.getState());
  };
