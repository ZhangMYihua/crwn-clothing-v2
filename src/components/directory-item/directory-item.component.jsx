import './directory-item.styles.scss';

const DirectoryItem = ({category}) =>{
    const {imageUrl, title, id} = category;
    return(
         <div key ={id} className="directory-item-container">
             <div className="background-image" style={{
              backgroundImage: `url(${imageUrl})`
              }}/>
              <div className="body">
                <h1>{title}</h1>
                <p>Shop Now</p>
              </div>
          </div>
    )
}

export default DirectoryItem;