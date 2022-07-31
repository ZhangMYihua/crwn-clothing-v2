import './Shop.scss'
import { useContext } from 'react'
import { ProductsContext } from '../../context/ProductsContext'
import ProductCard from '../../components/ProductCard/ProductCard'
import { ReactComponent as CrownLogo } from '../../assets/crown-logo.svg';

const Shop = () => {
    const { products } = useContext(ProductsContext)

    return (
        <div className='shop-container'>
            <h2>
                WELCOME TO <CrownLogo /> SHOPPING
            </h2>
            <div className='products-container'>
                {products.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    )
}

export default Shop