import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from "react-redux";
import { selectCategoriesMap } from "../../store/categories/category.selector";
import { ProductCard } from '../../components/product-card/ProductCard'
import { Title, CategoryContainer} from './category.styles'

export const Category = () => {
  const {category} = useParams();
  const categoriesMap = useSelector(selectCategoriesMap)
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

