import "./CatagoriesStyle.styles.scss"
import { useNavigate } from 'react-router-dom'
const CategoryItems = ({category}) => {
  const navigate=useNavigate();
  return (

        <div className='category-container' onClick={()=>{navigate(category.route)}}>
          <div className="img" style={{backgroundImage:`url(${category.imageUrl})`}} />
          <div className='category-body-container'>
            <h2>{category.title.toUpperCase()}</h2>
           
            <p>Shop Now</p>
          </div>
          
        </div>
         
    )
}
export default CategoryItems
