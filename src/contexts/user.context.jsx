import { createContext, useReducer } from "react";
import { useEffect } from "react";
import { createUserDocumentFromAuth, onAuthStateChangedLisstener } from "../utils/firebase/FireBase.utils";
import { createAction } from "../utils/reducer/reducer.utils";
export const UserContext=createContext({
    currentUser: null,
    setCurrentUser:()=>null
});
export const USER_ACTION_TYPES={
    SET_CURREN_USER:'SET_CURRENT_USER'
}
const userReducer=(state,action)=>{
    const {type,payload}=action;
    console.log(state,action);
    switch(type){
        case USER_ACTION_TYPES.SET_CURREN_USER:
            return {
                ...state,
                currentUser:payload,
            };
        default:
            throw new Error(`Unhandled type ${type}in userReducer`)
    }
}
const INITIAL_STATE={
    currentUser:null,
}

const UserProvider=({children})=>{
    const [{currentUser},dispatch]=useReducer(userReducer,INITIAL_STATE);

    const setCurrentUser=(user)=>{
        dispatch(createAction(USER_ACTION_TYPES.SET_CURREN_USER,user))
    }
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