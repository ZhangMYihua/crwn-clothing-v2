import { createContext, useState, useEffect } from "react";
import SHOP_DATA from '../shop-data.js';

import { addCollectionAndDocuments, getCategoriesAndDocuments } from "../utils/firebase/firebase.utils.js";

export const CategoryContext = createContext({
    categoriesMap: {},
})

export const CategoryProvider = ({ children }) => {
    const [categoriesMap, setCategoriesMap] = useState({});
    const value = {categoriesMap};

    useEffect(() => {
        const getCategoriesMap = async () => {
            const categoryMap = await getCategoriesAndDocuments();
            setCategoriesMap(categoryMap)
        }
        getCategoriesMap();
    }, []);

    return <CategoryContext.Provider value={value}>{children}</CategoryContext.Provider>
}