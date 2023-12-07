import { Fragment, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import "./Catrgories.scss"
import ProductCard from '../product-card/ProductCard'
import { useSelector } from 'react-redux'
const Category = () => {
    const{category}=useParams();
   
    const {categoriesMap}=useSelector(state=>state.Categories)
    const [products,setProducts]=useState(categoriesMap[category]);
    
    useEffect(()=>{
      setProducts(categoriesMap[category])
    },[categoriesMap,category])
  return (
    <Fragment>
      <h2 className="titleCategory">{category.toUpperCase()}</h2>
    <div className='Category-container'>
      {
       products&&products.map(product=>{
        return <ProductCard key={product.id} product={product}/>
       })
      }
    </div>
    </Fragment>
  )
}

export default Category
