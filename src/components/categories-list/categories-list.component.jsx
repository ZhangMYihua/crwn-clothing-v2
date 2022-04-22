import { useState, useEffect } from 'react';

import CategoryItem from '../category-item/category-item.component';

import './categories-list.styles.scss';

import categoriesJson from './categories.json';

const CategoriesList = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => setCategories(categoriesJson), []);

    return (
        <div className="categories-container">
            {
                categories.map(category => {
                    return (< CategoryItem key={category.id} category={category} />);
                })
            }
        </div>
    );
}

export default CategoriesList