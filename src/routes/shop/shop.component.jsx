import { useContext } from 'react';

import ProductCard from '../../components/product-card/';

import { ProductsContext } from '../../contexts/products.context';

import './shop.styles.scss';

export const Shop = () => {
  const { products } = useContext(ProductsContext);

  return (
    <div className="products-container">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};
