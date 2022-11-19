import {createContext,useEffect,useReducer} from "react"
import { onAuthStateChangedListener, createUserDocumentFromAuth } from './../utils/firebase/firebase.utils';
import { createAction } from "../utils/reducer/reducer.utils";

export const UserContext = createContext(
    {
    currentUser:null,
    setCurrentUser:()=>null
    }
)

export const USER_ACTION_TYPES = {
    SET_CURRENT_USER : 'SET_CURRENT_USER'
}

const userReducer = (state,action)=>{
    const {type ,payload} = action
    console.log(action,"currentUser action")
    switch(type){
     case USER_ACTION_TYPES.SET_CURRENT_USER:
        return {
            currentUser:payload
        }
        default:
            throw new Error(`unhandled type ${type} in user reducer`)


    }

    
}

const INITIAL_STATE={
    currentUser:null
}


export const UserProvider =({children})=>{
// const [currentUser,setCurrentUser] = useState(null)

const [state,dispatch] = useReducer(userReducer,INITIAL_STATE)
const {currentUser} = state

console.log(currentUser,"currentUser")

const setCurrentUser = (user)=>{
//    dispatch({type:USER_ACTION_TYPES.SET_CURRENT_USER,payload:user})
   dispatch(createAction(USER_ACTION_TYPES.SET_CURRENT_USER,user))
   
}

const value = {currentUser,setCurrentUser}



useEffect(()=>{
    const unsubscribe = onAuthStateChangedListener((user)=>{
       if(user){
        createUserDocumentFromAuth(user)
       }
        setCurrentUser(user)
        console.log(user,"usssssssserr-===---------------------")
    })

   return unsubscribe
},[])

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}



/* 
const useReducers =(state,action)=>{
return{
    currentUser:""
}
}


*/