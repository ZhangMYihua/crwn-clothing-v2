import { createContext, useState, useEffect } from "react";
import { onAuthStateChangedListener , signOutUser} from "../utils/firebase/firebase.utils";
import { createUserDocumentFromAuth } from "../utils/firebase/firebase.utils";
//actual value you want to access
export const UserContext = createContext({
    setCurrentUser: () => null,
    currentUser: null,

});

export const UserProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState(null);
    const value = {currentUser, setCurrentUser};

    useEffect(()=> {
        const unsubscribe =  onAuthStateChangedListener((user) => {
          if (user) {
            createUserDocumentFromAuth(user);
          } console.log(user)
        setCurrentUser(user);
        });
        return unsubscribe;
    }, []);

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}

