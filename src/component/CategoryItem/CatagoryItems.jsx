import { Link } from 'react-router-dom'
import "./CatagoriesStyle.styles.scss"
const CategoryItems = ({category}) => {
  return (

        <div className='category-container'>
          
   
          <div className="img" style={{backgroundImage:`url(${category.imageUrl})`}} />
          
          <div className='category-body-container'>
          <Link to={`shop/${category.title}`}>
            <h2>{category.title}</h2>
           
            <p>Shop Now</p>
            </Link>
          </div>
          
        </div>
         
    )
}
export default CategoryItems
