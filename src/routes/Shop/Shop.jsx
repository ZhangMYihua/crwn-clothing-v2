import { Outlet } from 'react-router-dom';
import './Shop.scss';
import SHOP_DATA from '../../shop-data.json';
import { useContext } from 'react';
import { ProductsContext } from '../../contexts/product.context';
const Shop = () => {
	const { products } = useContext(ProductsContext);
	console.log({ products });
	return (
		<>
			<div>Shop boy </div>
			{products.map((product) => {
				return (
					<div key={product.id}>
						<h1>{product.name}</h1>
					</div>
				);
			})}
			<Outlet />
		</>
	);
};

export default Shop;
