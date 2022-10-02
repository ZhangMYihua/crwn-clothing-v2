import { createContext,useEffect,useState} from "react";
import shopData from "../shop-data.json";
export const ProductsContext = createContext({
products: [],

});


export const ProductsProvider =({children}) =>{
    const [products,setProducts] = useState(shopData);
    const value = {products,setProducts};
    // useEffect(()=>{
    //     setProducts(shopData);
    // },[])

    return <ProductsContext.Provider value = {value}>{children}</ProductsContext.Provider>
}





// export const UserProvider =  ({children}) => {
//     const [currentUser, setCurrentUser] = useState(null);
//     const value = {currentUser, setCurrentUser};
//     useEffect ( ()=>{
//         const unSubscribe = onAuthStateChangedListener((user)=>{
//             if(user){
//                 createUserDocumentFromAuth(user);
//             }
//             setCurrentUser(user)
            
//         })
        
//         return unSubscribe
//     } ,[])
//     return <userContext.Provider value = {value}>{children}</userContext.Provider>

