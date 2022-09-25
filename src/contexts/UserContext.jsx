import { createContext, useState } from "react"
// think of useContext as a glorified storage component that is leveraging useState. We are exposing the value and setter function of this context externally.


// the actual storage/value you want to access
export const UserContext = createContext({
  // these are default values
  currentUser: null, 
  setCurrentUser: () => null
})

// this is the component we'll use in our app that will allow any of its children to access the values of its useState 
export const UserProvider = ({children}) => {
  const [currentUser, setCurrentUser] = useState(null);
  const value = {currentUser, setCurrentUser}
  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  )
}