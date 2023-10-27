import Category from '../category-container/catergory component/Category-component';
import categoriesData from "./categories-data";
import './directory.styles.scss';

const Directory = () => {
  const categories = categoriesData;
  

  return (
    <div className="categories-container">
      {categories.map(({ id, title, imageUrl }) => (
        <Category 
          id={id}
          title={title}
          img={imageUrl}
          key={id}
        />
      ))}
    </div>
  )
}

export default Directory;