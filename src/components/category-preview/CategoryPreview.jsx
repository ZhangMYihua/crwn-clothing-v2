import React from 'react'
import { Link } from 'react-router-dom'
import { ProductCard } from '../product-card/ProductCard'
import './category-preview.scss'

export const CategoryPreview = ({category, products}) => {

  return (
    <div className='category-preview-container'>
      <h2>
        <Link className="title" to={category}>
           {category.toUpperCase()}
        </Link>
      </h2>
      <div className='preview' >
        {
          products.filter((product, i) => i < 4).map((product) => <ProductCard key={product.id} product={product} category={category}/>)
        }

      </div>
    </div>

  )
}