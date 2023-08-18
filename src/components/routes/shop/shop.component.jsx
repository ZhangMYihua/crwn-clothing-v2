import { useContext } from "react";
import './shop.styles.scss';
import { ProductsContext } from "../../../contexts/product.context";
import ProductCard from "../../product-card/product-card.component";
const Shop = () => {
    const {products} = useContext(ProductsContext);
  return (
    <div className="products-container">
        {products.map((product) => (
            <ProductCard key={products.id} product={product} />
        ))

        }
    </div>
  )
}

export default Shop;