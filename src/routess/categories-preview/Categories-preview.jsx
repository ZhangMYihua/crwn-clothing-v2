import {Fragment} from 'react'
import CategoriesPreview from '../../component/categories-preview/CategoriesPreview'
import "./categories.styles.scss"
import { useSelector } from 'react-redux'
export const Categoriespreview = () => {

    const {categoriesMap}=useSelector((state)=>state.Categories)
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
