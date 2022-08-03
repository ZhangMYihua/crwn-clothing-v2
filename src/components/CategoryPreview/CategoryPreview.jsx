import './CategoryPreview.scss'
import ProductCard from '../ProductCard/ProductCard'
import { Link } from 'react-router-dom'

const CategoryPreview = ({ title, products }) => {


    return (
        <div className='category-preview-container'>
            <h2>
                <Link className='category-preview-title' to={title} >
                    {title.toUpperCase()}
                </Link>
            </h2>
            <div className="category-preview">
                {
                    products
                        .filter((_, index) => index < 4)
                        .map((product) => (
                            <ProductCard key={product.title} product={product} />
                        ))
                }
            </div>
        </div>
    )
}

export default CategoryPreview