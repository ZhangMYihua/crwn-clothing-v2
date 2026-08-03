import { useNavigate } from 'react-router-dom';
import {DirectoryMenuContainer, BackgroundImage, Body} from './directory-item.styles';

const DirectoryItem = ({ category }) => {
  const { imageUrl, title, route } = category;
  const  navigate = useNavigate();
  const onNavigateHandler = () => navigate(route);

  return (
    <DirectoryMenuContainer onClick={onNavigateHandler}>
      <BackgroundImage
        imageUrl={imageUrl}
      />
      <Body>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </Body>
    </DirectoryMenuContainer>
  );
};

export default DirectoryItem;
