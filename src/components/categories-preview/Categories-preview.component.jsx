
import {Fragment} from "react";


import CategoryPreview from "../category-preview/Catergory-preview.component";
import { useSelector } from "react-redux";
import { selectCategoriesMap } from "../../store/categories/category.selector";
import { selectCategoriesIsLoading } from "../../store/categories/category.selector";  
import Spinner from '../spinner/spinner.component'



const CategoriesPreview = ()=>{
    // debugger
    // const {categoriesMap} = useContext(CategoriesContext);
    const  categoriesMap = useSelector(selectCategoriesMap);
    const isLoading = useSelector(selectCategoriesIsLoading);
    // console.log(categoriesMap)
    return(
        
        <Fragment>
            { isLoading ? (<Spinner/>):
                (Object.keys(categoriesMap).map(title =>{
                   
                    const products = categoriesMap[title];
                
                    return <CategoryPreview key={title} title={title} products={products}/>
                    
                }))
            }
        </Fragment>


    )

}

export default CategoriesPreview;