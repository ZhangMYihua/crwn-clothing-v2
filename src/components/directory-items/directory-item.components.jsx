import{BackgroundImage,Body,DirectoryItemContainer} from  "./directory-item.styles.jsx";

const DirectoryItem = ({category}) => {

   const { imageUrl,title} = category;

return (

<DirectoryItemContainer>
    {/* backgroundImage- make a Destructuring to add a string to another string */}
        <BackgroundImage  imageUrl = {imageUrl} />
        <Body>
          <h2>{title}</h2>
          <p>Shop Now</p>
        </Body>
      </DirectoryItemContainer>




);
    
};

export default DirectoryItem;