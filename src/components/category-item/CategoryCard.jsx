import React from 'react'
import './category-card.scss'

const CategoryCard = ({id, imageUrl, title}) => {
  return (
    <div key={id} className="category-card">
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      >
      </div>
      {/* <img /> */}
      <div className="category-body-container">
        <h2>{title}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  )
}

export default CategoryCard;