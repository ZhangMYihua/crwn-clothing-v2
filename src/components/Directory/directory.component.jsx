import DirectoryItem from '../directory-items/directory-item.components';
import "./directory.styles.scss";

const Directory = ({categories}) => {

return (

<div  className="categories-container">
   {categories.map( (category) => (

    <DirectoryItem key={category.id} category={category} />
   )

   )}
    </div>
);
    

}


export default Directory;