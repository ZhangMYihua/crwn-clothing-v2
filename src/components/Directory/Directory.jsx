import React from 'react';
import './Directory.styles.scss';

import CategoryItem from '../CategoryItem/CategoryItem';

const Directory = ({ categories }) => {
  return (
    <div className="categories-container">
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </div>
  );
};

// into app
export default Directory;
