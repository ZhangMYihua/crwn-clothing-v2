import CategoryItem from '../Category-Item/category-item.component'

import './directory-item.style.scss'

const Directory = ({ category }) => {
  return (
     <div className='directory-container'>
      
      {category.map((category) => (
      <CategoryItem key={category.id} category={category} />
      ))}

    </div>
  );
};
export default Directory;