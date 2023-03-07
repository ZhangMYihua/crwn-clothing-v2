import { createContext, useReducer } from 'react'
import { createAction } from '../utils/firebase/reducer.utils'

import {
  onAuthStateChangedListener,
  createUserDocumentFromAuth,
} from '../utils/firebase/firebase.utils'

export const UserContext = createContext({
  setCurrentUser: () => null,
  currentUser: null,
})
// --------------------
// thats is a case for reducers
const USER_ACTIONS_TYPES = {
  SET_CURRENT_USER: 'SET_CURRENT_USER',
}
// thats is reducer
const userReducer = (state, action) => {
  const { type, payload } = action

  switch (type) {
    case USER_ACTIONS_TYPES.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: payload,
      }
    default:
      throw `Eroor is in a ${type} place`
  }
}
// nacaljnoje znacenije dlaj reducera
const INITIAL_STATE = {
  currentUser: null,
}

export const UserProvider = ({ children }) => {
  // switching on a reducer
  // const [currentUser, setCurrentUser] = useState(null);
  const [{ currentUser }, dispatch] = useReducer(userReducer, INITIAL_STATE)
  const setCurrentUser = (user) => {
    dispatch(USER_ACTIONS_TYPES.SET_CURRENT_USER, user)
  }
  // ---------------

  const value = { currentUser, setCurrentUser }

  // useEffect(() => {
  //   const unsubscribe = onAuthStateChangedListener((user) => {
  //     if (user) {
  //       createUserDocumentFromAuth(user)
  //     }
  //     setCurrentUser(user)
  //   })

  //   return unsubscribec
  // }, [])

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}
