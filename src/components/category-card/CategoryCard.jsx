import { useNavigate } from 'react-router-dom';
import './category-card.scss'

export const CategoryCard = ({id, imageUrl, title}) => {
  const navigate = useNavigate();

  const goToCategory = () => {
    navigate(`/shop/${title}`)
  }
  return (
    <div key={id} className="category-card">
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      >
      </div>
      {/* <img /> */}
      <div className="category-body-container" onClick={goToCategory}>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  )
}

