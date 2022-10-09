import {CategoryContainer,Title} from"./category.styles.jsx";
import {useParams} from "react-router-dom";
import {useContext,useEffect,useState,Fragment} from "react"
import { CategoriesContext } from "../../../contexts/categories.context";
import ProductCard from "../../product-card/ProductCard.component";

const Category = ()=>{
const{category} = useParams();
const{categoriesMap}=useContext(CategoriesContext);
const[products,setProducts]=useState(categoriesMap[category])
useEffect(()=>{
    setProducts(categoriesMap[category])
}, [category,categoriesMap])

return(
    <Fragment>

        <Title><span>{category.toUpperCase()}</span></Title>
        <CategoryContainer>
            
            {
                products && products.map( product => <ProductCard key={product.id} product = {product}/>)
            }

        </CategoryContainer>
    </Fragment>
)


}

export default Category;