import './category.scss'

const Category = ({ id, title, img }) => {
  return (
    <div className="category-container" key={id}>
      <div 
        className="background-image" 
        style={{backgroundImage: `url(${img})`}}
      />
      <div className="category-body-container">
        <h2>{title}</h2>
        <p>Shop now</p>
      </div>
    </div>
  )
}



export default Category;