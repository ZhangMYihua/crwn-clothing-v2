import { createContext, useState, useEffect } from "react";
import { onAuthStateChangedListener, createUserDocFromAuth } from "../utils/firebase/firebase";

export const UserContext = createContext({
    user: null,
    setUser: () => { },
});

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const value = { user, setUser };

    useEffect(() => {
        const unsubscribe = onAuthStateChangedListener((currentUser) => {
            if (currentUser) {
                createUserDocFromAuth(currentUser);
            }
            setUser(currentUser)
        });
        return unsubscribe
    }, []);

    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    )
}