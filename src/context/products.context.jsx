import { createContext, useState } from "react";
import SHOP_DATA from "../shopData.json";

export const ProductsContext = createContext({
  products: null,
  setProducts: () => null,
});

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState(SHOP_DATA);

  const value = { products, setProducts };

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
