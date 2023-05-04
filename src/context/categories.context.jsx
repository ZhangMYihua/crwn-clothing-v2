import { createContext, useState, useEffect} from "react";
// import { addCollectionAndDocuments } from "../utils/firebase/firebase.utils";
import {getCategoriesAndDocuments} from "../utils/firebase/firebase.utils";
// import SHOP_DATA from "../shop-data.js"

 export const CategoriesContext = createContext({
    categoriesMap: {},
 });




export  const CategoriesProvider = ({children})=>{

 const [categoriesMap,setCategoriesMap] = useState({});   

//  **************For export to Firebase the collections one time only!**********
// useEffect(()=>{
//    addCollectionAndDocuments("categories",SHOP_DATA);
// },[])

//  **************get Categories and Documents **********
   useEffect(()=>{
      const getCategoryMap = async () => {
         const categoryMap = await getCategoriesAndDocuments();
         console.log(categoryMap);
         setCategoriesMap(categoryMap);
        
      }
      getCategoryMap(); 
   },[])

 const value = {categoriesMap}

return <CategoriesContext.Provider value ={value}>{children}</CategoriesContext.Provider>

}
