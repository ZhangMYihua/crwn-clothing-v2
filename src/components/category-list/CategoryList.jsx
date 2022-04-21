import React from 'react'
import CategoryItem from '../catergory-item/CategoryItem';
import './category-list.scss'

const CategoryList = () => {
    const categories = [
		{
			id: 1,
			title: 'Hats',
			imageUrl: 'https://i.ibb.co/cvpntL1/hats.png'
		},
		{
			id: 2,
			title: 'Jackets',
			imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png'
		},
		{
			id: 3,
			title: 'Sneakers',
			imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png'
		},
		{
			id: 4,
			title: 'Womens',
			imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png'
		},
		{
			id: 5,
			title: 'Mens',
			imageUrl: 'https://i.ibb.co/R70vBrQ/men.png'
		}
	];
  return (
		<div className="categories-list-container">
			{categories.map(category => (
				<CategoryItem key={category.id} category={category} />
			))}
		</div>
  );
}

export default CategoryList
