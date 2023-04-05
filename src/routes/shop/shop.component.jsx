import { ProductsContext } from "../../context/products.context";
import { useContext } from "react";
import ProductCard from "../../components/products-card/products-card.component";
import './shop.styles.scss';


const Shop = ()=>{
    const {products} = useContext(ProductsContext);

 return (
   

    <div className="products-container">
        {products.map((product)=>(
       <ProductCard key={product.id} product={product}/>
        ))}
    </div>

 )




}


export default Shop;