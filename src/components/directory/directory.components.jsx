import DirectoryItem from "../directory-item/directory-item.components"
import "./directory.styles.scss"


const Directory = ({categories}) => {
  return (
    <div className="categories-container">
      {categories.map((i) => (
        <DirectoryItem category={i} key = {i.id} />
      ))}
    </div>
  );
};


export default Directory;
