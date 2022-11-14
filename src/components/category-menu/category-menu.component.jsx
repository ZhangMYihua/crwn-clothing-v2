import CategoryItem from "../category-item/category-item.component"
import './category-menu.styles.scss'

const CategoryMenu = ({ categories }) => {
  return(
    <div className='category-menu-container'>
      {categories.map((category)=> {
        return (
          <CategoryItem 
          category={category} 
          key={category.id} 
          />
        )
      })}

    </div>
  )
}

export default CategoryMenu

// {
//   categories.map((category) => {
//     // console.log(category)
//     return (
//       <CategoryItem category={category} key={category.id} />
//     )
//   })
// }