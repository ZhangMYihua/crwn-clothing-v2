import {DirectoryItemContainer,BackgroundImage,Body} from "./directory-item.styles.jsx"
import { useNavigate } from "react-router-dom";

const DirectoryItem = ({category}) =>{
    const {imageUrl,title,route} = category
    const navigate = useNavigate();
   const navHandle =()=> navigate(route);
return(
    
    <DirectoryItemContainer onClick={navHandle}>
        <BackgroundImage imageUrl={imageUrl}/>
        <Body>
            <h2>{title}</h2>
            <p>shop now</p>
        </Body>
    </DirectoryItemContainer>

)




;}

export default DirectoryItem;