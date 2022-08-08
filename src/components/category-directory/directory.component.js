import React from "react";
import CategoryItem from "../category-item/category-item.component";
import "./category-directory.styles.scss";

const Directory = (props) => {
  return (
    <div>
      <div className="categories-container">
        {props.categories.map((category) => (
          <CategoryItem key={category.id} category={category}></CategoryItem>
        ))}
      </div>
    </div>
  );
};

export default Directory;
