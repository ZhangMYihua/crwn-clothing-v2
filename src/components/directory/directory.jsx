import CategotyItem from '../category-item/categoty-item';
import './directory.scss';


const Directory = ({ categories,  }) => {
    return ( 
        <div className="directory-container">
  {categories.map(( category ) => (
    <CategotyItem key={category.id} category={category} />
  ))}   
  </div>
     );
}
 
export default Directory;