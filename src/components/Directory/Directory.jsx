import React from 'react';
import CategoryItem from '../CategoryItem/CategoryItem';
import './Directory.scss';
const Directory = (props) => {
	const { categories } = props;
	return (
		<div className='directory-container'>
			{categories.map((category) => {
				return <CategoryItem category={category} key={category.id} />;
			})}
		</div>
	);
};

export default Directory;
