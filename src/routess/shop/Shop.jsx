import {React, useContext,useState} from 'react'
import { ProductCOntext } from '../../contexts/productContext'
import ProductCard from '../../component/product-card/ProductCard'
import "./shop.scss"
export const Shop = () => {
  const {products}=useContext(ProductCOntext)
  console.log(products);
  return (
    <div className='products'>
      {products.map((product)=>{
       return( 
        <ProductCard product={product}key={product.id} ></ProductCard>
       )
      })}
      
    </div>
  )
}
