import { createContext, useState,useEffect } from "react";

//----------------------used once when initialised to firestore-------------------------------------------------//
//import SHOP_DATA from './../shop-data.js';
//import { addCollectionAndDocuments } from "../utils/firebase/firebase.utils.js";


import { getCategoriesAndDocuments } from "../utils/firebase/firebase.utils.js";

export const CategoriesContext = createContext({
    categoriesMap:{}
});
export const CategoriesProvider = ({children}) =>{
    const [categoriesMap, setCategoriesMap] = useState({});

useEffect(()=>{
    const getCategoriesMap = async()=>{
        const categoryMap = await getCategoriesAndDocuments();
        console.log(categoryMap);
        setCategoriesMap(categoriesMap);
    }
    getCategoriesMap();
}, []); 





//--------------------One time useEffect to upload values , no need to keep setting new values--------------//
    // useEffect(() =>{
    //     addCollectionAndDocuments('catgories', SHOP_DATA)
    // })


    const value ={categoriesMap};
    return(
        <CategoriesContext.Provider value = {value}>{children}</CategoriesContext.Provider>
    )
}