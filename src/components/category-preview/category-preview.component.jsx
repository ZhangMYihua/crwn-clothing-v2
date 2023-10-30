import { CategoryPreviewContainer, TitleLink, Preview } from './category-preview.styles';
import ProductCard from '../product-card/product-card.component';

const CategoryPreview = ({title, products}) => {
    return(
        <CategoryPreviewContainer>
            <h2>
                <TitleLink to={title}>{title.toUpperCase()}</TitleLink>
            </h2>
            <Preview>
                {
                products.filter((_, index)=> index<4).map((product)=><ProductCard key={products.id} product={product}/>)
                }
            </Preview>
        </CategoryPreviewContainer>
    )
}

export default CategoryPreview;