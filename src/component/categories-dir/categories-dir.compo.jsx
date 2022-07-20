import './categories-dir.styles.scss'
import CategoryItem from '../category-item/category-item.component'
const CategoriesDirectory = ({ categories}) => {
  
  return (
    <div className='categories-container'>
      {categories.map(( category ) => {
        return (
          <CategoryItem category={category} key={category.id}/>
        )
      })}
    </div>
  )
}
  export default CategoriesDirectory