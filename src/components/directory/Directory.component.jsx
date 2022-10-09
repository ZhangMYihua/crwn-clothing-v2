import {DirectoryContainer} from './directory.styles.jsx'
import DirectoryItem from '../directory-item/Directory-item.component';

const Directory = ({categories})=> {
    return(
        <DirectoryContainer>
          {categories.map((category)=> (
            <DirectoryItem category={category} key={category.id}/>
            
          ))}
          
        </DirectoryContainer>
      ) 

};
export default Directory;