import { createContext, useState, useEffect, useReducer } from "react"
// think of useContext as a glorified storage component that is leveraging useState. We are exposing the value and setter function of this context externally.
import { onAuthStateChangedListener, createUserDocumentFromAuth } from "../utils/firebase/firebase";



// the actual storage/value you want to access
export const UserContext = createContext({
  // these are default values
  currentUser: null, 
  setCurrentUser: () => null
})

// ACTIONS FOR USER REDUCER
export const USER_ACTION_TYPES = {
  "SET_CURRENT_USER": "SET_CURRENT_USER"
}


const userReducer = (state, action) => {
  const {type, payload} = action;
  switch(type) {
    case USER_ACTION_TYPES.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: payload
      }
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
  // const [currentUser, setCurrentUser] = useState(null);
  // useReducer takes two args, a reducer and the initial value for the state
  // the dispatch function receives an action object as a parameter, and then passes it into userReducer
  const [ state, dispatch ] = useReducer(userReducer, INITIAL_STATE)

  const { currentUser } = state;
  const setCurrentUser = (user) => {
    dispatch({ 
      type: USER_ACTION_TYPES.SET_CURRENT_USER,
      payload: user
    })
  }

  const value = {currentUser, setCurrentUser}
  
  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
        if(user) {createUserDocumentFromAuth(user)}
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