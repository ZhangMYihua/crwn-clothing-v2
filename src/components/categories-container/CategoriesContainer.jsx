import { CategoryCard } from '../category-card/CategoryCard';
import { Container } from './categories-container.styles';

export const CategoriesContainer = ({categories}) => {
  return (
   <Container>
      {categories.map((category) => {
        const {id, imageUrl, title} = category;
        return (
          <CategoryCard key={id} imageUrl={imageUrl} title={title} />
        )
      })}
    </Container>
  )
}