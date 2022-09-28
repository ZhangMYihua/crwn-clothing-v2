import './category-item.style.scss'

const CategoryItem = ({ category }) => {
  
  const { id, title, imageUrl } = category;
  
  return (
      <div key={id} className='category-container'>
      {/* //   <img /> */}
         <div 
          className='background-image' 
          style={{
           backgroundImage: `url(${imageUrl})`
         }} />

        <div key={id} className='category-body-container'>
          <h2>{title}</h2>
           <p>Shop Now</p>
         </div>
  
       </div>
  );
};
export default CategoryItem;