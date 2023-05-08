
import ProductCard from '../products-card/products-card.component';
import { Link } from 'react-router-dom';
import './category-preview.styles.scss';

const CategoryPreview = ({title,products}) => {

    return (
        <div className='category-preview-container'>
       
        <h2>
            <Link className='title' to={title}>{title.toUpperCase()}</Link>
        </h2>
      
           
        <div className='preview'>
       {
        products
        .filter((_, indx) => indx < 4)
        .map((product) => (
            <ProductCard key={product.id} product={product}/>
        ))
       } 
        </div>
        </div>


    )


}

export default CategoryPreview;