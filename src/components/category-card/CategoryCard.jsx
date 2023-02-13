import { useNavigate } from 'react-router-dom';
import {BackgroundImage, Body, CardItemContainer} from './category-card.styles'

export const CategoryCard = ({imageUrl, title, route}) => {
  const navigate = useNavigate();

  const goToCategory = () => {
    navigate(route)
  }
  return (
    <CardItemContainer onClick={goToCategory} >
      <BackgroundImage
      // able to access this prop in the styling
        imageUrl={imageUrl}
      />
      <Body>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </Body>
    </CardItemContainer>
  )
}

