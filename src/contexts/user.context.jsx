import {createContext,useEffect,useReducer} from 'react';
import { createUserDocumentFromAuth, onAuthStateChangedListener } from '../utils/firebase/firebase.utils';
import { createAction } from '../utils/reducer/reducer.utils';
export const userContext = createContext({
currentUser: null,
setCurrentUser: ()=> null
});

export const USER_ACTION_TYPES = {
    SET_CURRENT_USER: 'SET_CURRENT_USER'  
}

const initialState ={
    currentUser : null
}
const userReduc = (state,action) => {
    const {type,payload} = action;
    
    switch(type){
        case USER_ACTION_TYPES.SET_CURRENT_USER:
            return{
                ...state,
                currentUser: payload
            }
        default:
            throw new Error(`un handled type ${type} in userReduc`);

    }
}







export const UserProvider =  ({children}) => {
    // const [currentUser, setCurrentUser] = useState(null);

    const [state,dispatch] = useReducer(userReduc,initialState);
    const {currentUser} = state; 
    
    const setCurrentUser = (user) => 
    dispatch(createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user));

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
