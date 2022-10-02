import {createContext,useEffect,useState} from 'react';
import { createUserDocumentFromAuth, onAuthStateChangedListener } from '../utils/firebase/firebase.utils';

export const userContext = createContext({
currentUser: null,
setCurrentUser: ()=> null
});

export const UserProvider =  ({children}) => {
    const [currentUser, setCurrentUser] = useState(null);
    const value = {currentUser, setCurrentUser};
    useEffect ( ()=>{
        const unSubscribe = onAuthStateChangedListener((user)=>{
            if(user){
                createUserDocumentFromAuth(user);
            }
            setCurrentUser(user)
            
        })
        
        return unSubscribe
    } ,[])
    return <userContext.Provider value = {value}>{children}</userContext.Provider>

}
