import { useNavigate } from "react-router-dom";
import "./directory-item.styles.jsx";
import {
  DirBackgroundImage,
  DirectoryBody,
  DirectoryItemContainer,
} from "./directory-item.styles.jsx";

const DirectoryItem = ({ category: { imageUrl, title, route } }) => {
  const navigate = useNavigate();

  const onNavigateHandler = () => navigate(route);

  return (
    <DirectoryItemContainer onClick={onNavigateHandler}>
      <DirBackgroundImage imageUrl={imageUrl} />
      <DirectoryBody>
        <h2>{title}</h2>
        <p>SHOP NOW</p>
      </DirectoryBody>
    </DirectoryItemContainer>
  );
};
export default DirectoryItem;
