import './category-item.scss'
import { useNavigate } from 'react-router-dom'

const CategoryItem = ({ category }) => {
    const { title, imageUrl } = category
    const navigate = useNavigate();

    const navigateHandler = () => {
        navigate(`/shop/${title.toLowerCase()}`)
    }

    return (
        <div className="category-item-container" onClick={navigateHandler}>
            <div
                className="category-item-bg-img"
                style={{
                    backgroundImage: `url(${imageUrl})`,
                }}
            />
            <div className="category-item-inner-container">
                <h2 className='category-item-title'>
                    {title}
                </h2>
            </div>
        </div>
    )
}

export default CategoryItem