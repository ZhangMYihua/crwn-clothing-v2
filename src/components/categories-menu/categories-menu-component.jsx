import './categories-menu-styles.scss';
import CategoryItem from '../category-items/category-item.components';

const CategoryMenu = ({categories}) => {

return (

<div  className="categories-container">
   {categories.map( (category) => (

    <CategoryItem key={category.id} category={category} />
   )

   )}
    </div>
);
    

}


export default CategoryMenu