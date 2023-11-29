import { createContext, useState } from "react";
import { useEffect } from "react";
import { createUserDocumentFromAuth, onAuthStateChangedLisstener } from "../utils/firebase/FireBase.utils";
export const UserContext=createContext({
    currentUser: null,
    setCurrentUser:()=>null
});

const UserProvider=({children})=>{
    const[currentUser,setCurrentUser]=useState(null);
    const value={currentUser,setCurrentUser};

    useEffect(()=>{
       
        const unsubscribe= onAuthStateChangedLisstener((user)=>{
            if(user){
            createUserDocumentFromAuth(user)
            }
            setCurrentUser(user)
        });
        return unsubscribe
    },[]);
    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}
export {UserProvider};