import { useState,useEffect, createContext } from "react";
import { getCategoriesAndDocuments } from "../utils/firebase/FireBase.utils";

export const CategoriesContext=createContext({
    categoriesMap:[],
});


const CategoriesProvider=({children})=>{
    const [categoriesMap,setcategoriesMap]=useState({});
    const value={categoriesMap};
  useEffect(()=>{
    const getCategoriesMap=async()=>{
        const cat=await getCategoriesAndDocuments();
        setcategoriesMap(cat)
    }
    getCategoriesMap();
  },[])
    return(
        <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>
    );
};
export{CategoriesProvider}