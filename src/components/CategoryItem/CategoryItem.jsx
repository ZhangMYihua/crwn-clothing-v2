import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BackgroundImage, Body, CategoryContainer } from './CategoryItemStyle';
const CategoryItem = (props) => {
	const { category } = props;
	const navigate = useNavigate();

	const onNavigateHandler = () => navigate(category.route);
	return (
		<CategoryContainer onClick={onNavigateHandler}>
			<BackgroundImage imageUrl={category.imageUrl}></BackgroundImage>
			<Body>
				<h2>{category.title}</h2>
				<p>Shop Now</p>
			</Body>
		</CategoryContainer>
	);
};

export default CategoryItem;
