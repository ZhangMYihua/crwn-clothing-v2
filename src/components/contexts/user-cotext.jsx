import { createContext ,useState} from "react";




export const UserContext =createContext(
    {
        curentUser:null,
        setCurentUser:()=>null
    }
)

export const UserProvider=({children})=>{
    const [curentUser,setCurentUser]=useState(null)
    const value={curentUser,setCurentUser}
    return <UserContext.Provider value={value}></UserContext.Provider>
}