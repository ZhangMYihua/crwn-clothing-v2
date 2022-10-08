import { createContext,useEffect,useState} from "react";

import {getCategoriesAndDocuments} from "../utils/firebase/firebase.utils";
// import SHOP_DATA from "../shop-data";

export const CategoriesContext = createContext({
categoriesMap: {},

});



export const CategoriesProvider =({children}) =>{

    useEffect(()=>{
        const getCategoriesMap = async()=>{
            const categoriesMap = await getCategoriesAndDocuments();
            console.log(categoriesMap);
            setCategoriesMap(categoriesMap);
        }
        getCategoriesMap();
    },[])
    // useEffect( ()=>{
    //     addCollectionAndDocuments("categories",SHOP_DATA);
    // } , []);


    const [categoriesMap,setCategoriesMap] = useState({});
    const value = {categoriesMap};
    // useEffect(()=>{
    //     setProducts(shopData);
    // },[])

    return <CategoriesContext.Provider value = {value}>{children}</CategoriesContext.Provider>
}


