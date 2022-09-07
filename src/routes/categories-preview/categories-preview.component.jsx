import React ,{ useContext, Fragment }from 'react'
// import ProductCard from '../../components/product-card/product-card.component'
import { CategoriesContext} from '../../contexts/categories.context'
import CategoryPreview from "../../components/category-preview/category-preview.component"


const  CategoriesPreview=()=> {
const {categoriesMap} = useContext(CategoriesContext)
  return (
    <Fragment  >
    {Object.keys(categoriesMap).map((title)=>{
      const products = categoriesMap[title]
      return (
        <CategoryPreview key={title} title={title} products={products}/>
      )
    })}
    </Fragment>
  )
  }

export default CategoriesPreview



// <Fragment>
//     {
//         Object.keys(categoriesMap).map((title)=>{
//      return <Fragment key={title}>
//      <h2>{title}</h2>
//      <div className='products-container'>
//      {categoriesMap[title].map((product)=>{
//       return (<ProductCard key={product.id} product={product}/>)
//     })}
    
//      </div>
//           </Fragment>
//         })
//     }
   
//     </Fragment>




