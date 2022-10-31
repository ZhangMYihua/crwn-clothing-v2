import { useContext, Fragment } from "react";
import { CategoriesContext } from "../../context/categories.context";
import ProductCard from "../../components/product-card/product-card.component";
import './shop.styles.scss'

const Shop = () => {
  const { categoriesMap } = useContext(CategoriesContext);
    return ( 
      <Fragment>
        {
          Object.keys(categoriesMap).map((key) => {
            return <Fragment key={key}>
              <h2>{key}</h2>
              <div className="products-container">
                {categoriesMap[key].map((product) => {
                  return <ProductCard key={product.id} product={product} />
                })}
        </div>
            </Fragment>
          })
        }
      </Fragment>
     );
}

export default Shop;