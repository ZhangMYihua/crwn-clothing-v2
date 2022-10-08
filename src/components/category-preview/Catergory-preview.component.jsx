import "./catergory-preview.styles.scss";
import ProductCard from "../product-card/ProductCard.component";
import { Link } from "react-router-dom";
const CategoryPreview = ({title,products})=>{
// console.log(title)
    return(

        <div className="category-preview-container" key={title}>
            <h2 className="title"><Link to={title}>{title.toUpperCase()}</Link></h2>
            <div className = "preview">
                {products
                .filter((_,idx)=> idx<4)
                .map( (product) =>
                        <ProductCard key ={product.id} product = {product} />
                
                )}
            </div>
        </div>
            
        
    )

}
export default CategoryPreview;