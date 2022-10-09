import {DirectoryItemContainer,BackgroundImage,Body} from "./directory-item.styles.jsx"


const DirectoryItem = ({category}) =>{
    const {imageUrl,title} = category
   
return(
    
    <DirectoryItemContainer>
        <BackgroundImage imageUrl={imageUrl}/>
        <Body>
            <h2>{title}</h2>
            <p>shop now</p>
        </Body>
    </DirectoryItemContainer>

)




;}

export default DirectoryItem;