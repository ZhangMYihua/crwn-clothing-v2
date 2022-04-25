import { useContext } from "react";
import { ProductsContext } from "../../contexts/ProductsContext";
import ProductCard from "../product-card/ProductCard";
import './shop.scss';

const Shop = () => {
    const { products } = useContext(ProductsContext);
	return (
		<div className="product-container">
			{products.map(product => (
				<ProductCard key={product.id} product={product} />
			))}
		</div>
	);
};

export default Shop;
