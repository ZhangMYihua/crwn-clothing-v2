import React from 'react'
import { ProductCard } from '../product-card/ProductCard'
import './category-preview.scss'

export const CategoryPreview = ({category, products}) => {
  return (
    <div className='category-preview-container'>
      <h2>
        <span className="title" >{category.toUpperCase()}</span>
      </h2>
      <div className='preview' >
        {
          products.filter((product, i) => i < 4).map((product) => <ProductCard key={product.id} product={product} />)
        }

      </div>
    </div>

  )
}