import { createContext, useState, useEffect, useReducer } from "react";

import { onAuthStateChangedListener, createUserDocumentFromAuth } from "../utils/firebase/firebase.utils"; 

// as the actual value you want to access
export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: ()=>null,
})

const INITIAL_STATE = {
    currentUser: null
}

export const USER_ACTION_TYPES = {
    SET_CURRENT_USER: 'SET_CURRENT_USER',
}

// useeReducer way of handling useState
const userReducer = (state, action) => {
    /* state is useful to when you what to keep track of incrementing 
    something or need to use it for someother reason or if you want to
    keep previous values in state using ...state
    */
    const {type,payload} = action;
    switch(type) {
        case USER_ACTION_TYPES.SET_CURRENT_USER:
            return {
                ...state,
                currentUser: payload
            }
        default:
            throw new Error(`Unhandled Type ${type} in userReducer`);
    }
}

export const UserProvider = ({ children }) => {
    //useState way of handling context
    // const [currentUser, setCurrentUser] = useState(null); 
    // const value = {currentUser, setCurrentUser};

    //useReducer way of handling context
    const [state, dispatch] = useReducer(userReducer,INITIAL_STATE)
    const { currentUser } = state
    const setCurrentUser = (user) => {
        dispatch({type: USER_ACTION_TYPES.SET_CURRENT_USER, payload: user})
    }
    const value = {currentUser, setCurrentUser}

    useEffect(() => {
        const unsubscribe = onAuthStateChangedListener((user)=>{
            if (user){
                createUserDocumentFromAuth(user);
            }
            setCurrentUser(user);
        })
        return unsubscribe
    }, []);

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}