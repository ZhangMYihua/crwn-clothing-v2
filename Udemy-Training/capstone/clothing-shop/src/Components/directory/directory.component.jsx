import CategoryItem from "../category-item/category-item.component";

import "./directory.styles.scss";

const Directory = ({ passedCategoriesFromApp }) => {
  return (
    <div className="directory-container">
      {passedCategoriesFromApp.map((category) => (
        <CategoryItem key={category.id} passedCategoryFromDirectory={category} />
      ))}
    </div>
  );
};

export default Directory;
