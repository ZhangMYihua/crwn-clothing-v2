import './category-item.style.scss'

function CategoryItem({category}) {
    const {id, imageUrl, title} = category

    return (
        <div className='category-container'>
            <div className='background-image' style={{ backgroundImage: `url(${imageUrl})` }} />
            {/* <img src={logo} className='category-image' alt='logo' /> */}
            <div className='category-body-container'>
                <h2>{title}</h2>
                <p>Shop Now</p>
            </div>
        </div>
    )
}

export default CategoryItem