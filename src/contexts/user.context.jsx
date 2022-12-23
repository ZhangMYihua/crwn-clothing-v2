// import { signOut } from "firebase/auth";
import { createContext, useState, useEffect } from "react";

import {
  onAuthStateChangedListener,
  createUserDocumentFromAuth,
} from "../utils/firebase/firebase.utils";

// as the actual value you want to access
export const UserContext = createContext({
  setCurrentUser: () => null,
  currentUser: null,
});

// the actual component
export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser };

  // the moment the above mounts, it automatically signs us out

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      setCurrentUser(user);
    });

    return unsubscribe;
  }, []);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
