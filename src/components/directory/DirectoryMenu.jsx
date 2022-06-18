import "./directory-menu.styles.scss"
import CategoryItem from "../category-item/CategoryItem"
import categories from "../../constants/categories"

const DirectoryMenu = () => {
  return (
    <div className="directory-container">
      {categories.map((category) => {
        return <CategoryItem key={category.id} category={category} />
      })}
    </div>
  )
}

export default DirectoryMenu
