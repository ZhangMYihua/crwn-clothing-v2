import React from 'react'
import cat from "./../categories.json"
import "./CatagoriesStyle.styles.scss"
export const Catagories = () => {
  return (
    
    <div className='categories-container'>
   
        {cat.map((d)=>(
        <div className='category-container'>
          <div className="img" style={{backgroundImage:`url(${d.imageUrl})`}} />
          <div className='category-body-container'>
            <h2>{d.title}</h2>
            <p>Shop Now</p>
          </div>
        </div>
      ))
        }
    </div>
  )
}
