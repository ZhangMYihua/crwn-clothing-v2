import { createContext, useState, useEffect } from "react";

import CartDropdown from "../components/cart-dropdown/cart-dropdown.component";

export const ShoppingCartContext = createContext({
    setItem: () => null,
    Items: null,
});

export const ShoppingCartProvider = ({ children }) => {
    const [Items, setItem] = useState(null); 
   const value = {Items, setItem}

   useEffect(() => {
     const toggle = CartDropdown((Items) => {
        if(Items) {
            
        }
     })
   })
   return (
        <ShoppingCartProvider.Provider value={value}> {children} </ShoppingCartProvider.Provider>
   )
}