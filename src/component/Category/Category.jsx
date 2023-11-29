import { Fragment, useContext, useEffect, useState } from 'react'
import { CategoriesContext } from '../../contexts/Categories.context'
import { useParams } from 'react-router-dom'
import "./Catrgories.scss"
import ProductCard from '../product-card/ProductCard'
const Category = () => {
    const{category}=useParams();
    console.log(category);
    const{categoriesMap}=useContext(CategoriesContext)
    const [products,setProducts]=useState(categoriesMap[category]);
    useEffect(()=>{
      setProducts(categoriesMap[category])
    },[categoriesMap,category])
  return (
    <Fragment>
      <h2 className="titleCategory">{}</h2>
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
