import React from 'react';
import CategoryItem from '../category-item/category-item.component';
import './directory.styles.scss';

const Directory = ({ categories }) => {
    return (
        <div className='directory-container'>
            {categories.map((category) => (
                <CategoryItem
                    category={category}
                    key={category.Id}
                />
            ))}
        </div>
    )
}

export default Directory;