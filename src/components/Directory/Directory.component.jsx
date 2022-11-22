import React from 'react';
import CategoryItem from '../category-item/category-item.component';

import './Directory.styles.scss';

const Directory = ({ categories }) => {
	return (
		<div className='categories-container'>
			{/* important */}
			{categories.map((category) => (
				<CategoryItem key={category.id} category={category} />
			))}
		</div>
	);
};

export default Directory;
