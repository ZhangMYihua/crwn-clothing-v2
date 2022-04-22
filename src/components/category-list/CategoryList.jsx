import React from 'react';
import CategoryItem from '../catergory-item/CategoryItem';
import './category-list.scss';

const CategoryList = () => {
	const categories = [
		{
			id: 1,
			title: 'Hats',
			imageUrl:
				'https://images.unsplash.com/photo-1564463836146-4e30522c2984?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
		},
		{
			id: 2,
			title: 'Jackets',
			imageUrl:
				'https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
		},
		{
			id: 3,
			title: 'Sneakers',
			imageUrl:
				'https://images.unsplash.com/photo-1586525198428-225f6f12cff5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'
		},
		{
			id: 4,
			title: 'Womens',
			imageUrl:
				'https://media.istockphoto.com/photos/girl-is-relaxing-during-spa-day-picture-id1293448341?b=1&k=20&m=1293448341&s=170667a&w=0&h=m4ZGb4EZEzjFXakUiYo0uGrJNg4-2FrMnNPQ2HSXhrg='
		},
		{
			id: 5,
			title: 'Mens',
			imageUrl:
				'https://images.unsplash.com/photo-1503342083860-88762657bae7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80'
		}
	];
	return (
		<div>
			<h1 className="main-header">Crwn Clothing</h1>
            <p className='sub-header'>Redefining the online-shopping experience</p>
			<div className="categories-list-container">
				{categories.map(category => (
					<CategoryItem key={category.id} category={category} />
				))}
			</div>
		</div>
	);
};

export default CategoryList;
