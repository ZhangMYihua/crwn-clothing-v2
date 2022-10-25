import { createContext, useEffect, useReducer } from "react"
// think of useContext as a glorified storage component that is leveraging useState. We are exposing the value and setter function of this context externally.
import { onAuthStateChangedListener, createUserDocumentFromAuth } from "../utils/firebase/firebase";
import { createAction } from "../utils/reducer/reducer.utils";

// the actual storage/value you want to access
export const UserContext = createContext({
  // these are default values
  currentUser: null, 
  setCurrentUser: () => null
})

// ACTIONS FOR USER REDUCER - reduces human error
export const USER_ACTION_TYPES = {
  SET_CURRENT_USER: "SET_CURRENT_USER"
}

// USING REDUCERS (NOT STATE) TO STORE VALUES OF CONTEXT
const userReducer = (state, action) => {
  const {type, payload} = action;
  switch(type) {
    case USER_ACTION_TYPES.SET_CURRENT_USER:
      return { // always return an object that spreads the previous state and updates only the relevant value
        ...state,
        currentUser: payload
      }
      // need this default for the reducer to know there's some kind of error we didn't expect
    default: 
      throw new Error(`Unhandled type ${type} in userReducer`)
  }
}

// INITIAL STATE VAR
const INITIAL_STATE = {
  currentUser: null
}

// this is the component we'll use in our app that will allow any of its children to access the values of its useState 
export const UserProvider = ({children}) => {
  // useReducer takes two args, a reducer and the initial value for the state
  // the dispatch function receives an action object as a parameter, and then passes it into userReducer. Dispatch invokes userReducer
  const [ state, dispatch ] = useReducer(userReducer, INITIAL_STATE)

  const { currentUser } = state;

  // defining setCurrentUser function since no longer given by useState
  const setCurrentUser = (user) => {
    // using createAction func here to generate actions for dispatch func
    dispatch(createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user))
    // dispatch({ 
    //   type: USER_ACTION_TYPES.SET_CURRENT_USER,
    //   payload: user
    // })
  }

  const value = {currentUser, setCurrentUser}
  
  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
        if(user) {
          createUserDocumentFromAuth(user)
        }
        setCurrentUser(user)
      }
    )
    return unsubscribe;
  }, [])

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  )
}

/**
 * reducers are functions that return objects
 * const userReducer = (state, action) => {
 *  return {
 *    currentUser: {...}
 *  }
 * }
 */