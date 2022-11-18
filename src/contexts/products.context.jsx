import { createContext, useState, useEffect } from "react";
import SHOP_DATA from '../shop-data.json';

export const ProductsContext = createContext({
    products: [],
    setProducts: ()=>[],
})

export const ProductProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
    const value = {products};

    useEffect(() => {
        setProducts(SHOP_DATA)
    }, []);

    return <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>
}