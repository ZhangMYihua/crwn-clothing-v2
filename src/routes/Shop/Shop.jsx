import { Outlet } from 'react-router-dom';
import './Shop.scss';
import SHOP_DATA from '../../shop-data.json';
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
			<Outlet />
		</div>
	);
};

export default Shop;
