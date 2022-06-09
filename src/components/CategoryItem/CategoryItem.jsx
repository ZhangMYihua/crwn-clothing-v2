import React from 'react';
import { BackgroundImage, Body, CategoryContainer } from './CategoryItemStyle';
const CategoryItem = (props) => {
	const { category } = props;
	return (
		<CategoryContainer>
			<BackgroundImage imageUrl={category.imageUrl}></BackgroundImage>
			<Body>
				<h2>{category.title}</h2>
				<p>Shop Now</p>
			</Body>
		</CategoryContainer>
	);
};

export default CategoryItem;
