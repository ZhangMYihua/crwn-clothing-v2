import { createContext, useState, useEffect } from "react";
import { getCategoriesAndDocuments } from "../utils/firebase/firebase.utils"

export const CategoriesContext = createContext({
    categoriesMap: {},
});

export const CategoriesProvider = ({children}) => {
    const [categoriesMap, setCategoriesArray] = useState({});
    useEffect(() => {
        const getCategoriesMap = async() => {
          const categoriesMap =  await getCategoriesAndDocuments();
          setCategoriesArray(categoriesMap);
        };
        getCategoriesMap();
    }, [])
    const value = {categoriesMap}
    return (
        <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>
    )
};
