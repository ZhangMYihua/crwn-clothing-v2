import React from 'react'
import { useContext, useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { ProductCard } from '../../components/product-card/ProductCard'
import { CategoriesContext } from '../../contexts/CategoriesContext'
import { Title, CategoryContainer} from './category.styles'

export const Category = () => {
  const {category} = useParams();
  const {categoriesMap} = useContext(CategoriesContext)
  const [products, setProducts] = useState(categoriesMap[category])

  useEffect(() => {
    setProducts(categoriesMap[category])
  }, [categoriesMap, category])

  return (
    <>
    <Title >{category.toUpperCase()}</Title>
    
    <CategoryContainer>
      {
        products && products.map(product => (
          <ProductCard key={product.id} product={product} />
          )
        )
      }
    </CategoryContainer>
    </>
  )
}

