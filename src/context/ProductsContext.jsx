import { createContext, useState } from "react";
import { ShopData } from "../Database/ShopData";

export const ProductsContext = createContext({
    products: [],
    // setProducts: () => { },
});

export const ProductsProvider = ({ children }) => {
    const [products, setProducts] = useState(ShopData);
    const value = { products, setProducts };

    return (
        <ProductsContext.Provider value={value}>
            {children}
        </ProductsContext.Provider>
    )

}