import"./category.styles.scss";
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

        <h2 className="category-title"><span>{category.toUpperCase()}</span></h2>
        <div className="category-container">
            
            {
                products && products.map( product => <ProductCard key={product.id} product = {product}/>)
            }

        </div>
    </Fragment>
)


}

export default Category;