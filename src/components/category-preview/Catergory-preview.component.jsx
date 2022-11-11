import {CategoryPreviewContainer,Preview,Title} from "./catergory-preview.styles.jsx";
import ProductCard from "../product-card/ProductCard.component";
import { Link } from "react-router-dom";
const CategoryPreview = ({title,products})=>{
// console.log(title)
    return(

        <CategoryPreviewContainer key={title}>
            <Title><Link to={title}>{title.toUpperCase()}</Link></Title>
            <Preview>
                {products
                .filter((_,idx)=> idx<4)
                .map( (product) =>
                        <ProductCard key ={product.id} product = {product} />
                
                )}
            </Preview>
        </CategoryPreviewContainer>
            
        
    )

}
export default CategoryPreview;