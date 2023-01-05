import { useContext } from "react";
import { CategoriesContext } from "../../contexts/categories.context";
import ProductCard from "../../components/product-card/product-card.component";
import "./shop.styles.scss";

const Shop = () => {
  const {} = useContext(CategoriesContext);
  return (
    <div className="products-container">
      {/* {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))} */}
    </div>
  );
};

export default Shop;
