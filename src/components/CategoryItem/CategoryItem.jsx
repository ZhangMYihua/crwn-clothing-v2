import React from 'react';

import './CategoryItem.styles.scss';

const CategoryItem = ({ category }) => {
  const { imageUrl, title } = category;

  return (
    <div className="category-container">
      {/* <img /> */}
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />

      {/* title and sub title */}
      <div className="category-body-container">
        <h2>{title}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  );
};

// into Directory
export default CategoryItem;
