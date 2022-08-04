import { createContext, useState, useEffect } from "react";
// import { ShopData } from "../database/ShopData";
// import { addCollectionsAndDocs } from "../utils/firebase/firebase";
import { getCategoriesAndDocs } from "../utils/firebase/firebase";

export const CategoriesContext = createContext({
    categoriesMap: {},
    // setProducts: () => { },
});

export const CategoriesProvider = ({ children }) => {
    const [categoriesMap, setCategoriesMap] = useState({});

    // useEffect(() => {
    //     addCollectionsAndDocs('categories', ShopData)
    // }, [])

    useEffect(() => {
        const getCategoriesMap = async () => {
            const categoryMap = await getCategoriesAndDocs();
            setCategoriesMap(categoryMap)
        }
        getCategoriesMap();
    }, [])

    const value = { categoriesMap };

    return (
        <CategoriesContext.Provider value={value}>
            {children}
        </CategoriesContext.Provider>
    )

}
