import DirectoryItem from '../directory-items/directory-item.components';
import {CategoriesContainer} from './directory.styles'

const Directory = ({categories}) => {

return (

<CategoriesContainer>
   {categories.map( (category) => (

    <DirectoryItem key={category.id} category={category} />
   )

   )}
    </CategoriesContainer>
);
    

}


export default Directory;