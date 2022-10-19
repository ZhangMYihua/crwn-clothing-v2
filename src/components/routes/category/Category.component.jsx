import {CategoryContainer,Title} from"./category.styles.jsx";
import {useParams} from "react-router-dom";
import {useEffect,useState,Fragment} from "react"
// import { CategoriesContext } from "../../../contexts/categories.context";
import { useSelector } from "react-redux";
// import { SelectCategoriesIsLoading } from "../../../store/categories/category.selector.js";
import ProductCard from "../../product-card/ProductCard.component";
import { selectCategoriesMap,selectCategoriesIsLoading } from "../../../store/categories/category.selector.js";
import Spinner from "../../spinner/spinner.component.jsx";

const Category = ()=>{
const{category} = useParams();
// const{categoriesMap}=useContext(CategoriesContext);
const categoriesMap = useSelector(selectCategoriesMap)
const isLoading = useSelector(selectCategoriesIsLoading)
const[products,setProducts]=useState(categoriesMap[category])
useEffect(()=>{
    setProducts(categoriesMap[category])
}, [category,categoriesMap])

return(
    <Fragment>
        
        <Title><span>{category.toUpperCase()}</span></Title>
        { isLoading ? (<Spinner/>) :
        (<CategoryContainer>
            
            {
                products && products.map( product => 
                <ProductCard key={product.id} product = {product}/>)
            }

        </CategoryContainer>)}

    </Fragment>
)


}

export default Category;