import { useState, createContext } from "react";
import Products from "../shop-data.json"


export const ProductCOntext=createContext({
    products:[],
});


const ProductProvider=({children})=>{
    const [products,setProducts]=useState(Products);
    const value={products};

    return(
        <ProductCOntext.Provider value={value}>{children}</ProductCOntext.Provider>
    );
};
export{ProductProvider}