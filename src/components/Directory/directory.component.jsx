import CategoryItem from "../category-item/category-item.component";
import "./directory.styles.scss";

function Directory({ categories }) {
  return (
    <div className="Directory-container">
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
      ;
    </div>
  );
}

export default Directory;
