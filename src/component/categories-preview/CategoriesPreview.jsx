import React from 'react'
import { Link } from 'react-router-dom'
import ProductCard from '../product-card/ProductCard'
import "./category-preview.styles.scss"
const CategoriesPreview = ({title,products}) => {
  return (
    <div className='category-preview-container'>
    <h1>
      <Link to={title}>
        <span className='title '>{title.toUpperCase()}</span>
        </Link>
    </h1>
    <br />
    <div className='preview'>
      {products
      .filter((_,index)=>index<4).map(item=>(
      
            <ProductCard product={item}/>
       
      ))}
       </div>
    </div>
  )
}

export default CategoriesPreview
