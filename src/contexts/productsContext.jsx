import { createContext, useState } from "react";
import PRODUCTS from "../../src/shopData.json";

export const ProductsContext = createContext({
  products: [],
});

export const ProductsContextProvider = ({ children }) => {
  const [products, setProducts] = useState(PRODUCTS);
  const value = {
    products,
  };
  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
