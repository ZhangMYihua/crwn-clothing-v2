import React from "react";
import CategoryItem from "../categoryItem/CategoryItem";
import "./directory.style.scss";
function Directory({ categories }) {
  return (
    <div className="categories-container">
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </div>
  );
}

export default Directory;
