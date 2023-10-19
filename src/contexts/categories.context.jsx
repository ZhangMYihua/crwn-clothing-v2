import { getCategoriesAndDocuments } from "../utils/firebase/firebase.utils.js";
import { createContext, useState, useEffect} from "react";

// import SHOP_DATA from '../shop-data.js';

export const CategoriesContext = createContext({
    categoriesMap: {},

});

export const CategoriesProvider = ({children}) => {
    const[categoriesMap, setCategoriesMap] = useState({});
    // useEffect(() => {
    //     addCollectionAndDocuments('categories', SHOP_DATA)
    // },[]);

    useEffect (() => {
        const getCategoriesMap = async () => {
            const categoryMap = await getCategoriesAndDocuments();
            console.log(categoryMap);
            setCategoriesMap(categoryMap)
        }
            getCategoriesMap();
        },[])
    const value = {categoriesMap};
    return (
        <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>
    )
}