import { useContext } from "react";
import { Outlet } from "react-router-dom";
import { ProductsContext } from "../../../context/products.context";
import ProductCard from "../../product-card/product-card.component";
import "./shop.scss";
const Shop = () => {
  const { products } = useContext(ProductsContext);
  return (
    <>
      <Outlet />
      <div className="products-container">
        {products.map((product) => {
          return <ProductCard product={product} key={product.id} />;
        })}
      </div>
    </>
  );
};

export default Shop;
