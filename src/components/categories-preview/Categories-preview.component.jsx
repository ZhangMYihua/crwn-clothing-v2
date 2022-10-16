
import {Fragment} from "react";


import CategoryPreview from "../category-preview/Catergory-preview.component";
import { useSelector } from "react-redux";
import { selectCategoriesMap } from "../../store/categories/category.selector";
  




const CategoriesPreview = ()=>{
    // debugger
    // const {categoriesMap} = useContext(CategoriesContext);
    const  categoriesMap = useSelector(selectCategoriesMap)
    
    // console.log(categoriesMap)
    return(
        
        <Fragment>
            {
                Object.keys(categoriesMap).map(title =>{
                   
                    const products = categoriesMap[title];
                
                    return <CategoryPreview key={title} title={title} products={products}/>
                    
                })
            }
        </Fragment>


    )

}

export default CategoriesPreview;