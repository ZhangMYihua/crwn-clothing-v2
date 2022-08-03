import './CategoryItem.scss'
import { Link } from 'react-router-dom'

const CategoryItem = ({ category }) => {

    const { title, imageUrl } = category

    return (
        <div className="category-item-container">
            <div
                className="category-item-bg-img"
                style={{
                    backgroundImage: `url(${imageUrl})`,
                }}
            />
            <Link to={`/shop/${title.toLowerCase()}`} className="category-item-inner-container">
                <h2 className='category-item-title'>
                    {title}
                </h2>
            </Link>
        </div>
    )
}

export default CategoryItem