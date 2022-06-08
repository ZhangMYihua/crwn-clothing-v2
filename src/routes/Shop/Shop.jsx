import './Shop.scss';
import { useContext } from 'react';
import { ProductsContext } from '../../contexts/product.context';
import ProductCard from '../../components/ProductCard/ProductCard';
const Shop = () => {
	const { products } = useContext(ProductsContext);

	return (
		<div className='products-container'>
			{products.map((product) => {
				return <ProductCard key={product.id} product={product} />;
			})}
		</div>
	);
};

export default Shop;
