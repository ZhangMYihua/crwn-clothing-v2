import CategoryItem from '../Category-Item/category-item.component'

import './directory-item.style.scss'

const Directory = ({ categories }) => {
  return (
     <div className='directory-container'>
      
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}

    </div>
  );
};
export default Directory;