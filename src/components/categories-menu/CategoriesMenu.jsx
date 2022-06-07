import "./category-menu.styles.scss"
import CategoryItem from "../category-item/CategoryItem"
import categories from "../../constants/categories"

const CategoriesMenu = () => {
  return (
    <div className="categories-container">
      {categories.map((category) => {
        return <CategoryItem key={category.id} category={category}/>
      })}

    </div>
  )
}

export default CategoriesMenu