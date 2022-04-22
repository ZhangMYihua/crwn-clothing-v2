import { useState, useEffect } from 'react';

import CategoryItem from '../category-item/category-item.component';

import './categories-list.styles.scss';

const CategoriesList = ({ newCategories }) => {
    const [categories, setCategories] = useState([]);

    useEffect(() => setCategories(newCategories), []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div className="categories-container">
            {
                categories.map(category => {
                    return <CategoryItem key={category.id} category={category} />;
                })
            }
        </div>
    );
}

export default CategoriesList