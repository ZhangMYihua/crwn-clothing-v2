import './CategoryItem.scss'

const CategoryItem = ({ category }) => {

    const { title, imageUrl } = category

    return (
        <div className="category-container">
            <div
                className="bg-img"
                style={{
                    backgroundImage: `url(${imageUrl})`,
                }}
            />
            <div className="inner-container">
                <h2>{title}</h2>
                <p>Shop Now</p>
            </div>
        </div>
    )
}

export default CategoryItem