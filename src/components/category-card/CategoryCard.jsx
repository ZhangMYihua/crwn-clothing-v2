import { useNavigate } from 'react-router-dom';
import {BackgroundImage, Body, CardItemContainer} from './category-card.styles'

export const CategoryCard = ({imageUrl, title}) => {
  const navigate = useNavigate();

  const goToCategory = () => {
    navigate(`/shop/${title}`)
  }
  return (
    <CardItemContainer >
      <BackgroundImage
      // able to access this prop in the styling
        imageUrl={imageUrl}
      />
      <Body onClick={goToCategory}>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </Body>
    </CardItemContainer>
  )
}

