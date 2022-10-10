import React from 'react'
import { ProductCard } from '../product-card/ProductCard'
import { Preview, Title, CategoryPreviewContainer } from './category-preview.styles'

export const CategoryPreview = ({category, products}) => {

  return (
    <CategoryPreviewContainer>
      <h2>
        <Title to={category}>
           {category.toUpperCase()}
        </Title>
      </h2>
      <Preview>
        {
          products.filter((product, i) => i < 4).map((product) => <ProductCard key={product.id} product={product} category={category}/>)
        }
      </Preview>
    </CategoryPreviewContainer>

  )
}