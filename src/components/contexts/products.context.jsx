import { createContext, useState } from "react";

import PRODUCTS from '../../shop-data.json';

/*
   For any context, we need both the context value as well as the provider itself
*/
// we are storing an array of products
export const ProductsContext = createContext({
   products: [],

});

export const ProductsProvider = ({children}) => {
   const [products, setProducts] = useState(PRODUCTS);

   const value = {products};

   return (
      <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>
   );

};