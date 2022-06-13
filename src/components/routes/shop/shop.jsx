import { useContext } from "react";
import { Outlet } from "react-router-dom";
import { ProductsContext } from "../../../context/products.context";
import ProductCard from "../../product-card/product-card.component";
import "./shop.scss";
const Shop = () => {
  const { products } = useContext(ProductsContext);

  const hats = products[0].items;
  return (
    <>
      <Outlet />
      <div className="products-container">
        {hats.map((hat) => {
          return <ProductCard product={hat} key={hat.id} />;
        })}
      </div>
    </>
  );
};

export default Shop;
