import {Fragment, useContext} from 'react'
import { CategoriesContext } from '../../contexts/Categories.context'
import CategoriesPreview from '../../component/categories-preview/CategoriesPreview'
import "./categories.styles.scss"
export const Categoriespreview = () => {
  const {categoriesMap}=useContext(CategoriesContext)
 
  return (
    <Fragment>
    {
      Object.keys(categoriesMap).map(title=>{
       const products=categoriesMap[title];
       return <CategoriesPreview key={title} title={title} products={products}/>
        
    })}
    </Fragment>
      
    
    
  )
}
