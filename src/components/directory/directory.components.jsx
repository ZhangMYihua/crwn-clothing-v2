import CategoryItem from "../category-item/category-item.components"
import "./directory.styles.scss"


const Directory = ({categories}) => {
  return (
    <div className="categories-container">
      {categories.map((i) => (
        <CategoryItem category={i} key = {i.id} />
      ))}
    </div>
  );
};


export default Directory;
