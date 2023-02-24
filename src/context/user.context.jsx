import { createContext , useState , useEffect} from "react";
import { onAuthStateChangedListener ,createUserDocumentFromAuth } from "../utils/firebase/firebase.utils";

//actual or the default value
export const UserContext = createContext({
    currentUser : null,
    setCurrentUser : () => null
});

export const UserProvider = ({children}) =>{
    const [currentUser,setCurrentUser] = useState(null);
    const value = {currentUser , setCurrentUser};
    //signOutUser();

    useEffect(()=>{
        const unsubscribe = onAuthStateChangedListener((user)=>{ 
            if(user){
                    createUserDocumentFromAuth(user);
            }
            setCurrentUser(user);
            console.log(user);
        });

        return unsubscribe;
    },[]);
    return <UserContext.Provider value = {value} > {children} </UserContext.Provider>
}