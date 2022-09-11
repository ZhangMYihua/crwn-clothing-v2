import './directory.styles.scss'
import CategoryItem from '../category-item/Category-item.component';

const Directory = ({categories})=> {
    return(
        <div className='directory-container'>
          {categories.map((category)=> (
            <CategoryItem category={category} key={category.id}/>
            
          ))}
          
        </div>
      ) 

};
export default Directory;