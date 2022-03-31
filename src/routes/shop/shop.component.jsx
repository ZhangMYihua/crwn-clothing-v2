import { useContext } from "react";import { ProductsContext } from "../../contexts/products.context";
import ProductCard from "../../components/product-card/product-card.component";
import "./shop.styles.scss";

const Shop = () => {
  const { products } = useContext(ProductsContext);
  return (
    <div className='products'>
      {products.map((product) => {
        console.log(product.id);
        return <ProductCard key={product.id} product={product} />;
      })}
    </div>
  );
};

export default Shop;
